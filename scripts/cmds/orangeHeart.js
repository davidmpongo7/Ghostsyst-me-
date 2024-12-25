module.exports = {
  config: {
    name: "orangeHeartResponse",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 🧡",
    longDescription: "Réponses drôles et variées à l'emoji 🧡",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("🧡")) {
      const responses = [
        "🧡 ? Sérieusement, qui utilise ce cœur ?",
        "Cœur orange... genre t'as peur de t'engager ?",
        "T'es entre l'amour et l'indifférence, comme ta vie quoi.",
        "Un cœur orange ? Même ton emoji est fade.",
        "🧡 ? Tu voulais rouge mais t'avais pas les moyens ?",
        "C'est mignon... mais personne comprend ce que tu veux dire.",
        "Cœur orange ? T'as une personnalité aussi neutre que cet emoji.",
        "Le cœur orange, c'est pour les lâches, avoue.",
        "🧡 = je t'aime mais pas trop, faut pas abuser.",
        "C'est quoi ce cœur de seconde main ?",
        "Cœur orange ? Même l'arc-en-ciel veut pas de toi.",
        "🧡 ? T'essayes de te démarquer, mais ça marche pas.",
        "Le cœur orange, c'est un peu comme toi : inutile.",
        "Tu veux un truc original ? Change d'emoji, sérieux.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
