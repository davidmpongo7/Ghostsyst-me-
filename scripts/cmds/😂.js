module.exports = {
  config: {
    name: "😂",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "humor, sarcasm",
    longDescription: "humor, funny sarcasm",
    category: "reply",
  },

  onStart: async function() {},

  onChat: async function({ event, message }) {
    if (event.body && event.body.toLowerCase() == "😂") {
      const responses = [
        "Ah, tu rigoles, mais t'as sûrement raté ta dernière blague. 😂",
        "Tu sais que t'es drôle quand même... mais pas autant que toi tu penses. 😆",
        "Ah, tu ris... tu rigoles de ta propre défaite, non ? 😂",
        "Ah, un éclat de rire. C'est peut-être le dernier avant que la honte ne te frappe. 😅",
        "J'espère que ce rire est plus sincère que ton humour. 🙄",
        "Tu sais, il y a des gens qui rient pour cacher leur douleur. Peut-être que c'est ton cas ? 😜",
        "Tu te prends pour un comique ou tu fais juste des blagues de papa ? 😆",
        "Si ton rire était un sport, tu serais champion du monde des losers. 🏆😂",
        "C'est mignon de te voir rigoler, mais c’est encore plus mignon de voir ta tentative d’humour. 😄",
        "Ouais, je vois que tu rigoles, mais c'est sûrement parce que tu t'es encore retrouvé dans une situation embarrassante. 😂",
        "Ce rire... c'est celui d'un gars qui vient de réaliser qu'il est vraiment pas drôle. 😬",
        "T'as l'air de bien rigoler, mais moi je rigole de toi. 😂",
        "Le genre de rire qui cache mal la déception que tout le monde ressent à chaque fois que tu parles. 🙃",
        "Oh, tu rigoles. T'es sûr que ce n'est pas le bruit de ton cerveau qui se désintègre ? 🤔",
        "Un autre rire ? Il est fort probable qu'il masque une tentative d'humour vraiment foireuse. 😂",
        "Ton rire me rappelle celui d'un enfant qui vient de casser quelque chose et qui essaie de faire comme si de rien n'était. 😆",
        "C’est bien de rire, mais ta blague... c’était quoi au juste ? 😅",
        "J'espère que tu rigoles de toi-même, parce que c'est la seule chose drôle ici. 😂",
        "C'est mignon, tu ris, mais ça fait bien longtemps que j'ai arrêté de comprendre pourquoi. 🤷‍♂️",
        "Tu sais que tu rigoles à ta propre blague, mais tout le monde ici se demande : ‘Pourquoi ?’. 😂",
        "Rien de tel qu'un rire nerveux après avoir fait une grosse bêtise. 😂",
        "Ton rire est presque aussi gênant que ta tentative d'être drôle. Mais on fait avec ! 😅",
      ];

      const randomIndex = Math.floor(Math.random() * responses.length);
      message.reply(responses[randomIndex]);
    }
  },
};
