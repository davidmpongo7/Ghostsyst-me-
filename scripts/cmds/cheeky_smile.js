module.exports = {
  config: {
    name: "cheeky_smile",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses complices et malicieuses",
    longDescription: "Réponses joyeuses et pleines de complicité pour l'emoji 😄",
    category: "reply",
  },

  onStart: async function () { },

  onChat: async function ({ event, message }) {
    if (event.body && event.body === "😄") {
      const responses = [
        "Ah, je vois que tu es prêt à tout déchirer de joie aujourd'hui ! 🔥",
        "On dirait que tu as volé un peu de bonheur dans le ciel, hein ? ✨",
        "Ce sourire, c'est la recette secrète du bonheur, je suis sûr que tu as un truc à cacher. 🤫",
        "Tu es tellement heureux que même les oiseaux chantent à ton rythme ! 🎶",
        "C'est pas un sourire, c'est une déclaration de guerre à la tristesse ! 💥",
        "Avec un sourire comme ça, t'as pas besoin d'un café pour booster ta journée ! ☕️",
        "Je suis à deux doigts de demander si tu as un abonnement à la bonne humeur. 🤔",
        "C'est moi ou tu es en train de faire fondre la glace autour de toi avec cette énergie ? ❄️",
        "Si la joie se mesurait en kilos, tu serais déjà un champion olympique. 🏆",
        "On dirait que tu viens de découvrir le secret du bonheur. Tu veux partager ? 🤨",
        "T'as un smile qui ferait fondre même les cœurs les plus glacés. 🧊",
        "Avec toi, même un lundi pluvieux devient une fête. 🌧️🎉",
        "Ce sourire pourrait redonner la foi à un robot dépressif, t'es un miracle ! 🤖",
        "Ce genre de sourire, c'est pas humain... C'est carrément extra-terrestre. 👽",
        "D'habitude, les gens ont besoin d'un café pour sourire comme ça, mais toi, c'est naturel. ☕️",
        "J'ai l'impression que ce sourire pourrait résoudre la crise mondiale... Ou au moins me faire oublier mon stress. 😌",
        "Ce sourire a l'air tellement puissant qu'il pourrait faire démarrer un moteur. 🚗",
        "Je vais finir par croire que t'es l'inventeur de l'énergie renouvelable avec ton sourire ! ⚡",
        "Ton sourire, c'est la preuve qu'un jour, on aura tous la paix mondiale. 🌍",
        "T'es tellement joyeux, même ton ombre doit être en mode happy ! ☀️",
        "T'es un rayon de soleil, mais avec un côté un peu trop impertinent... Et j'adore ça ! 🌞",
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
