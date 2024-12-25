module.exports = {
  config: {
    name: "Réactions aux emojis de posture",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réactions aux emojis de posture",
    longDescription: "Réagit aux emojis représentant des postures physiques avec des réponses sarcastiques et insultantes.",
    category: "reply",
  },

  onStart: async function () {},

  onChat: async function ({ event, message, getLang }) {
    if (event.body) {
      const emoji = event.body.trim();

      // Réactions aux emojis 🧘🧘‍♀️🧘‍♂️
      if (emoji === "🧘" || emoji === "🧘‍♀️" || emoji === "🧘‍♂️") {
        return message.reply([
          "Ah, tu t’es mis à la méditation ? C’est sûrement la seule chose qui pourrait t’empêcher de penser à ta vie déplorable.",
          "C'est bien d'essayer de trouver la paix intérieure, mais ça ne changera pas ta stupidité extérieure.",
          "Tu fais semblant de méditer, mais je parie que tu penses à ta prochaine grosse bêtise.",
          "La méditation ne va pas résoudre tes problèmes, surtout celui d’être une catastrophe ambulante.",
          "Essayer de trouver ton zen, mais tout ce que tu trouves, c'est un autre échec.",
          "Tu fais le yogi, mais on dirait plutôt que tu es coincé dans ta propre idiotie.",
          "Si tu cherches la paix intérieure, tu vas devoir chercher très, très loin… comme dans un autre univers.",
          "La méditation n'est qu'une distraction de plus pour éviter de confronter ta propre nullité.",
          "Bon courage pour trouver ton calme, mais honnêtement, je pense que tu es bien trop nerveux pour ça.",
          "La seule chose que tu vas atteindre avec cette posture, c’est un mal de dos dû à ta vie de merde.",
          "Essaie encore de trouver la sérénité, mais spoiler : tu n’y arriveras pas."
        ]);
      }

      // Réactions aux emojis 🧍🧍‍♀️🧍‍♂️
      if (emoji === "🧍" || emoji === "🧍‍♀️" || emoji === "🧍‍♂️") {
        return message.reply([
          "Tu te tiens droit maintenant ? Wow, c’est probablement le seul moment où tu ne te courbes pas sous le poids de ta nullité.",
          "Debout ? C’est la première fois que je vois quelqu’un tenir debout tout en étant aussi stupide.",
          "Tu es debout, mais on dirait que tu n’as toujours aucune direction dans ta vie.",
          "T’es debout, mais honnêtement, on dirait que t’es plus perdu que jamais.",
          "Tu te tiens droit, mais ton niveau de compréhension reste toujours aussi bas.",
          "C'est bien, tu es debout. Mais ne t'excite pas, ça ne change pas le fait que tu n’as rien dans la tête.",
          "Te voir debout me rappelle que même une posture droite ne peut corriger toutes tes erreurs.",
          "C’est bien de te tenir debout, mais tout le monde sait que tu vas retomber dans ta nullité très vite.",
          "Tu te tiens bien, mais on dirait que tu te tiens debout juste pour faire illusion.",
          "Debout, mais où vas-tu ? Oh, c’est vrai, tu ne sais même pas où tu vas.",
          "Là, t’es debout, mais dans ta tête, c’est comme un éternel échec."
        ]);
      }

      // Réactions aux emojis 🤸🤸‍♀️🤸‍♂️
      if (emoji === "🤸" || emoji === "🤸‍♀️" || emoji === "🤸‍♂️") {
        return message.reply([
          "Tu essaies de faire une acrobatie ? Wow, ça ne sera sûrement pas aussi impressionnant que ta vie chaotique.",
          "Fais une pirouette, mais je parie que tu tombes sur la première erreur que tu fais dans ta vie.",
          "Acrobaties ? Tu n’es même pas capable de gérer ta propre vie sans tomber dans la merde.",
          "C’est mignon que tu essayes de faire des acrobaties, mais ça ne te sauvera pas de ta stupidité.",
          "Tu penses que tes acrobaties vont impressionner quelqu’un ? Excuse-moi, mais tu es aussi impressionnant qu’un clown sans talent.",
          "Ton saut acrobatique est aussi flippant que ta capacité à prendre des décisions sensées.",
          "Essaye de faire un salto, mais je doute que tu puisses t'en sortir sans faire un échec monumental.",
          "Fais attention, avec ta chance, tu pourrais finir à l’hôpital avant même d’avoir terminé ton saut.",
          "Ton idée de faire de l’acrobatie est aussi stupide que tes autres choix de vie.",
          "Fais une pirouette, mais évite de tomber sur ton ego fracassé en chemin.",
          "Essayer de faire de l’acrobatie avec ta vie, c’est comme tenter de jongler avec des échecs. Tu vas tout faire tomber."
        ]);
      }
    }
  }
};
