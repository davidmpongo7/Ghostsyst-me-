module.exports = {
  config: {
    name: "emoji_insultes",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses sarcastiques et insultantes aux emojis",
    longDescription: "Réponses sarcastiques et insultantes aux emojis envoyés",
    category: "reply",
  },

  onStart: async function() {},

  onChat: async function({ event, message }) {
    const emoji = event.body.trim();

    // Réponses pour l'emoji 🫣
    if (emoji === "🫣") {
      const responses = [
        "T’as peur de quoi exactement ? Le grand méchant loup ou mon opinion sur ton emoji ?",
        "T'es sur qu’on parle d’un emoji et pas de ton reflet dans le miroir ?",
        "Je vois que tu fais semblant d’être choqué… Allez, arrête de te cacher, on sait tous que tu adores ça.",
        "C’est vraiment ce que tu fais quand tu es confronté à une vérité ? Tu te caches comme ça ?",
        "C’est l’emoji 'je suis choqué' ou plutôt 'je veux qu’on me laisse tranquille' ?",
        "Ce visage est censé être une expression de surprise ? Parce que là, je vois plus de dégoût.",
        "Tu te caches de qui là ? De ta propre misère ?",
        "Vraiment, t’as l’air plus stupide que surpris. Pas très crédible.",
        "Tu veux vraiment cacher ta tête comme ça ? Ou c’est juste ta personnalité qui te fait honte ?",
        "Si c’est une tentative de cacher ta déception, bravo, mais t’es vraiment nul à ça.",
        "C’est censé être choqué ou tu viens juste de réaliser que t’es un peu trop pathétique ?",
        "Tu penses qu’on va te croire, hein ? Que tu es choqué ? Essaie encore.",
        "Caché derrière cet emoji, tu crois vraiment qu’on ne voit pas ton bluff ?",
        "T’as l’air plus dégoûté qu’autre chose. C’est l’emoji de ton âme, non ?",
        "Cacher ton visage derrière cet emoji ne va pas sauver ton image, désolé.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
