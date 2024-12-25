module.exports = {
  config: {
    name: "🤨",
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

    // Réponses pour l'emoji 🤨
    if (emoji === "🤨") {
      const responses = [
        "T’es sceptique, hein ? T’as raison de douter, c’est probablement la seule chose sensée que tu fais.",
        "Avec cette expression, on dirait que tu viens de comprendre que tu n’as aucune idée de ce que tu fais.",
        "Franchement, si tu cherches un emoji qui résume ton attitude, c’est celui-là.",
        "Tu fais cette tête parce que tu viens de réaliser que tout ce que tu dis est ridicule ?",
        "Tu crois vraiment qu’on t’achète avec cette tête ? T’es aussi convaincant qu’une publicité de produits miracles.",
        "T’es sceptique, mais laisse-moi deviner… Tu n’as toujours pas compris comment ça marche.",
        "C’est ton visage quand tu t’aperçois que t’es à des années-lumière de la vérité.",
        "Cette expression est tellement crédible que je veux vraiment savoir où tu vas en venir avec ton scepticisme.",
        "Tu fais cette tête à cause de ma réponse ? T’as raison, c’est probablement trop compliqué pour toi.",
        "T’as l’air de t’interroger sur la vie. Peut-être que tu devrais te concentrer sur ta propre existence d’abord.",
        "Cet emoji représente parfaitement ton attitude quand tu réalises que personne ne t’écoute.",
        "Si tu cherches à attirer l’attention avec cette tête, laisse-moi te dire que c’est un échec total.",
        "Tu crois vraiment que ce regard te donne l’air plus intelligent ? Désolé, ça ne marche pas.",
        "Si tu veux vraiment choquer quelqu’un, essaie de comprendre ce qui se passe avant de faire cette tête.",
        "Tu penses que ta tête exprime la réflexion ? Non, c’est juste de l’hésitation.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
