const { findUid } = global.utils;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
    config: {
        name: "adduser",
        version: "1.5",
        author: "NTKhang",
        countDown: 5,
        role: 1,
        description: {
            vi: "Thêm thành viên vào box chat của bạn",
            en: "Add user to box chat of you"
        },
        category: "box chat",
        guide: {
            en: "   {pn} [link profile | uid]"
        }
    },

    langs: {
        vi: {
            alreadyInGroup: "📌 Đã có trong nhóm, siêu sao.",
            successAdd: "✅ - Đã thêm thành công %1 thành viên vào nhóm. Đừng quên cảm ơn nhé.",
            failedAdd: "❌ - Không thể thêm %1 thành viên vào nhóm. Có lẽ lần sau đừng làm phiền người ta nữa.",
            approve: "📝 - Đã thêm %1 thành viên vào danh sách phê duyệt. Ai tiếp theo đây, hả?",
            invalidLink: "⚠️ Vui lòng nhập link Facebook hợp lệ. Cái này không phải là phép thuật đâu nhé.",
            cannotGetUid: "🚫 Không thể lấy được uid của người dùng này. Có lẽ lần sau dùng link thật nhé?",
            linkNotExist: "🔗 Profile url này không tồn tại. Đừng nói là bạn vừa bịa ra đó nhé?",
            cannotAddUser: "🛑 Bot bị chặn tính năng hoặc người dùng này chặn người lạ thêm vào nhóm. Thử không làm phiền họ nữa đi."
        },
        en: {
            alreadyInGroup: "📌 Déjà dans le groupe, génie. Vraiment en train de vivre le rêve, hein ?",
            successAdd: "✅ - %1 membre(s) ajouté(s) avec succès au groupe. De rien, essaie de ne pas tout gâcher cette fois. 😊",
            failedAdd: "❌ - Échec de l'ajout de %1 membre(s) au groupe. Peut-être que la prochaine fois, essaie d'être utile pour une fois ? 😐",
            approve: "📝 - %1 membre(s) ajouté(s) à la liste d'approbation. Qui est le suivant, génie ? 😒",
            invalidLink: "⚠️ Veuillez entrer un lien Facebook valide. Monsieur 🏌️",
            cannotGetUid: "🚫 Impossible d'obtenir l'UID de cet utilisateur. Essaie un vrai lien la prochaine fois, pas une blague. 😂",
            linkNotExist: "🔗 Ce profil n'existe pas. T'as inventé ce lien ou quoi ? 😒",
            cannotAddUser: "🛑 Le bot est bloqué, ou cet utilisateur a bloqué les étrangers pour les ajouter. Essaie de ne pas les embêter, d'accord ? 😐"
        }
    },

    onStart: async function ({ message, api, event, args, threadsData, getLang }) {
        const { members, adminIDs, approvalMode } = await threadsData.get(event.threadID);
        const botID = api.getCurrentUserID();

        const success = [
            {
                type: "success",
                uids: []
            },
            {
                type: "waitApproval",
                uids: []
            }
        ];
        const failed = [];

        function checkErrorAndPush(messageError, item) {
            item = item.replace(/(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)/i, '');
            const findType = failed.find(error => error.type == messageError);
            if (findType)
                findType.uids.push(item);
            else
                failed.push({
                    type: messageError,
                    uids: [item]
                });
        }

        const regExMatchFB = /(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/i;
        for (const item of args) {
            let uid;
            let continueLoop = false;

            if (isNaN(item) && regExMatchFB.test(item)) {
                for (let i = 0; i < 10; i++) {
                    try {
                        uid = await findUid(item);
                        break;
                    }
                    catch (err) {
                        if (err.name == "SlowDown" || err.name == "CannotGetData") {
                            await sleep(1000);
                            continue;
                        }
                        else if (i == 9 || (err.name != "SlowDown" && err.name != "CannotGetData")) {
                            checkErrorAndPush(
                                err.name == "InvalidLink" ? getLang('invalidLink') :
                                    err.name == "CannotGetData" ? getLang('cannotGetUid') :
                                        err.name == "LinkNotExist" ? getLang('linkNotExist') :
                                            err.message,
                                item
                            );
                            continueLoop = true;
                            break;
                        }
                    }
                }
            }
            else if (!isNaN(item))
                uid = item;
            else
                continue;

            if (continueLoop == true)
                continue;

            if (members.some(m => m.userID == uid && m.inGroup)) {
                checkErrorAndPush(getLang("alreadyInGroup"), item);
            }
            else {
                try {
                    await api.addUserToGroup(uid, event.threadID);
                    if (approvalMode === true && !adminIDs.includes(botID))
                        success[1].uids.push(uid);
                    else
                        success[0].uids.push(uid);
                }
                catch (err) {
                    checkErrorAndPush(getLang("cannotAddUser"), item);
                }
            }
        }

        const lengthUserSuccess = success[0].uids.length;
        const lengthUserWaitApproval = success[1].uids.length;
        const lengthUserError = failed.length;

        let msg = "";
        if (lengthUserSuccess)
            msg += `${getLang("successAdd", lengthUserSuccess)}\n`;
        if (lengthUserWaitApproval)
            msg += `${getLang("approve", lengthUserWaitApproval)}\n`;
        if (lengthUserError)
            msg += `${getLang("failedAdd", failed.reduce((a, b) => a + b.uids.length, 0))} ${failed.reduce((a, b) => a += `\n    + ${b.uids.join('\n       ')}: ${b.type}`, "")}`;
        await message.reply(msg);
    }
};
