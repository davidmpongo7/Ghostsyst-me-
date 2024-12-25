module.exports = {
  config: {
    name: "slot",
    version: "1.4",
    author: "Ronald (No-Cheap Bets Edition)",
    role: 0,
    shortDescription: "Un jeu pour les courageux (et riches)",
    longDescription: "Mise au moins 50, ou dégage !",
    category: "game",
    guide: {
      en: "{p}slot {money} / Réponds avec un numéro entre 1 et 3"
    }
  },

  onStart: async function ({ args, message, event, api, usersData }) {
    try {
      const amount = parseInt(args[0]);
      if (isNaN(amount) || amount <= 0) {
        const invalidAmountReplies = [
          "💩 Mets un montant valable, champion de la médiocrité !",
          "🙄 T'as cru que c'était gratuit ici ? Réessaye sans être débile.",
          "😂 Sérieux ? Même mon chien est meilleur en maths.",
          "💀 Un chiffre positif, Einstein. Pas tes rêves de richesse."
        ];
        return message.reply(invalidAmountReplies[Math.floor(Math.random() * invalidAmountReplies.length)]);
      }

      if (amount < 50) {
        const lowBetReplies = [
          "🤣 Tu veux que je fasse quoi avec moins de 50 balles ? Hein !? Achète-toi un miroir pour voir à quoi ressemble la pauvreté en personne, et reviens avec un vrai montant, clochard!",
          "🙄 Sérieux, 50 c'est la mise minimum ici. Reviens quand t'auras grandi.",
          "😂 T'as cru que c'était une tombola ? Mise au moins 50, radin !",
          "💰 Tu veux jouer avec 50 centimes ou quoi ? On prend pas les clochards ici."
        ];
        return message.reply(lowBetReplies[Math.floor(Math.random() * lowBetReplies.length)]);
      }

      const senderID = event.senderID;
      const userData = await usersData.get(senderID);

      if (amount > userData.money) {
        const noMoneyReplies = [
          "🤣 T'es tellement fauché qu'un mendiant te ferait la charité !",
          "🪙 Reviens quand t'auras un peu plus que 3 centimes en poche.",
          "😂 Sérieux, t'as même pas de quoi jouer ici. Va économiser !",
          "💰 Aïe... t'as vu ton compte ? Il pleure de pauvreté."
        ];
        return message.reply(noMoneyReplies[Math.floor(Math.random() * noMoneyReplies.length)]);
      }

      const sentMessage = await message.reply("🎰 Prépare-toi à perdre ton argent... ou ta dignité !");
      
      const emojis = ['😂', '💩', '💵'];
      emojis.sort(() => Math.random() - 0.5);

      const gemPosition = emojis.indexOf('💵');

      global.GoatBot.onReply.set(sentMessage.messageID, {
        commandName: "slot",
        messageID: sentMessage.messageID,
        correctAnswer: gemPosition,
        amount: amount,
        senderID: senderID
      });

    } catch (error) {
      console.error("Erreur dans la commande slot :", error);
      const errorReplies = [
        "🤬 T'as réussi à tout casser, bravo.",
        "💀 Quelque chose a foiré, mais c'est sûrement ta faute.",
        "😡 Génial, encore une erreur. Apprends à coder, peut-être ?",
        "🙃 Ça marche pas. Peut-être parce que t'es maudit ?"
      ];
      message.reply(errorReplies[Math.floor(Math.random() * errorReplies.length)]);
    }
  },

  onReply: async function ({ message, event, Reply, api, usersData }) {
    try {
      if (!event || !message || !Reply) return;
      const userAnswer = event.body.trim();

      if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 3) {
        const invalidReplies = [
          "🙄 C'est 1, 2 ou 3. Pas ton QI.",
          "💩 Sérieux ? Réponds correctement ou retourne à l'école.",
          "😂 Tu joues ou tu trolles ? Donne un vrai numéro !",
          "🤔 T'as vu les règles ? Relis-les avant de faire n'importe quoi."
        ];
        return message.reply(invalidReplies[Math.floor(Math.random() * invalidReplies.length)]);
      }

      const gemPosition = Reply.correctAnswer;
      const chosenPosition = parseInt(userAnswer) - 1;

      const senderID = Reply.senderID;
      const userData = await usersData.get(senderID);

      if (chosenPosition === gemPosition) {
        const winnings = Reply.amount * 2;
        await usersData.set(senderID, { money: userData.money + winnings });
        const winReplies = [
          `🎉 Bravo, t'as gagné ${winnings} balles ! Mais profite, ça va pas durer.`,
          `💰 Oh, un miracle ! T'as gagné ${winnings} balles. Pour une fois que t'as de la chance.`,
          `🎊 Incroyable ! ${winnings} balles pour toi. Mais va pas les gaspiller comme un idiot.`,
          `🍾 Félicitations, tu gagnes ${winnings} balles ! Mais attention, la chute sera brutale.`
        ];
        return message.reply(winReplies[Math.floor(Math.random() * winReplies.length)]);
      } else {
        const lostAmount = Reply.amount;
        await usersData.set(senderID, { money: userData.money - lostAmount });
        const loseReplies = [
          `❌ HAHAHA ! T'as perdu ${lostAmount} balles. Bien joué, pigeon.`,
          `🤣 Merci pour ton fric. ${lostAmount} balles de moins pour toi !`,
          `💀 Dommage... ${lostAmount} balles en moins. Retourne pleurer.`,
          `😂 Sérieux, t'as cru que t'allais gagner ? Perdu ! ${lostAmount} balles en l'air.`
        ];
        return message.reply(loseReplies[Math.floor(Math.random() * loseReplies.length)]);
      }
    } catch (error) {
      console.error("Erreur dans la gestion de la réponse :", error);
      const errorReplies = [
        "🤬 T'as tout cassé ! Bravo, champion.",
        "💀 Un bug ? Ou juste toi qui sais pas jouer ?",
        "🙄 Génial, tout est bloqué maintenant. Merci !",
        "😡 Sérieusement, ça devient pénible."
      ];
      message.reply(errorReplies[Math.floor(Math.random() * errorReplies.length)]);
    }
  }
};
