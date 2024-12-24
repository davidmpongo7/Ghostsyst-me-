module.exports = {
  config: {
    name: "😆",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "sarcastic humor",
    longDescription: "humor, sarcasm and fun",
    category: "reply",
  },

  onStart: async function() {},

  onChat: async function({ event, message }) {
    if (event.body && event.body.toLowerCase() == "😆") {
      const responses = [
        "Ah, ce rire ! Tu es sûr de ne pas avoir avalé un clown par accident ? 🎪",
        "C'est quoi ce rire ? T'as l'air de vouloir faire croire que tu es drôle, mais t'es juste gêné, non ? 😏",
        "Ce rire, on dirait que tu te forces tellement à être drôle, ça fait peur. 😂",
        "Ok, c'est ça ton rire ? T'as l'air d'un robot qui essaie de simuler de l'humour. 🤖",
        "T'as l'air d'un hamster en train de se faire chatouiller. Rires forcés, on dirait. 😜",
        "Ce rire est aussi naturel que des chaussettes en plastique. 😆",
        "On dirait que t'es au bord du gouffre de l'humour, et t'as juste sauté dedans sans parachute. 🪂",
        "Si ton rire était une chanson, ça serait un remix raté de 'La Macarena'. 😝",
        "On dirait que tu viens de voir une blague de papa. Tu es sûr de ne pas être vieux avant l'âge ? 😂",
        "Ce rire sonne comme quelqu'un qui a perdu son chat... et qui essaie de masquer la tristesse. 🐱",
        "Ok, t'as l'air de rigoler, mais tu veux vraiment qu'on te prenne au sérieux avec ce bruit ? 😅",
        "T'es sûr que ce n'était pas un cri de douleur ? Parce que ça n'a pas l'air très joyeux. 😜",
        "C'est ce genre de rire qu'on entend juste avant que quelqu'un se fasse humilier devant tout le monde, non ? 😆",
        "T'as l'air d'un lion qui essaie d'être mignon. Mais bon, t'es plus une grenouille avec un micro. 🐸🎤",
        "Ce rire, on dirait qu'il a été téléchargé depuis Internet. Rien de naturel là-dedans. 😝",
        "Ce rire a autant de substance qu'un paquet de chips vide. 😏",
        "Le rire est la meilleure médecine, mais toi, c'est juste un placebo. 😆",
        "T'es comme un enfant qui a trouvé une blague dans un biscuit fortune. Rire forcé, sérieux. 😂",
        "On dirait que tu as un rire en stock, mais tu n'as pas de véritable humour derrière. 😅",
        "Ce rire, c'est comme une mauvaise imitation de Jim Carrey… mais sans le talent. 😂",
        "T'es un peu comme un clown triste, tu sais ? Rire de tout, mais au fond c'est juste pour cacher ton ennui. 😜"
      ];

      const randomIndex = Math.floor(Math.random() * responses.length);
      message.reply(responses[randomIndex]);
    }
  },
};
