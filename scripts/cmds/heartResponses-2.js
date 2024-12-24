module.exports = {
  config: {
    name: "heartResponses",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à des cœurs",
    longDescription: "Réponses drôles et insultantes aux emojis de cœur",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("💘")) {
      const responses = [
        "💘 Ah, le cœur transpercé ! T'es là à te plaindre de l'amour, mais t'as surtout l'air de t'attirer des ennuis.",
        "💘 Si ce cœur est supposé être un symbole d'amour, il ressemble plutôt à une tentative désespérée d'attirer l'attention.",
        "💘 Ce cœur, c'est exactement ce que tu obtiens quand tu essaies de forcer un sentiment qui n'est même pas là.",
        "💘 Ce cœur transpercé, c'est comme toi : essayer de ressembler à quelque chose d'intéressant, mais c'est juste un cri désespéré pour un peu de compassion.",
        "💘 Ce cœur percé ? T'es comme un film dramatique ennuyeux qui essaye de te vendre du pathos alors que personne n'en a rien à foutre.",
        "💘 T'as mis ça pour te donner un air tragique, mais franchement, t'es plus dans la catégorie des malheureux clichés.",
        "💘 Si ce cœur avait des sentiments, il serait aussi déçu de toi que moi de te répondre.",
        "💘 T'essayes de faire le mystérieux avec ton cœur transpercé, mais ça fait juste une ambiance 'pitié' à deux balles.",
        "💘 Ce cœur percé ? C'est ce que t'as quand tu crois que les autres vont s'intéresser à tes histoires d'amour pathétiques.",
        "💘 T'as mis ce cœur comme si tu étais une sorte de romantique tragique, alors qu'en fait, t'es juste un cliché mal exécuté.",
        "💘 C'est ça, continue avec ton cœur percé. Il te fait peut-être paraître intéressant, mais en fait, il ne fait que renforcer combien t'es ennuyeux.",
        "💘 T'es là à te plaindre de ton cœur percé, mais t'es juste une caricature de l'amour non réciproque.",
      ];

      if (event.body.includes("💝")) {
        responses.push(
          "💝 Ah, un cœur brillant, comme si ça allait compenser ton manque total de personnalité.",
          "💝 Ce cœur, c'est celui que tu choisis quand tu veux montrer de l'affection, mais que personne ne t'en donne.",
          "💝 Tu as mis ce cœur comme pour faire croire que t'es un bon samaritain, mais en réalité, t'es juste là pour récolter des likes.",
          "💝 Ce cœur brillé ? Ça cache à peine ton côté désespéré à vouloir attirer l'attention.",
          "💝 Ce cœur est pour ceux qui pensent que l'amour se résume à des emojis et des clichés mal appliqués.",
          "💝 Un cœur brillant ? C'est mignon, mais ça change rien à ta capacité à être ennuyeux.",
          "💝 Ce cœur, c'est comme ton personnage : une façade brillante mais sans aucune substance.",
          "💝 Il est brillant, certes, mais il cache juste combien t'as l'air d'un robot sans âme.",
          "💝 Ce cœur, c'est toi qui essaies de te convaincre que tu as du charme. Spoiler : t'en as pas.",
          "💝 Si ce cœur était vraiment pour toi, il aurait l'air beaucoup plus... intéressant. Désolé, c'est pas le cas.",
          "💝 Ce cœur, c'est une tentative de charme, mais t'as juste l'air de quelqu'un qui veut trop plaire sans savoir comment faire.",
          "💝 T'as mis ce cœur pour essayer de te rendre mignon, mais on voit bien que t'es qu'une version médiocre de ça."
        );
      }

      if (event.body.includes("💗")) {
        responses.push(
          "💗 Le cœur rose, super original ! Comme ton niveau d'intelligence, qui se trouve être à la même hauteur.",
          "💗 Ce cœur rose, c'est ce qu'on met quand on veut donner l'illusion qu'on est gentil, mais tout le monde sait que t'es un gros hypocrite.",
          "💗 Ce cœur, c'est celui de ceux qui ont l'air mignons sur Instagram mais qui sont insupportables en vrai.",
          "💗 Ah, un cœur rose. Parce que tu penses qu'en mettant ça, on oublie que t'es aussi vide qu'une boîte de conserve.",
          "💗 Ce cœur rose, c'est comme toi : superficiel et totalement inutile.",
          "💗 Si ce cœur avait une signification, ça serait 'je tente d'attirer de l'attention, mais sans succès'.",
          "💗 Le cœur rose ? Comme un sticker sur un mur vide, ça cache juste combien t'es détestable.",
          "💗 Ce cœur rose ne te rend pas plus mignon. Il te rend juste plus pathétique.",
          "💗 T'as mis ce cœur rose en espérant être adorable, mais tu ressembles plus à un clown qu'autre chose.",
          "💗 Un cœur rose ? Ce n'est pas plus romantique que tes messages ennuyeux.",
          "💗 Ce cœur rose, c'est juste un autre moyen pour toi de crier 'regardez-moi, regardez-moi', mais t'es pas plus intéressant qu'un mauvais film.",
          "💗 Si ce cœur symbolisait quelque chose, ce serait 'je tente de paraître mignon, mais je ne suis qu'un cliché ambulant'."
        );
      }

      if (event.body.includes("💓")) {
        responses.push(
          "💓 Ce cœur battant ? C'est comme toi : tu essaies d'être vivant mais t'es juste là, à faire du bruit pour rien.",
          "💓 Ah, le cœur battant, comme une batterie morte. C'est joli, mais ça n'a aucune énergie derrière.",
          "💓 Ce cœur battant, c'est ce qu'on met quand on veut que ça paraisse intense, mais en fait, tu fais juste pitié.",
          "💓 Un cœur battant ? T'es là à essayer de faire croire que t'as du feu dans la poitrine, mais t'es aussi plat qu'un pancake.",
          "💓 Ce cœur battant est censé représenter l'amour, mais honnêtement, c'est plus un signal d'alarme pour 'regarde à quel point j'essaie trop'.",
          "💓 Si ce cœur battait plus vite, peut-être qu'il aurait le temps de fuir ta personnalité.",
          "💓 Un cœur battant, mais tu sais quoi ? T'as l'air juste d'un hamster dans une roue, toujours occupé à rien faire.",
          "💓 Ce cœur battant est aussi utile que tes tentatives pour être mignon.",
          "💓 T'as mis ce cœur battant en pensant que ça ferait de toi quelqu'un d'intéressant, mais en fait, c'est juste triste.",
          "💓 Un cœur battant ? Ça veut juste dire que tu vis pour chercher à ce que les gens te remarquent. Spoiler : c'est pas efficace.",
          "💓 Ce cœur battant c'est comme une alarme qui sonne dans ta tête, mais personne ne veut l'entendre.",
          "💓 Ce cœur est là pour te faire croire que t'as un grand cœur, mais en réalité, t'es juste là pour récolter un peu de pity."
        );
      }

      if (event.body.includes("💞")) {
        responses.push(
          "💞 Un cœur qui pulse d'amour... ou plutôt de fausses promesses.",
          "💞 Ce cœur qui semble battre d'amour, mais t'es aussi sincère que les filtres de tes selfies.",
          "💞 T'as mis ce cœur pour faire croire que t'es une âme pure, mais tout le monde sait que t'es juste une imposture.",
          "💞 Ce cœur qui donne l'illusion de l'amour, mais au fond, t'es aussi faux qu'un acteur dans un mauvais film.",
          "💞 Ce cœur semble plein de promesses, mais on sait tous qu'il est aussi vide que ton compte en banque.",
          "💞 Ce cœur est plus une image qu'un vrai sentiment. Mais ne t'en fais pas, on t'aimera quand même pour ta tentative désespérée.",
          "💞 T'as mis ce cœur dans l'espoir d'attirer un peu de sympathie, mais ça ne fait qu'accentuer combien tu manques de substance.",
          "💞 Ce cœur, c'est juste un filtre de plus dans ta vie pleine de fausseté.",
          "💞 Ce cœur est là pour cacher la vérité : t'es aussi utile qu'une boîte vide.",
          "💞 Si ce cœur était sincère, il aurait été plus réaliste.",
          "💞 Ce cœur est une illusion, tout comme ton idée de l'amour.",
          "💞 Ce cœur est aussi sincère que ta dernière tentative de sourire."
        );
      }

      if (event.body.includes("💕")) {
        responses.push(
          "💕 Un cœur rose et mignon ? Ou une fausse promesse de gentillesse qui cache un vide.",
          "💕 Ce cœur n'est pas là pour refléter l'amour, c'est juste un cri d'aide déguisé.",
          "💕 Tu mets ce cœur pour faire croire que t'es rempli d'amour, mais en réalité, t'es aussi vide qu'un sac de chips.",
          "💕 Ce cœur est aussi sincère que ta capacité à être original.",
          "💕 Ah, ce cœur rose, c'est ton dernier espoir pour convaincre les autres que tu n'es pas un robot émotionnel.",
          "💕 Ce cœur représente à quel point t'essaies de rendre tout ce que tu fais plus romantique qu'il ne l'est.",
          "💕 Ce cœur ? C'est juste là pour décorer un manque de personnalité.",
          "💕 Ce cœur est là pour cacher ta solitude, mais on le voit quand même.",
          "💕 Ce cœur, c'est toi qui essaies de jouer au romantique, mais tu n'es qu'un parodiste raté.",
          "💕 Ce cœur rose, c'est ta manière de dire 'j'essaie de paraître mignon', mais on sait que c'est juste une façade.",
          "💕 Ce cœur, c'est exactement ce qu'on met quand on a aucune idée de ce que l'amour est vraiment.",
          "💕 Si ce cœur représentait quelque chose, ce serait juste une tentative d'attirer l'attention, et tu échoues royalement."
        );
      }

      if (event.body.includes("❤️‍🩹")) {
        responses.push(
          "❤️‍🩹 Ce cœur réparé ? Ou peut-être juste un faux espoir d'une réparation qui n'arrivera jamais.",
          "❤️‍🩹 Tu mets ce cœur pour paraître blessé, mais tu t'es juste fait mal en essayant de te faire remarquer.",
          "❤️‍🩹 Ce cœur soigné, c'est comme toi : ça cache des blessures qui ne guérissent jamais.",
          "❤️‍🩹 Ce cœur soigné est juste une excuse pour dire 'regardez-moi, je souffre'. Eh bien, non, ça ne fonctionne pas.",
          "❤️‍🩹 Ce cœur est réparé, mais toi, t'es toujours aussi brisé.",
          "❤️‍🩹 Ce cœur est un patch, mais il ne pourra jamais réparer ton manque de personnalité.",
          "❤️‍🩹 Ce cœur réparé, mais comme toi, il est toujours aussi inutile.",
          "❤️‍🩹 Ce cœur réparé, c'est juste une illusion d'amour qui cache ton besoin désespéré d'attention.",
          "❤️‍🩹 Ce cœur réparé ? Pitié. T'es comme une plaie qui ne guérit jamais.",
          "❤️‍🩹 Ce cœur réparé, c'est comme une promesse vide que tu te fais à toi-même. Spoiler : ça échoue toujours.",
          "❤️‍🩹 Ce cœur réparé est une bonne tentative de cacher ton vide intérieur, mais on voit bien à travers."
        );
      }

      if (event.body.includes("❤️‍🔥")) {
        responses.push(
          "❤️‍🔥 Ce cœur en feu ? Ou une tentative désespérée de rendre ta vie excitante alors qu'elle est aussi fade qu'un film de série B.",
          "❤️‍🔥 Ce cœur en flamme, mais tu sais quoi ? T'es juste en train de te consumer dans ton propre vide.",
          "❤️‍🔥 T'as mis ce cœur en feu, mais c'est toi qui te brûles, espèce de clown.",
          "❤️‍🔥 Ce cœur en feu ? C'est toi qui essaies de faire comme si ta vie était une aventure palpitante, mais on voit bien que t'es aussi passionnant qu'un mur blanc.",
          "❤️‍🔥 Ce cœur ardent ? T'es juste en train de mettre du feu à des désirs inaccessibles.",
          "❤️‍🔥 Ce cœur en feu, c'est comme un barbecue : t'essaies de faire quelque chose de chaud, mais c'est juste en train de partir en fumée.",
          "❤️‍🔥 Ce cœur en feu, c'est comme une promesse qu'on sait bien que tu ne tiens jamais.",
          "❤️‍🔥 Ce cœur en feu, mais la seule chose que tu fais, c'est brûler ta propre crédibilité.",
          "❤️‍🔥 Ce cœur en feu ? T'es juste en train de t'auto-saboter, mon pote.",
          "❤️‍🔥 T'as mis ce cœur en feu, mais à force d'être en flamme, tu te brûles plus que tu ne brûles les autres.",
          "❤️‍🔥 Ce cœur en flamme, mais toi, t'es juste un énorme échec ambulant, même le feu t'ignore."
        );
      }

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
