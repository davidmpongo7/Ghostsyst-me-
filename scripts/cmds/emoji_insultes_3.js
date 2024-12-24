module.exports = {
  config: {
    name: "emoji_insultes_3",
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

    // Réponses pour l'emoji 😢
    if (emoji === "😢") {
      const responses = [
        "Oh non, tu pleures ? Quel dommage... j'espère que ce n'était pas à cause de ton score au dernier jeu.",
        "T’as l’air plus triste qu’un chat sans son jouet préféré. Tu veux un mouchoir ?",
        "C’est mignon, vraiment. T’as l’air de quelqu’un qui pleure parce que son équipe a perdu à la coupe du monde.",
        "Si tu crois que pleurer résout quelque chose, je crois que tu n'as pas compris le concept de la vie.",
        "Tu pleures pour ça ? J'espère que tu n'as pas aussi besoin qu'on t'apporte un biscuit.",
        "T'es vraiment triste à ce point ? Peut-être que tu devrais essayer de respirer, ça pourrait t'aider.",
        "Tu pleures parce que ton café était trop chaud ? Va prendre un café glacé et arrête de pleurer.",
        "On dirait que t'es en train de tourner un film triste. Peut-être que tu pourrais te faire un autre rôle.",
        "Pleurer comme ça, ça te va bien. Mais au lieu de ça, essaie de trouver une solution à ton problème.",
        "Oh non, pleurer pour ça ? C'est presque mignon… presque.",
        "Tu pleures de manière si exagérée qu'on dirait que tu viens de perdre ton billet pour un concert.",
        "Franchement, si tu pouvais pleurer de façon moins dramatique, ce serait déjà un bon début.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji ☹️
    if (emoji === "☹️") {
      const responses = [
        "T'es triste pour rien ou tu attends un prix pour ta tête de déprime ?",
        "Si t'es aussi triste que tu le sembles, il est peut-être temps d’envisager un changement de vie.",
        "C’est quoi, ce regard ? Tu te souviens de la dernière fois où t'as souri ? Parce que là, c'est déprimant.",
        "T'as l’air aussi triste qu'un personnage secondaire dans une série télé. C'est gênant.",
        "C’est vraiment la fin du monde ou c'est juste une autre journée où tu fais semblant d'être malheureux ?",
        "On dirait que tu t’apprêtes à tourner un film triste. À ce point-là, tu es encore plus déprimant que le scénario.",
        "Sérieusement, c’est comme ça que tu veux qu’on te voie ? L'avatar de la tristesse.",
        "S’il te plaît, arrête de faire cette tête. Tu veux que je t’envoie un paquet de bonbons pour te consoler ?",
        "C'est marrant comme t’arrives à rendre la tristesse aussi ennuyeuse.",
        "Si tu pouvais remplacer cette tristesse par quelque chose d'utile, ce serait génial.",
        "On dirait que tu te forces à être triste, tu veux qu’on t’aide à trouver une vraie raison ?",
        "T’es comme une chanson triste qui ne finit jamais. Déprime plus vite, qu’on en finisse !",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🙁
    if (emoji === "🙁") {
      const responses = [
        "Ah, t’as l’air un peu perdu là. Peut-être que la vie n’est pas aussi compliquée que tu le penses.",
        "Si cette tête est censée signifier quelque chose, je suis désolé mais t’es encore loin de la clarté.",
        "T’es déçu de quoi ? C’est encore un de ces petits malheurs du quotidien ?",
        "Si ça va pas, peut-être que tu devrais chercher des solutions plutôt que de faire cette tête déprimante.",
        "Tu veux un conseil ? Change de perspective. Ça pourrait au moins rendre ta vie moins ennuyeuse.",
        "On dirait un tableau de la déception. Mais attends, on peut faire mieux que ça !",
        "Tu veux parler de ce qui ne va pas ou tu préfères te contenter de cette tête triste toute la journée ?",
        "T'as l’air un peu coincé dans ton propre malheur. Essaie de respirer profondément, ça ira mieux.",
        "Cette tête, c’est pas mal, mais je parie que tu peux faire encore plus triste.",
        "T’es en mode ‘je suis déçu par la vie’ ? Allez, relève-toi et essaie de rendre ça un peu plus excitant.",
        "Je sais pas si t’es triste ou si t’essaies de trouver un super pouvoir. C’est assez ambigu.",
        "Ne t’inquiète pas, tu peux faire mieux que ça. Enfin, peut-être.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🫤
    if (emoji === "🫤") {
      const responses = [
        "C’est la tête que tu fais quand tu te rends compte que t’as fait une énorme erreur ?",
        "Franchement, t’as l’air plus perdu qu’un poisson dans un désert.",
        "On dirait que tu viens d’apprendre que la vie ne se résume pas à des paillettes. C’est décevant.",
        "Ce regard, c’est un peu comme si t’étais sur le point de t’endormir. Est-ce qu’on va te réveiller ou tu restes là ?",
        "T’as l’air d’avoir découvert que tout ce que tu croyais était faux. Tu veux un café pour te réveiller ?",
        "C’est marrant, t’as l’air d’avoir pris une grosse claque. C’est à cause de ton reflet ou du reste ?",
        "Tu sais, ce regard-là, c’est le genre de truc que tu portes quand t’as vu un film tellement mauvais que ça te hante.",
        "Franchement, est-ce que tu cherches à attirer l’attention avec cette tête ou c’est juste naturel chez toi ?",
        "Regarde-toi, on dirait un personnage principal d’un film d’horreur à petit budget.",
        "Si ton expression est censée en dire long sur ta journée, je suis désolé mais on dirait que tu vis dans un mauvais rêve.",
        "Tu fais cette tête comme si t'avais trouvé un bug dans ton cerveau. Ça arrive à tout le monde.",
        "Ça se voit que tu n’as pas eu ta dose de dopamine aujourd’hui. Tu veux qu’on t’aide ou t’as un plan pour t’en sortir ?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😕
    if (emoji === "😕") {
      const responses = [
        "Tu veux qu’on te donne un manuel de la vie pour que tu comprennes enfin ce qui se passe ?",
        "Si tu penses que ce regard va nous éclairer, tu es vraiment à côté de la plaque.",
        "T’as l’air un peu perdu, mais bon, ça n’étonne personne avec la tête que tu fais.",
        "On dirait que t’essaies de résoudre un puzzle que t’as pas même commencé à comprendre.",
        "Est-ce que t’es confus ou t’essaies juste d’éviter de comprendre ce qui se passe réellement ?",
        "Tu te demandes encore pourquoi la vie est compliquée ? C’est peut-être toi qui la rends compliquée.",
        "C’est marrant, ce regard dit tout : tu es confus par ta propre existence. T'as pas tort.",
        "T’as l’air d’un enfant dans un magasin de bonbons sans savoir quoi choisir. Choisis, bon sang.",
        "Tu sais que ce regard ne va pas t’aider à résoudre tes problèmes, n’est-ce pas ?",
        "Tu te sens perdu ? Rejoins le club, t’es pas le seul.",
        "Si tu cherches des réponses à cette confusion, je te conseille de commencer par une introspection.",
        "T’es dans un état de confusion total. Peut-être que la solution c’est juste de respirer un bon coup.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
