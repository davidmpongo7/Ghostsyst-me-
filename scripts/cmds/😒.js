module.exports = {
  config: {
    name: "😒",
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

    // Réponses pour l'emoji 😒
    if (emoji === "😒") {
      const responses = [
        "Ah, tu fais cette tête parce que tu viens de réaliser que ta vie est aussi excitante qu’un documentaire sur les escargots.",
        "Tu fais cette tête là ? Je parie que t’as rien d’intéressant à dire.",
        "Cette expression est parfaite pour quand tu te rends compte à quel point t’es nul à ce jeu.",
        "C’est la tête que tu fais quand tu réalises que tes décisions ont mené à cette situation pathétique.",
        "T’as l’air de vraiment t’ennuyer. Peut-être qu’une activité intéressante pourrait t'aider.",
        "Tu veux un prix pour l’emoji le plus ennuyé de l’année ? Parce que là, t’es un champion.",
        "On dirait que tu viens de découvrir que ta vie est aussi excitante qu’une feuille morte.",
        "T’es là, à me lancer cet emoji, mais j’ai l’impression que t’es plus coincé que ça.",
        "T’es vraiment en train de me faire cette tête là ? T’as l’air d’un ado qui a rien compris à la vie.",
        "Si tu fais ça chaque fois que t’es ennuyé, je compatis. Ta vie doit être un vrai enfer.",
        "Avec cette tête, tu devrais t'inscrire dans une école de dépression. T’as un avenir brillant.",
        "Tu veux qu’on parle de ce qui t’ennuie tant ou tu préfères juste continuer à te faire passer pour un robot ?",
        "C’est l’emoji du 'je suis fatigué d’exister', c’est ça ? T’as pas tort.",
        "C’est marrant, on dirait que cet emoji essaie de dire : 'J’ai déjà perdu espoir'.",
        "Si c’est la tête que tu fais tous les jours, je compatis. Sérieusement, tu t'ennuies autant ?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
