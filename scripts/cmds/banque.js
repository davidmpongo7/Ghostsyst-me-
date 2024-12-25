const fs = require("fs");

const path = require("path");

module.exports = {
  config: {
    name: "banque",
    version: "1.2",
    description: "Déposer ou retirer de l'argent de la banque et gagner des intérêts",
    guide: {
      vi: "",
      en: "{pn}Bank:\nInterest - Balance\n - Withdraw \n- Deposit \n- Transfer \n- Richest"
    },
    category: "💰 Économie",
    countDown: 15,
    role: 0,
    author: "Loufi | SiAM | Samuel\n\nModifié : Shikaki"
  },

  onStart: async function ({ args, message, event, api, usersData }) {
    const { getPrefix } = global.utils;
    const p = getPrefix(event.threadID);

    const userMoney = await usersData.get(event.senderID, "money");
    const user = parseInt(event.senderID);
    const info = await api.getUserInfo(user);
    const username = info[user].name;

    const bankDataPath = 'scripts/cmds/bankData.json';

    if (!fs.existsSync(bankDataPath)) {
      const initialBankData = {};
      fs.writeFileSync(bankDataPath, JSON.stringify(initialBankData), "utf8");
    }

    const bankData = JSON.parse(fs.readFileSync(bankDataPath, "utf8"));

    if (!bankData[user]) {
      bankData[user] = { bank: 0, lastInterestClaimed: Date.now() };
      fs.writeFileSync(bankDataPath, JSON.stringify(bankData), "utf8");
    }

    bankBalance = bankData[user].bank || 0;

    const command = args[0]?.toLowerCase();
    const amount = parseInt(args[1]);
    const recipientUID = parseInt(args[2]);

    switch (command) {
      case "déposer":
        if (isNaN(amount) || amount <= 0) {
          return message.reply("╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Tu veux déposer combien ? Ce n'est pas sérieux ça 🔁•\n\n╚════ஜ۩۞۩ஜ═══╝");
        }

        if (bankBalance >= 1e104) {
          return message.reply("╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Tu es déjà à $1e104, tu veux exploser la banque ? ✖•\n\n╚════ஜ۩۞۩ஜ═══╝");
        }

        if (userMoney < amount) {
          return message.reply("╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Tu n'as même pas assez d'argent pour déposer ce montant ✖•\n\n╚════ஜ۩۞۩ஜ═══╝");
        }

        bankData[user].bank += amount;
        await usersData.set(event.senderID, { money: userMoney - amount });
        fs.writeFileSync(bankDataPath, JSON.stringify(bankData), "utf8");

        return message.reply(`╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Tu as déposé $${amount} sur ton compte, félicitations... je crois ✅•\n\n╚════ஜ۩۞۩ஜ═══╝`);

      case "retirer":
        const balance = bankData[user].bank || 0;

        if (isNaN(amount) || amount <= 0) {
          return message.reply("╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Tu veux retirer combien là ? Faut préciser 😪•\n\n╚════ஜ۩۞۩ஜ═══╝");
        }

        if (userMoney >= 1e104) {
          return message.reply("╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏On ne peut plus retirer de l'argent à $1e104, t'es à fond là 😒•\n\n╚════ஜ۩۞۩ஜ═══╝");
        }

        if (amount > balance) {
          return message.reply("╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Tu n'as même pas assez d'argent dans ta banque pour ça 🗿•\n\n╚════ஜ۩۞۩ஜ═══╝");
        }

        bankData[user].bank = balance - amount;
        await usersData.set(event.senderID, { money: userMoney + amount });
        fs.writeFileSync(bankDataPath, JSON.stringify(bankData), "utf8");

        return message.reply(`╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Tu as retiré $${amount} de ton compte, bravo 😏•\n\n╚════ஜ۩۞۩ஜ═══╝`);

      case "solde":
        const formattedBankBalance = parseFloat(bankBalance);
        if (!isNaN(formattedBankBalance)) {
          return message.reply(`╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Ton solde bancaire est de : $${formatNumberWithFullForm(formattedBankBalance)}\n\n╚════ஜ۩۞۩ஜ═══╝`);
        } else {
          return message.reply("╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Erreur, ton solde n'est pas un nombre valide 🥲•\n\n╚════ஜ۩۞۩ஜ═══╝");
        }

      case "intérêt":
        const interestRate = 0.001; // 0.1% taux d'intérêt quotidien
        const lastInterestClaimed = bankData[user].lastInterestClaimed || 0;
        const currentTime = Date.now();
        const timeDiffInSeconds = (currentTime - lastInterestClaimed) / 1000;

        if (timeDiffInSeconds < 86400) {
          const remainingTime = Math.ceil(86400 - timeDiffInSeconds);
          const remainingHours = Math.floor(remainingTime / 3600);
          const remainingMinutes = Math.floor((remainingTime % 3600) / 60);

          return message.reply(`╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Tu peux réclamer tes intérêts dans ${remainingHours} heures et ${remainingMinutes} minutes 😉•\n\n╚════ஜ۩۞۩ஜ═══╝`);
        }

        const interestEarned = bankData[user].bank * (interestRate / 970) * timeDiffInSeconds;

        if (bankData[user].bank <= 0) {
          return message.reply("╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Tu n'as même pas un centime sur ton compte pour gagner des intérêts 💸🥱•\n\n╚════ஜ۩۞۩ஜ═══╝");
        }

        bankData[user].lastInterestClaimed = currentTime;
        bankData[user].bank += interestEarned;
        fs.writeFileSync(bankDataPath, JSON.stringify(bankData), "utf8");

        return message.reply(`╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Tu as gagné des intérêts de $${formatNumberWithFullForm(interestEarned)}\n\nIls ont été ajoutés à ton solde ✅•\n\n╚════ஜ۩۞۩ஜ═══╝`);

      // Ajoutez d'autres commandes similaires avec des messages moqueurs pour "transfert", "le plus riche", "prêt" et "remboursement" si nécessaire...

      default:
        return message.reply("╔════ஜ۩۞۩ஜ═══╗\n\n[🏦 Banque 🏦]\n\n❏Utilise une commande valide, genre Déposer, Retirer, Solde, Intérêt, Transférer, Le plus riche, Prêt, Rembourser le prêt... Ça devient fatiguant 😒•\n\n╚════ஜ۩۞۩ஜ═══╝");
    }
  }
};

// Fonction pour formater un nombre avec des formes complètes (par exemple, 1 Mille, 133 Million, 76.2 Milliard)
function formatNumberWithFullForm(number) {
  const fullForms = [
    "",
    "Mille",
    "Million",
    "Milliard",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
    "Sextillion",
    "Septillion",
    "Octillion",
    "Nonillion",
    "Décillion",
    "Undécillion",
    "Duodécillion",
    "Trédecillion",
    "Quattuordécillion",
    "Quindécillion",
    "Sexdécillion",
    "Septendécillion",
    "Octodécillion",
    "Novemdécillion",
    "Vigintillion",
    "Unvigintillion",
    "Duovigintillion",
    "Tresvigintillion",
    "Quattuorvigintillion",
    "Quinvigintillion",
    "Sesvigintillion",
    "Septemvigintillion",
    "Octovigintillion",
    "Novemvigintillion",
    "Trigintillion",
    "Untrigintillion",
    "Duotrigintillion",
    "Googol",
  ];

  let fullFormIndex = 0;
  while (number >= 1000 && fullFormIndex < fullForms.length - 1) {
    number /= 1000;
    fullFormIndex++;
  }

  const formattedNumber = number.toFixed(2);
  return `${formattedNumber} ${fullForms[fullFormIndex]}`;
}
