module.exports = {
  config: {
    name: "balance",
    aliases: ["bal"],
    version: "1.4",
    author: "NTKhang",
    countDown: 5,
    role: 0,
    description: {
      vi: "xem số tiền hiện có của bạn hoặc người được tag",
      en: "regarde ton argent ou celui de la personne taguée"
    },
    category: "economy",
    guide: {
      vi: "{pn}: xem số tiền của bạn"
        + "\n{pn} <@tag>: xem số tiền của người được tag",
      en: "{pn}: vois ton argent"
        + "\n{pn} <@tag>: vois l'argent de la personne taguée"
    }
  },

  langs: {
    vi: {
      money: "Bạn đang có %1$",
      moneyOf: "%1 đang có %2$"
    },
    en: {
      money: "Tu as %1$",
      moneyOf: "%1 a %2$"
    }
  },

  onStart: async function ({ message, usersData, event, getLang }) {
    try {
      let responseMessage = "";

      // Fonction pour obtenir le commentaire humoristique selon la somme d'argent
      const getHumorousComment = (money) => {
        const responses = [];

        if (money <= 10) {
          responses.push(
            "Bravo, t’es officiellement plus inutile qu’un gobelet sans eau.",
            "Même un pigeon en centre-ville a plus d’argent que toi.",
            "Avec ça, tu peux peut-être t’acheter un chewing-gum… usagé.",
            "T’as tellement rien que même ton ombre hésite à te suivre.",
            "Ta banque a appelé, elle veut que tu laisses tomber, par pitié.",
            "Tu n’es pas à sec, tu es carrément en mode Sahara.",
            "Ton portefeuille est plus vide qu’une boîte de chocolats après Noël.",
            "Avec cette somme, même un enfant de 3 ans rirait de toi.",
            "T’as plus de dettes que de cheveux sur la tête. Félicitations.",
            "Ton compte bancaire est comme ton avenir : inexistant."
          );
        } else if (money <= 500) {
          responses.push(
            "Avec ça, tu peux t’acheter un paquet de chips discount. La misère te va bien.",
            "Félicitations, t’es la définition parfaite de la pauvreté cool.",
            "Ah, le grand rêve ! Acheter une pizza… surgelée. Bravo.",
            "Même un chien errant a plus d’économies que toi.",
            "Ton portefeuille est une blague ambulante.",
            "Avec cette somme, tu pourrais inspirer un roman triste.",
            "Ton argent est à peine suffisant pour acheter du sel. Profite !",
            "Même une calculatrice refuse de traiter tes finances.",
            "T’as assez pour te payer un sandwich… sans garniture.",
            "Ta richesse est aussi fragile qu’une bulle de savon."
          );
        } else if (money <= 1000) {
          responses.push(
            "Super, t’as assez pour un fast-food. Juste un menu enfant, mais c’est mieux que rien.",
            "T’es officiellement assez riche pour un happy meal… sans le jouet.",
            "Avec ça, tu peux peut-être inviter quelqu’un au resto… si tu partages la note.",
            "Ton argent est à peine suffisant pour survivre une journée… dans Minecraft.",
            "Même un ticket de métro te ferait hésiter à dépenser.",
            "T’as de quoi acheter un rêve… mais pas la réalité.",
            "T’as juste assez pour impressionner un enfant de 5 ans.",
            "Ton niveau de richesse est plus bas que celui de l’eau au désert.",
            "Bravo, avec ça tu peux acheter une amitié… temporaire.",
            "Un fast-food ? Peut-être, mais pas de dessert. Trop cher !"
          );
        } else if (money <= 5000) {
          responses.push(
            "T’as de quoi payer un resto pas trop cher. Mais fais attention, ça va partir vite.",
            "Avec ça, t’es officiellement riche… selon un enfant de 6 ans.",
            "Ah, un ticket pour le cinéma ! Mais pas de popcorn. T’es fou ?",
            "T’as assez pour te faire un kiff… sauf si tu veux du luxe.",
            "Avec cette somme, t’es le roi du quartier. Mais juste pour une journée.",
            "T’as quoi ? 5000$ ? C’est bien… si tu vis dans les années 80.",
            "Tu pourrais t’acheter des vêtements… mais pas de marque.",
            "Avec ça, t’as de quoi te prendre pour un riche. Mais juste un instant.",
            "Ah, la vie de rêve… ou pas. Retourne bosser.",
            "T’as autant d’argent que de talent. Pas de quoi se vanter."
          );
        } else if (money <= 10000) {
          responses.push(
            "Pas mal, avec ça tu pourrais te la péter… mais seulement devant tes cousins. Du calme.",
            "T’as assez pour acheter des followers… mais pas leur respect.",
            "Avec cette somme, tu peux impressionner quelqu’un… de vraiment naïf.",
            "Tu veux te sentir riche ? Va dans un pays où ta monnaie vaut quelque chose.",
            "10 000$ ? Pas mal ! Mais essaie d’avoir une vie avec ça.",
            "T’as autant d’argent que de charisme. Alors pas énorme, mais suffisant.",
            "Tu peux acheter un cadeau. Mais pas un truc mémorable.",
            "Avec ça, même un ado ne serait pas impressionné.",
            "Ton compte est correct. Mais pas de quoi se sentir en sécurité.",
            "Tu peux rêver de luxe. Mais juste rêver."
          );
        } else if (money <= 100000) {
          responses.push(
            "Avec ça, t’es officiellement un bourgeois d’entrée de gamme. Félicitations, larbin de luxe.",
            "Ton compte est joli, mais pas assez pour qu’on t’appelle Monsieur.",
            "T’as assez pour acheter une voiture… d’occasion. Merci, la bourgeoisie.",
            "Ah, 100 000$. Tu peux respirer tranquille… pour deux semaines.",
            "Avec cette somme, t’es un roi. Mais juste dans ton imagination.",
            "Bravo, t’es le genre de riche que personne n’envie. Pas encore.",
            "Ton argent commence à devenir intéressant. Mais pas assez.",
            "Tu peux prétendre être riche. Mais tout le monde sait que tu ne l’es pas.",
            "Avec ça, t’as de quoi t’offrir un luxe… éphémère.",
            "Ton portefeuille est gros. Mais ta vie reste vide."
          );
        } else if (money <= 1000000) {
          responses.push(
            "Avec autant d’argent, tu pourrais presque acheter le respect… mais pas le mien.",
            "T’es riche, mais toujours pas assez pour qu’on t’aime sincèrement.",
            "1 000 000$, et toujours pas d’ami. La vie est cruelle.",
            "Avec ça, tu peux acheter le silence des gens. Mais pas leur sincérité.",
            "T’es riche ? Bienvenue dans le club des wannabes milliardaires.",
            "Tu peux te la péter. Mais pas trop, ça reste ridicule devant Elon Musk.",
            "Ton argent est cool. Mais pas ta personnalité.",
            "T’as de quoi acheter une maison. Mais pas un foyer.",
            "Félicitations, t’es riche. Mais tu restes pathétique.",
            "Avec ça, tu peux acheter une île… minuscule."
          );
        } else {
          responses.push(
            "Wow, t’es riche ! Maintenant, fais un don pour sauver ce qui reste de ton âme.",
            "Avec ça, t’es officiellement insupportable. Félicitations.",
            "Ah, un millionnaire. Mais toujours sans humour.",
            "T’as tellement d’argent qu’on te déteste avant même de te connaître.",
            "Achète-toi une personnalité, parce que clairement, t’es insupportable.",
            "Bravo, tu fais partie des 1%. Dommage que t’aies 0% de respect.",
            "Avec ça, tu peux vivre comme un roi… dans un pays sous-développé.",
            "T’es si riche qu’on te tolère. Mais ça s’arrête là.",
            "Félicitations, tu es riche. Mais personne ne t’aime.",
            "Ah, la vie d’un millionnaire… seul et arrogant."
          );
        }

        // Retourner un message aléatoire
        return responses[Math.floor(Math.random() * responses.length)];
      };

      // Si des utilisateurs sont mentionnés
      if (Object.keys(event.mentions).length > 0) {
        const uids = Object.keys(event.mentions);

        for (const uid of uids) {
          const userMoney = await usersData.get(uid, "money") || 0;
          responseMessage += getLang("moneyOf", event.mentions[uid].replace("@", ""), userMoney) + "\n";
          responseMessage += getHumorousComment(userMoney) + "\n";
        }
        return message.reply(responseMessage);
      }

      // Si aucun utilisateur n'est mentionné, afficher l'argent de l'utilisateur
      const userData = await usersData.get(event.senderID);
      const userMoney = userData?.money || 0;

      responseMessage = getLang("money", userMoney);
      responseMessage += "\n" + getHumorousComment(userMoney);

      return message.reply(responseMessage);
    } catch (err) {
      console.error("Erreur lors de l'exécution de la commande balance:", err);
      return message.reply("Ah bah voilà, t’as cassé le bot. Bravo génie !");
    }
  }
};
