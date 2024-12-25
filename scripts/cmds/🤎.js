module.exports = {
  config: {
    name: "brownHeartResponse",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 🤎",
    longDescription: "Réponses drôles et variées à l'emoji 🤎",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("🤎")) {
      const responses = [
        "🤎 ? Genre t'as décidé d'être original mais t'as échoué.",
        "Un cœur marron... ça représente ton âme vide ?",
        "Le marron c'est pour le caca... t'es sûr de ton choix ?",
        "Un cœur marron, sérieux ? C'est pour les amateurs de boue ?",
        "🤎, t'as trouvé ça dans un vieux tiroir d'emojis oubliés ?",
        "Cœur marron ? Même les autres emojis t'ignorent.",
        "🤎 = l'emoji le plus inutile de la galaxie.",
        "Tu voulais être original mais t'es juste bizarre.",
        "T'as pris 🤎 parce que t'avais rien d'autre ?",
        "C'est quoi ce cœur déprimant ? Retourne à l'école des emojis.",
        "🤎 = ton style est aussi ringard que cet emoji.",
        "Si le cœur marron représente l'amour, tu dois être célibataire.",
        "🤎, c'est ton cœur après trois ruptures d'affilée ?",
        "Un cœur marron... même ton téléphone veut te ridiculiser.",
        "Le marron, c'est pas une couleur d'amour. Change vite d'emoji.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
