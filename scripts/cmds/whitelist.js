const { config } = global.GoatBot;
const { writeFileSync } = require("fs-extra");

module.exports = {
  config: {
    name: "whitelist",
    aliases: ["wl"],
    version: "2.0",
    author: "Shikaki | Base Code by Turtle Rehat, and Ntkhang03",
    countDown: 5,
    role: 2,
    description: {
      en: "Manage whitelist: add, remove, list users, and toggle whitelist mode"
    },
    category: "owner",
    guide: {
      en: '{pn}: Show whitelist mode status\n{pn} [add | a or remove | r] <uid | @tag>: Add/remove user(s) to/from whitelist\n{pn} (list | l) [page-number | uid | @tag]: List whitelisted users or check specific user\n{pn} [on | off]: Enable/disable whitelist mode'
    }
  },

  onStart: async function ({ message, args, usersData, event }) {
    const action = args[0]?.toLowerCase();
    const whiteList = config.whiteListMode.whiteListIds;

    const updateConfig = () => writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));

    const getTargetIds = () => {
      if (event.type === "message_reply") return [event.messageReply.senderID];
      return Object.keys(event.mentions).length > 0 ? Object.keys(event.mentions) : args.slice(1).filter(arg => !isNaN(arg));
    };

    // If no arguments provided, show whitelist mode status
    if (!action) {
      const status = config.whiteListMode.enable ? "enabled" : "disabled";
      return message.reply(`Whitelist mode is currently ${status}.\nTotal whitelisted users: ${whiteList.length}`);
    }

    switch (action) {
      case "add":
      case "a":
        const addIds = getTargetIds();
        if (addIds.length === 0) return message.reply("⚠️ 𝘗𝘭𝘦𝘢𝘴𝘦 𝘱𝘳𝘰𝘷𝘪𝘥𝘦 𝘶𝘴𝘦𝘳 𝘐𝘋(𝘴) 𝘰𝘳 𝘵𝘢𝘨 𝘶𝘴𝘦𝘳(𝘴) 𝘵𝘰 𝘢𝘥𝘥.");
        const added = addIds.filter(id => !whiteList.includes(id));
        whiteList.push(...added);
        updateConfig();
        return message.reply(`✅ 𝘈𝘥𝘥𝘦𝘥 ${added.length} 𝘶𝘴𝘦𝘳(s) 𝙩𝙤 𝙬𝙝𝙞𝙩𝙚𝙡𝙞𝙨𝙩.`);

      case "remove":
      case "r":
        const removeIds = getTargetIds();
        if (removeIds.length === 0) return message.reply("⚠️ ᑭᒪᗴᗩՏᗴ ᑭᖇOᐯIᗪᗴ ᑌՏᗴᖇ Iᗪ(s) Oᖇ Tᗩᘜ ᑌՏᗴᖇ(s) TO ᖇᗴᗰOᐯᗴ.");
        const removed = removeIds.filter(id => whiteList.includes(id));
        config.whiteListMode.whiteListIds = whiteList.filter(id => !removed.includes(id));
        updateConfig();
        return message.reply(`✅ 𝗥𝗲𝗺𝗼𝘃𝗲𝗱 ${removed.length} 𝘂𝘀𝗲𝗿(s) 𝗳𝗿𝗼𝗺 ᗯᕼITᗴᒪIՏT.`);

      case "list":
      case "l":
        const pageSize = 20;
        const targetId = getTargetIds()[0];

        if (targetId) {
          const isWhitelisted = whiteList.includes(targetId);
          const userName = await usersData.getName(targetId) || "Unknown";
          return message.reply(`User ${userName} (${targetId}) is ${isWhitelisted ? "✅ whitelisted" : "❌ not whitelisted"}.`);
        }

        const page = parseInt(args[1]) || 1;
        const totalPages = Math.ceil(whiteList.length / pageSize);
        if (page > totalPages) return message.reply("No members on this page.");
        const startIndex = (page - 1) * pageSize;
        const pageMembers = whiteList.slice(startIndex, startIndex + pageSize);
        const membersText = await Promise.all(pageMembers.map(async id => ` • ${await usersData.getName(id) || "Unknown"} (${id})`));
        return message.reply(`👑 𝐖𝐡𝐢𝐭𝐞𝐥𝐢𝐬𝐭𝐞𝐝 𝐮𝐬𝐞𝐫𝐬 (Page ${page}/${totalPages}):\n${membersText.join("\n")}\n\nTotal: ${whiteList.length}`);

      case "on":
      case "off":
        config.whiteListMode.enable = action === "on";
        updateConfig();
        return message.reply(`✅ ᗯᕼITᗴᒪIՏT 𝗺𝗼𝗱𝗲 ${action === "on" ? "enabled" : "disabled"}.`);

      default:
        return message.reply("⚠️ Eh bien, bravo ! T’as réussi à faire une erreur de base. Il suffit de taper '𝗮𝗱𝗱', '𝗿𝗲𝗺𝗼𝘃𝗲', '𝗹𝗶𝘀𝘁', '𝗼𝗻', ou '𝗼𝗳𝗳'.\nMais visiblement, ça dépasse tes capacités. Essaye encore, ou pas, c’est toi qui vois.");
    }
  }
};
