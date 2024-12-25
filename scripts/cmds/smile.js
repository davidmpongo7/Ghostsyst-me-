module.exports = {
  config: {
    name: "smile",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses joyeuses",
    longDescription: "Réponses rigolotes et enthousiastes en fonction de l'emoji envoyé",
    category: "reply",
  },

  onStart: async function () { },

  onChat: async function ({ event, message }) {
    if (event.body && event.body === "😀") {
      const responses = [
        "Oh là là, avec ce sourire, tu ferais fondre un iceberg ! 😎",
        "Hé, calme-toi, tu vas exploser de bonheur avec ce sourire ! 🎉",
        "C'est pas possible d'être aussi joyeux. T'es un humain ou un distributeur de bonheur ? 😅",
        "Si je pouvais sourire comme toi, j'aurais pas besoin de café le matin. 😆",
        "Tu sais qu'un sourire comme ça fait briller le monde, non ? ✨",
        "T'es sûr que tu n'es pas une publicité pour la joie ? 😆",
        "Avec cette tête, t'es presque plus joyeux que moi, et ça, c'est un exploit ! 😜",
        "Ça se voit, t'as volé ton sourire à un rayon de soleil, non ? ☀️",
        "Calme-toi avec ce sourire, t'es pas un emoji dans une pub, t'es un humain ! 🤭",
        "Dès que tu souris, je pense que même les fleurs s'épanouissent un peu plus. 🌸",
        "Ce sourire pourrait éclairer toute une ville ! Allez, continue comme ça ! 🌟",
        "Mets ça sur ta carte de visite : 'Sourire gratuit'. Tu vas cartonner. 🏆",
        "Avec ce sourire, t'as plus de chance d'avoir une statue à ton nom que moi ! 😄",
        "Si la bonne humeur était un sport, tu serais champion du monde. 🏅",
        "Je parie que ton sourire est un secret pour ton succès. Partage-le un peu ! 😉",
        "C'est la vraie définition du 'bonheur contagieux', hein ? 😍",
        "Tu sais que ton sourire peut faire oublier à tout le monde leurs problèmes ? 😁",
        "Le sourire est la clé du bonheur, et tu viens d'ouvrir toutes les portes. 🔑",
        "Je suis à deux doigts de me mettre à sourire aussi, mais je ne veux pas rivaliser. 😋",
        "Avec un sourire comme ça, tu pourrais travailler chez Disney en tant qu'animateur ! 🏰",
        "Si tu devais vendre ta joie, tu serais millionnaire en une semaine. 💰",
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
