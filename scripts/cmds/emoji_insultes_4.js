module.exports = {
  config: {
    name: "emoji_insultes_4",
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

    // Réponses pour l'emoji 😰
    if (emoji === "😰") {
      const responses = [
        "Oh, tu fais cette tête comme si t'avais vu un film d'horreur, mais en fait, c'est juste la réalité qui te rattrape.",
        "Calme-toi, tu fais pas un infarctus. C’est juste la vie qui te joue un tour.",
        "Tu sais, cette tête d’effroi, c’est pas vraiment impressionnant. Un chat qui tombe dans un seau ferait presque plus peur.",
        "C’est pas la fin du monde, détends-toi. Mais je vois que tu viens de découvrir que tes rêves ne se réaliseront pas.",
        "T'as l'air aussi paniqué que quelqu'un qui vient de perdre son téléphone sans sauvegarde.",
        "C'est pas comme si tu avais vu un fantôme, hein ? Non, c’est juste toi qui sur-réagis.",
        "T’as vraiment l’air en stress pour si peu. Peut-être que tu devrais apprendre à respirer et pas à paniquer.",
        "Tu veux une couverture pour te cacher ? Parce que là, t’as l’air de fuir un monstre imaginaire.",
        "Si tu veux vraiment flipper, j’ai plein d’histoires de terreur à te raconter.",
        "Cette tête-là, c’est celle d’un futur champion du stress. Sérieusement, calme-toi un peu.",
        "Si tu paniques pour ça, je suis curieux de voir ta réaction face à des vrais problèmes.",
        "T'as l'air de quelqu'un qui vient de se rendre compte que la vie n'est pas aussi facile que dans les films Disney.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😨
    if (emoji === "😨") {
      const responses = [
        "Je vois que t’as vu un truc qui te terrifie. T’as peur du futur ? T’as raison, c’est pas joyeux.",
        "Franchement, c'est qu'un emoji. Si tu flippes déjà, j’ai peur de ce que tu vas faire quand tu verras une araignée.",
        "Ce regard me dit que t’as vu la note de ton dernier examen. Pas de panique, ça va s’arranger… ou pas.",
        "T’es à ce point effrayé ? Allez, un petit café et ça ira mieux. Ou un café bien fort, selon ton niveau de terreur.",
        "C’est mignon, t’as l’air aussi paniqué qu’un enfant qui a perdu son doudou.",
        "T'as l'air d'avoir vu un film de horror, mais c’est juste la réalité qui te frappe en pleine face, non ?",
        "T'as peur de quoi, exactement ? Le travail qui t'attend ou juste le fait de sortir de ton confort ?",
        "Si t'es vraiment aussi effrayé par ça, je t'envoie une couverture et une tasse de chocolat chaud.",
        "Franchement, faut pas en faire tout un drame. C’est juste une situation stressante, pas un monstre sous ton lit.",
        "Si tu pouvais être aussi effrayé par ta procrastination que par ce regard, tu ferais déjà des progrès.",
        "Ce regard là, c’est comme un film d’horreur… sauf que le monstre, c’est toi qui l’as créé avec tes choix de vie.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😧
    if (emoji === "😧") {
      const responses = [
        "C’est la tête que tu fais quand tu vois ta facture de carte de crédit ? On dirait un choc électrique.",
        "Tu viens de réaliser que tes choix de vie t'ont mené jusqu’ici, hein ? C’est déprimant.",
        "Si cette tête de surprise est à cause de quelque chose de grave, t’as pas idée de ce qu’est vraiment un problème.",
        "C’est pas si dramatique que ça, tu sais. T’es pas le premier à voir la réalité en face.",
        "T'as l'air d'avoir appris que ton futur ne sera pas aussi rose que tu l’espérais. Pas de panique.",
        "C’est marrant, t’as l’air aussi déconcerté qu’un enfant qui vient de découvrir qu’il faut travailler pour réussir.",
        "J'espère que cette tête-là ne signifie pas que tu as enfin compris qu’il faut sortir de ta zone de confort.",
        "Ah, t’as l’air bien surpris. Tu savais pas qu'on peut pas tout contrôler dans la vie ?",
        "Si t’as l’air aussi étonné que ça, ça veut dire que tu viens de découvrir que la vie n’est pas un film.",
        "Cette tête-là, on dirait que tu viens de comprendre que l'adulte dans la pièce, c'est toi, et tu n’as aucune idée de ce que tu fais.",
        "T’es surpris par quoi, exactement ? T’avais cru que les choses allaient toujours tourner en ta faveur ?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😦
    if (emoji === "😦") {
      const responses = [
        "Ok, cette tête là… C’est quoi, tu viens de découvrir que les bonnes choses n’arrivent pas toujours ?",
        "T’as l’air d’avoir vu quelque chose d’horrible. C’est quoi, ton compte en banque ?",
        "On dirait que t’es choqué, mais je parie que c’est juste ton ego qui en prend un coup.",
        "T'es choqué parce que tu réalises que la vie c’est pas aussi simple que tu croyais ? C’est un peu tard, non ?",
        "T’es tombé sur un article sur la fin du monde ou c’est juste ton reflet dans le miroir qui te choque ?",
        "Franchement, tu fais cette tête-là comme si t'avais vu la fin du monde, alors que c’est juste une mauvaise journée.",
        "Qu’est-ce qui t’effraie autant ? C’est juste la réalité qui frappe, tu n’as rien à craindre.",
        "Tu veux que je t’envoie des pastilles contre le choc ou t’as déjà assimilé la déception ?",
        "Tu as vu ton ex et tu fais cette tête-là ? C’est normal, mais respire un peu.",
        "T’as l'air de quelqu'un qui a vu son futur se prendre un virage serré. Bienvenue dans le monde réel.",
        "Si t’es choqué par ça, tu n’es pas prêt pour les vraies épreuves de la vie, je te le dis.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😮
    if (emoji === "😮") {
      const responses = [
        "Oh, t'es choqué ? Viens pas me dire que tu croyais vraiment que tout allait se passer comme dans un conte de fées.",
        "Tu veux savoir ce qui m’étonne ? Que tu sois encore aussi surpris par les aléas de la vie.",
        "T’es étonné par ça ? T’as pas encore vu la vraie surprise qui t’attend.",
        "Cette tête-là, ça ressemble à celle de quelqu’un qui vient d’apprendre qu’il doit bosser pour réussir.",
        "Tu te sens choqué, mais crois-moi, la vie va te surprendre bien plus que ça.",
        "Si t’es aussi étonné, j’espère que tu n’es pas aussi désemparé quand tu perds une chaussette.",
        "Ce regard, c’est celui de quelqu’un qui vient de comprendre qu’on doit bosser dur pour obtenir quelque chose.",
        "C’est marrant, t’as l’air étonné par tout, alors que tu sais très bien que la vie est tout sauf un long fleuve tranquille.",
        "Tu veux un conseil ? Cesse de te surprendre à chaque tournant de ta vie, c’est épuisant.",
        "Tu viens de découvrir quoi ? Que tu n’es pas le centre du monde ? Bienvenue dans la réalité.",
        "T'es étonné par ça ? T’es pas prêt pour les vrais défis alors.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
