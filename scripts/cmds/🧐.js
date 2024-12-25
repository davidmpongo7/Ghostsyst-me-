module.exports = {
  config: {
    name: "🧐",
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

    // Réponses pour l'emoji 🧐
    if (emoji === "🧐") {
      const responses = [
        "T’es en train de réfléchir sérieusement à ta vie ? Parce que ça se voit.",
        "Ah, l’emoji 'je suis un détective privé'… Tu vas résoudre un mystère ou juste me rendre fou ?",
        "Avec cette expression, on dirait que tu viens de découvrir que le chocolat est sucré.",
        "T’as l’air de réfléchir à une question existentielle… T’as bien choisi le mauvais emoji.",
        "Tu cherches à résoudre un casse-tête ou tu essayes juste de comprendre ton propre égo ?",
        "Ce regard pense que tu es intelligent, mais désolé, tu fais plus penser à un hamster qui tourne en rond.",
        "C’est censé être un regard de génie ou juste celui de quelqu’un qui a trop regardé Sherlock Holmes ?",
        "Franchement, même ton regard fait plus pitié que tout le reste.",
        "Tu veux qu’on t’appelle 'le Sherlock de la débilité' ? Parce que tu n’as rien résolu ici.",
        "T’es en train de résoudre un mystère ou tu veux juste faire genre ?",
        "Cette expression te donne un air de philosophe, mais en réalité, tu n’as même pas les bases.",
        "Fais pas ton détective avec ce regard, t’as l’air juste d’un idiot qui réfléchit trop.",
        "L’air pensif, c’est une couverture pour masquer ta confusion totale. Ça ne prend personne.",
        "T’es en train de chercher la réponse à une question que personne ne t’a posée, hein ?",
        "Avec ce regard, t’es aussi crédible qu’un enfant de 5 ans qui essaie de résoudre des équations complexes.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
