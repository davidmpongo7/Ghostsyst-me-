module.exports = {
  config: {
    name: 'ugly',
    aliases: ['notpretty'],
    author: 'HASSAN-',
    version: 2.0,
    role: 0,
    shortDescription: {
      en: 'Note à quel point quelque chose est moche.'
    },
    longDescription: {
      en: 'Note le facteur de laideur de quelque chose en fonction de l\'avis de l\'utilisateur.'
    },
    category: 'fun',
    guide: {
      en: 'Utilisez simplement la commande suivie de ce que vous voulez noter pour la laideur.'
    }
  },
  event: null,
  onStart: async function ({ api, event, args }) {
    const subject = args.join(' ');

    if (!subject) {
      api.sendMessage('T\'as pas de cervelle ou quoi ? Faut bien préciser ce que tu veux noter, là.', event.threadID);
      return;
    }

    const uglinessRating = Math.floor(Math.random() * 10) + 1; // Génération d'une note de laideur entre 1 et 10

    api.sendMessage(`Alors, après avoir scruté ton truc dégueulasse, je peux te dire que ${subject} mérite un score de ${uglinessRating}/10. Franchement, tu devrais être honteux d'exposer ça.`, event.threadID);
  },
  onChat: async function ({ event, message }) {
    if (event.body && event.body.startsWith('ugly')) {
      const subject = event.body.replace('ugly', '').trim();

      if (!subject) {
        return message.reply('Tu crois que tu vas juste dire "ugly" et que ça va marcher ? Précise ce que tu veux noter, abruti.');
      }

      const uglinessRating = Math.floor(Math.random() * 10) + 1; // Génération d'une note de laideur entre 1 et 10

      return message.reply(`🥺 Franchement, t'es sérieux ? Après avoir regardé ${subject}, il mérite une note de ${uglinessRating}/10. C'est tellement moche que ça me donne envie de pleurer. `);
    }
  }
};
