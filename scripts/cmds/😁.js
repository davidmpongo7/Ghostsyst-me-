module.exports = {
  config: {
    name: "😁",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "sarcastic fun",
    longDescription: "sarcasm and humor",
    category: "reply",
  },

  onStart: async function() {},

  onChat: async function({ event, message }) {
    if (event.body && event.body.toLowerCase() == "😁") {
      const responses = [
        "Oh wow, un sourire ! Est-ce que t'as une bonne raison de sourire ou c'est juste parce que t'es aussi drôle que la pluie ? ☔",
        "Sérieusement, ce sourire là, t'as pas l'impression de faire semblant d'être heureux ? 😅",
        "Regarde-moi ce sourire ! Ça doit être la première fois que tu te sens joyeux depuis 10 ans, non ? 😂",
        "T'as un sourire aussi faux qu'une promo de supermarché. 😜",
        "Oh, t'as un sourire qui pourrait faire fondre un glaçon... mais bon, tu restes juste un glaçon qui a froid à l'intérieur. 😏",
        "Ce sourire, c'est comme un filtre Instagram. Tu sais que ça cache des choses ! 😆",
        "Si ton sourire était une star de cinéma, il serait dans un film d'horreur. 😜",
        "Alors, t'es content ou tu fais juste semblant pour qu'on te laisse tranquille ? 😁",
        "J'adore ton sourire, il est aussi naturel qu'un email spam. 😜",
        "Ce sourire est un peu comme une publicité mensongère : il n'y a rien d'authentique derrière. 😂",
        "Sérieusement, c'est quoi ton secret pour avoir l'air aussi faux ? 😁",
        "C'est quoi ce sourire ? Une tentative de convaincre les autres que tu es heureux, ou tu viens juste de croquer un citron ? 🍋",
        "Ah, ce sourire ! T'as l'air d'un acteur qui essaie de vendre un produit défectueux. 😆",
        "T'es un peu trop content pour quelqu'un qui a sûrement oublié où il a garé sa voiture. 😜",
        "Ton sourire est plus forcé qu'un influencer qui essaie de vendre un produit qu'il n'utilise même pas. 😅",
        "Ce sourire ressemble à un acteur qui essaie de gagner un prix pour la meilleure performance… mais c'est plutôt un échec. 😆",
        "Ok, tu veux me convaincre que tu es heureux avec ce sourire, mais j'ai l'impression que c'est une blague. 😜",
        "Ce sourire, c'est le genre de truc qu'on voit dans les films, juste avant que ça devienne un thriller. 😏",
        "T'as l'air de vouloir cacher un secret avec ce sourire. Ça sent le mystère... ou peut-être la pizza volée. 🍕"
      ];

      const randomIndex = Math.floor(Math.random() * responses.length);
      message.reply(responses[randomIndex]);
    }
  },
};
