module.exports = {
  config: {
    name: "emoji_insultes_2",
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

    // Réponses pour l'emoji 🤬
    if (emoji === "🤬") {
      const responses = [
        "Waouh, t'es tellement enragé, on dirait que tu viens de perdre une partie de Candy Crush. C’est pathétique.",
        "C’est mignon, t’as l’air d’être une caricature de colère. Tu veux qu’on te donne un prix ?",
        "Si t’es aussi fâché pour ça, je crois que ta vie doit être un vrai désert émotionnel.",
        "Regarde-toi, t’as l’air d’une version humaine de Hulk, mais sans les muscles et avec zéro cerveau.",
        "T’es furieux pour ça ? T’as vraiment un sens des priorités de merde.",
        "On dirait que tu viens de découvrir qu'on ne t’a pas donné la télécommande. Calme-toi, ce n'est qu'une vie.",
        "Tu veux crier à la face du monde ou tu préfères garder ta rage pour quelque chose d’important ?",
        "T’as l’air d’avoir du mal à respirer, peut-être que cette colère est un peu trop intense pour toi.",
        "Pourquoi ne pas essayer de canaliser ta colère dans un hobby plus productif, genre hurler dans un oreiller ?",
        "Si cette rage est censée impressionner quelqu’un, désolé mais on dirait juste un gamin de 5 ans.",
        "Ta colère c’est tout ce que tu as à offrir à la vie ? T’as raté l’occasion de vivre plus sereinement.",
        "Tu crèves d’envie de t’énerver pour tout et n’importe quoi ? Essaie de trouver un but dans ta vie.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😞
    if (emoji === "😞") {
      const responses = [
        "T'es déçu ? Je crois que t'as l'air plus perdu qu'un enfant sans sucre.",
        "Un peu déprimé, hein ? Ne t’inquiète pas, la vie est bien plus ennuyeuse que ton visage.",
        "Ah, la tête de la déception. Comme si quelqu'un allait se soucier de tes petites préoccupations.",
        "T’es triste ? Bien sûr, c’est pas comme si t’étais le seul à traverser des galères.",
        "Faut vraiment pas grand-chose pour que tu sois déprimé, hein ? Allez, relève-toi et arrête de te morfondre.",
        "C’est triste de te voir comme ça, mais il est peut-être temps d’arrêter de pleurer pour des petites choses.",
        "T’es déçu de la vie, hein ? Bon, t’es pas le seul, mais c’est un peu trop facile comme excuse.",
        "Détends-toi, personne ne va te jeter un os pour tes petites déceptions.",
        "T’as l’air d’être un expert dans l’art de la déception. Tu fais un stage ou c’est naturel ?",
        "Laisse-moi deviner, tu viens de découvrir que la vie est pas aussi fun que ton jeu préféré ?",
        "C’est triste de te voir comme ça, mais t’as pas encore perdu ton dernier bonbon, alors calme-toi.",
        "On dirait que tu fais la tête d’un enfant qui a raté sa barre chocolatée. C’est triste, vraiment.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😓
    if (emoji === "😓") {
      const responses = [
        "Oh non, tu as transpiré un peu ? T'es en train de mourir de fatigue ou de déception ?",
        "Ouais, tu sembles vraiment en difficulté… mais est-ce que ça va changer quelque chose ? Probablement pas.",
        "Si tu veux qu’on te plaigne, tu vas devoir faire mieux que ça. Tu as l’air juste un peu trop sensible.",
        "Allez, on se ressaisit ! Cette sueur, c’est juste une excuse pour éviter la vraie confrontation.",
        "T’as chaud ? Si tu veux, je peux t’envoyer un ventilateur, mais ça ne résoudra pas ton problème.",
        "C’est drôle, on dirait que tu essaies d’échapper à ta propre existence. C’est peut-être une bonne idée.",
        "Rassure-moi, ce n’est pas ton échec personnel qui te fait transpirer comme ça ?",
        "T’as l’air de vivre dans un sauna émotionnel, mais t’inquiète, ça passe avec le temps.",
        "Sérieusement, c’est juste un peu de chaleur. Tu vas survivre, je crois.",
        "Franchement, tu pourrais au moins faire un effort et pas juste souffrir comme un ado qui a raté sa rentrée.",
        "C’est quoi, cette angoisse ? T’as perdu ton dernier biscuit ou t’es juste fatigué d’être décevant ?",
        "Si tu veux un mouchoir, j’en ai, mais je doute que ça fasse une grande différence.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😟
    if (emoji === "😟") {
      const responses = [
        "Ah, la panique de l’adulte en difficulté. Franchement, tu surjoues un peu, non ?",
        "Tu stresses pour ça ? Allez, détends-toi, c’est juste une autre petite merde de la vie.",
        "T’es angoissé ? C’est rien, vraiment. On dirait juste un enfant de 4 ans qui veut des bonbons.",
        "Ne t’inquiète pas trop, ça passera. Mais ta tête de souci n’est pas vraiment rassurante.",
        "C’est quoi, ce regard paniqué ? T’as raté ton café ou tu viens de découvrir que la Terre est ronde ?",
        "C’est drôle, tu as l’air vraiment perdu dans cette petite angoisse. Essaie de respirer un peu.",
        "T’as l’air d’avoir vu un fantôme. Détends-toi, t’es encore loin de la fin de ta journée.",
        "Franchement, t’es plus flippé que ce que la situation mérite. Calme-toi, ce n’est pas la fin du monde.",
        "Si ça te stresse autant, je vais finir par penser que tu es un peu trop sensible.",
        "T’es nerveux pour quoi ? T’as découvert que tu n’es pas aussi génial que tu pensais ?",
        "Ta tête d’inquiétude est presque aussi fatiguante que ton incapacité à gérer une situation simple.",
        "Si tu pouvais être aussi préoccupé par quelque chose d’utile, ce serait génial.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😥
    if (emoji === "😥") {
      const responses = [
        "T’es tout triste pour ça ? Si ça te touche autant, tu devrais te remettre en question.",
        "Tu veux qu’on te console ou tu veux juste une occasion de pleurer un peu plus ?",
        "C’est adorable, tu te sens triste. Mais à quel point est-ce que ça va changer quoi que ce soit ?",
        "T’as l’air d’un petit enfant qui vient de perdre son jouet. C’est pathétique, vraiment.",
        "Tu veux qu’on t’offre une médaille pour ta tristesse ? Parce que là, t’es vraiment dans la catégorie ‘drama queen’",
        "Si tu pensais que pleurer va changer la situation, je suis désolé de te dire que t’as tort.",
        "Pourquoi ne pas essayer de sourire un peu ? Parce que cette tristesse n’est vraiment pas intéressante.",
        "T’as l’air d’un personnage de film dépressif. Change de scénario, on dirait que ça commence à devenir lourd.",
        "Je suis vraiment désolé que ta tristesse vienne de ce genre de futilité. T’as d’autres préoccupations ?",
        "C’est mignon, vraiment. Mais c’est aussi ennuyeux. Essaie de te reprendre un peu.",
        "Si c’est ta réaction à la vie, je comprends pourquoi tu te sens aussi désespéré.",
        "Tu pleures pour ça ? T'as vraiment pas de chance dans la vie.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
