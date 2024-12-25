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

    // Réponses pour l'emoji 🥱
    if (emoji === "🥱") {
      const responses = [
        "Tu fais cette tête parce que tu es aussi passionné par la conversation que moi par ta présence.",
        "Ouais, je ressens exactement la même chose, t’es tellement excitant… pas.",
        "Oh, tu t’ennuies ? Eh bien, tu n’es pas seul, je suis dans le même bateau.",
        "Faut dire, j’ai rarement vu quelqu’un qui arrive à être aussi passionnant que toi… enfin si, c’est ironique.",
        "Si tu veux que je sois plus excitant, va falloir te réveiller un peu.",
        "C’est ça, bailles encore, tu vas sûrement me convaincre de ta grande sagesse.",
        "Ouais, continue à bailler, c’est presque aussi intéressant que ta personnalité.",
        "T’es tellement passionné par cette conversation, tu veux vraiment que je t’aide à t’endormir ?",
        "Non mais sérieux, bailler devant moi, tu te crois où, à un cours de méditation ?",
        "Si tu veux dormir, j’ai un oreiller pour toi. Peut-être que tu seras plus utile là-bas.",
        "Tu veux un café pour arrêter de bailler ou c’est juste que t’es complètement déconnecté ?",
        "Je peux déjà entendre ton enthousiasme. C’est pas contagieux, heureusement pour moi.",
        "Bailler devant moi, c’est vraiment ton truc ? Quel talent.",
        "Où en êtes-vous dans la compétition de qui a la plus grosse paresse ? Parce que là, tu gagnes.",
        "Alors, tu bailles à cause de ma conversation ou c’est ta vie en général qui te fatigue ?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
