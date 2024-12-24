module.exports = {
  config: {
    name: "🤤",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Bave",
    longDescription: "Réponses sarcastiques pour un visage bavant.",
    category: "reply",
  },
  onStart: async function() {},
  onChat: async function({
    event,
    message,
    getLang
  }) {
    if (event.body && event.body.toLowerCase() == "🤤") {
      const responses = [
        "Vraiment ? T'es si impressionné que tu baves ? C'est juste de la nourriture.",
        "Tu baves vraiment pour ça ? Tu sais que tu peux faire mieux.",
        "Tu vois quelque chose d'appétissant ? Parce que là, tu as l'air plus repoussant que la bouffe.",
        "Ce visage, c'est celui de quelqu'un qui vient de se rendre compte qu'il a mangé toute la nourriture du frigo.",
        "Tu baves plus qu'un chien qui a vu une friandise. Pas très classe.",
        "Tu es sûr que ce n'est pas une fâcheuse tendance à exagérer ?",
        "Je ne savais pas que les gens pouvaient baver à ce point juste en pensant à de la nourriture.",
        "Ce n'est pas très sexy, tu sais ? Peut-être que tu devrais aller essuyer ton visage.",
        "Si tu baves comme ça sur de la nourriture, je n'ose même pas imaginer ce que ça pourrait être avec une personne.",
        "Un peu plus et tu me donnes des frissons. C'est à quel point c'est dégoûtant.",
        "Tu baves à ce point ? T'as oublié de manger avant de venir ici ?",
        "Ce visage, c'est celui de quelqu'un qui n'a jamais vu de nourriture de sa vie.",
        "Tu es un vrai moulin à bave, mon ami. Impressionnant… mais pas dans le bon sens.",
        "Tu sembles prêt à manger tout ce qui passe. C'est un peu flippant.",
        "Essaie de garder ta salive dans ta bouche, ok ? Ça commence à être gênant.",
        "T’es à deux doigts de te transformer en fontaine avec toute cette bave.",
        "Tu sembles tellement affamé qu’on dirait que tu n’as pas mangé depuis une éternité.",
        "Je savais pas qu'un emoji pouvait être aussi dégoûtant. Bravo pour la performance.",
        "Tu veux un petit mouchoir pour ta bouche ? T'as l'air d'un enfant qui n'a pas appris à manger proprement.",
        "Ce visage, c’est celui d’un glouton qui a vu un buffet et ne peut plus se contrôler.",
        "Ça doit être un record, personne bave autant juste en voyant de la nourriture.",
        "Tu baves comme un bébé devant une sucette. C'est presque mignon, mais pas vraiment.",
        "T’as vraiment ce genre de réaction à la vue d’un sandwich ? Sérieusement ?",
        "Si tu continues à baver comme ça, on va devoir t’installer un bac à salive.",
        "Tu t’es perdu dans tes pensées de nourriture, ou bien ?",
        "C’est étrange, je n’avais pas vu quelqu’un aussi pathétique depuis ma dernière visite au zoo.",
        "Regarde-toi, tu baves comme si c’était une performance. Bien joué, t’as fait fuir tout le monde.",
        "T’es à deux doigts de tomber dans la catégorie 'extraterrestre' avec cette réaction.",
        "Tu viens de découvrir que la nourriture existe, c’est ça ?",
        "C’est gênant de baver comme ça, surtout quand tu n’es même pas à la table.",
        "T'es si impressionné que tu pourrais déborder de bave pendant des heures.",
        "Ce n'est pas un emoji de bouche bavant, c’est un appel à l'aide, je crois.",
        "T'es tellement obsédé par la nourriture, on dirait que tu viens de sortir d'une famine.",
        "J'espère que t'as un stock de serviettes, parce que là, tu risques de créer un lac de salive.",
        "Arrête de baver, tu as l’air d’un enfant qui veut des bonbons, mais qui est trop timide pour demander.",
        "Cette bave, c'est comme ta personnalité : un peu trop pour tout le monde.",
      ];
      return message.reply(responses[Math.floor(Math.random() * responses.length)]);
    }
  }
};
