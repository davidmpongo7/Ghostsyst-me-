module.exports = {
  config: {
    name: "jeu",
    aliases: ["dark"],
    version: "1.0",
    author: "ʬɸʬ Shïsûį Dånïęl ʬɸʬ",
    countDown: 10,
    role: 0,
    shortDescription: "Amuses toi bien au jeu du hasard",
    longDescription: "Seul le hasard tu rendras riche ou pauvre...Bonne chance",
    category: "game",
    guide: "{pn} <Ghost/Dark> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["ghost", "dark"].includes(betType)) {
      return message.reply("🎁 | Choisis : 'ghost' ou 'dark'. 😑");
    }

    if (!Number.isInteger(betAmount) || betAmount < 50) {
      return message.reply("🌿 | Mise au moins 50$ ou plus. 🍆");
    }

    if (betAmount > userData.money) {
      return message.reply("💁 | Vas demander un transfert à quelqu'un d'autre. 😂");
    }

    const dice = [1, 2, 3, 4, 5, 6];
    const results = [];

    for (let i = 0; i < 3; i++) {
      const result = dice[Math.floor(Math.random() * dice.length)];
      results.push(result);
    }

    const winConditions = {
      small: results.filter((num, index, arr) => num >= 1 && num <= 3 && arr.indexOf(num) !== index).length > 0,
      big: results.filter((num, index, arr) => num >= 4 && num <= 6 && arr.indexOf(num) !== index).length > 0,
    };

    const resultString = results.join(" | ");

    const winMessages = [
      `Ghost ──── T'as eu de la chance, mais faut pas s'emballer. [ ${resultString} ] 💰 | T'as gagné ${betAmount * 2}€. Pour un temps.`,
      `Dark ──── T'as fait le bon choix pour une fois. [ ${resultString} ] 🎉 | T'as gagné ${betAmount * 2}€. Ne te fais pas trop d'illusions.`,
      `Ghost ──── Incroyable, mais t'as encore de la chance. [ ${resultString} ] 💰 | T'as gagné ${betAmount * 2}€. Profite avant que la chance te lâche. 😈`,
      `Dark ──── Oh, tu l'as fait, t'as bien joué. [ ${resultString} ] 🎉 | T'as gagné ${betAmount * 2}€. Mais ça ne veut rien dire. 😏`,
      `Ghost ──── T'es un vrai chanceux ! T'as pas encore compris que t'es une exception. [ ${resultString} ] 💰 | T'as gagné ${betAmount * 2}€. En attendant, profite. 😜`,
      `Dark ──── C'est presque ridicule que tu gagnes. [ ${resultString} ] 🎉 | T'as gagné ${betAmount * 2}€. La chance te sourit mais pour combien de temps ? 😅`,
      `Ghost ──── T'as fait un bon coup, pour une fois. [ ${resultString} ] 💰 | T'as gagné ${betAmount * 2}€. Mais faut pas t'enflammer. 😤`,
      `Dark ──── T'as vraiment fait un choix intelligent, je suis surpris. [ ${resultString} ] 🎉 | T'as gagné ${betAmount * 2}€. Je vais t'écraser la prochaine fois.`,
      `Ghost ──── Eh bien, c'est étonnant. [ ${resultString} ] 💰 | T'as gagné ${betAmount * 2}€. Bravo, mais ça ne durera pas. 🤨`,
      `Dark ──── Ah, tu crois vraiment que tu mérites ça ? [ ${resultString} ] 🎉 | T'as gagné ${betAmount * 2}€. Bien joué... mais c'est pas fini.`
    ];

    const loseMessages = [
      `Ghost ──── T'es tellement mauvais que même la chance te fuit. [ ${resultString} ] 🤦🏼 | T'as perdu ${betAmount}€. T'es une vraie calamité. 💀`,
      `Dark ──── Sérieusement ? T'es un cas désespéré. [ ${resultString} ] 🤦🏼 | T'as perdu ${betAmount}€. T'as l'air d'un clown. 🤡`,
      `Ghost ──── Comment t'as pu être aussi mauvais ? [ ${resultString} ] 🤡 | T'as perdu ${betAmount}€. Va prendre des cours de chance. 🖕🏻`,
      `Dark ──── Tu croyais vraiment que t'allais gagner ? [ ${resultString} ] 🤦🏼 | T'as perdu ${betAmount}€. T'es vraiment un amateur. 😂`,
      `Ghost ──── Tu n'as rien compris. [ ${resultString} ] 🤡 | T'as perdu ${betAmount}€. T'es juste là pour être ridicule. 💩`,
      `Dark ──── T'es tellement nul que même les dés te boudent. [ ${resultString} ] 🤦🏼 | T'as perdu ${betAmount}€. C'est pathétique. 🤦‍♂️`,
      `Ghost ──── Tu te débrouilles vraiment mal. [ ${resultString} ] 🤡 | T'as perdu ${betAmount}€. Mais sérieusement, qui t'a laissé jouer ? 😑`,
      `Dark ──── T'es vraiment un épave. [ ${resultString} ] 🤡 | T'as perdu ${betAmount}€. C'est un désastre. 🥴`,
      `Ghost ──── T'as raté ça comme un amateur. [ ${resultString} ] 🤡 | T'as perdu ${betAmount}€. Je pourrais pas être plus déçu de toi. 😤`,
      `Dark ──── T'as vraiment cru que t'allais gagner ? T'es pas même proche. [ ${resultString} ] 🤦🏼 | T'as perdu ${betAmount}€. T'es un échec. 😂`
    ];

    if ((winConditions[betType] && Math.random() <= 0.4) || (!winConditions[betType] && Math.random() > 0.4)) {
      const winAmount = 2 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(winMessages[Math.floor(Math.random() * winMessages.length)]);
    } else {
      userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(loseMessages[Math.floor(Math.random() * loseMessages.length)]);
    }
  }
  }
