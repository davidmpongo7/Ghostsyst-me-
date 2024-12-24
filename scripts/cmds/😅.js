module.exports = {
  config: {
    name: "😅",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "awkward humor",
    longDescription: "awkward, sarcastic humor",
    category: "reply",
  },

  onStart: async function() {},

  onChat: async function({ event, message }) {
    if (event.body && event.body.toLowerCase() == "😅") {
      const responses = [
        "Ah, ce sourire gêné... T'as dû dire quelque chose d'idiot, hein ? 😅",
        "Ce sourire, c'est celui de quelqu'un qui vient de réaliser qu'il a envoyé un message à la mauvaise personne. 🙄",
        "T'as l'air d'un personnage de sitcom qui vient de se mettre dans une situation vraiment embarrassante. 😬",
        "Ce sourire est celui de quelqu'un qui a l'air calme, mais qui panique à l'intérieur. 🤯",
        "On dirait que tu viens de réaliser que tu as oublié l'anniversaire de ta mère. 😅",
        "Le genre de sourire qu'on fait quand on veut dire 'je vais bien' alors qu'on est en train de sombrer dans la folie. 🤪",
        "Ce sourire est un peu comme une tentative de sauver une situation déjà perdue. Nice try, mais c'est foutu. 😆",
        "Si ce sourire était une échelle, tu serais au sommet de l'inconfort. 🤔",
        "Ce sourire, c'est celui de quelqu'un qui se dit 'tout va bien' alors que tout va mal. 🙃",
        "On dirait que tu viens de marcher dans une flaque d'eau... mais tu t'efforces de rester positif. 😅",
        "C'est ce genre de sourire qu'on fait quand on vient de se rendre compte qu'on a fait un flop. 🎭",
        "T'as l'air de chercher une issue, mais il n'y en a pas. Mais t'inquiète, ton sourire masque tout ça. 😁",
        "Le genre de sourire que tu fais quand tu sais que tu vas devoir expliquer une grosse bêtise que tu viens de dire. 🙄",
        "C'est le genre de sourire que tu fais après avoir cassé quelque chose chez un pote... mais tu n'oses rien dire. 😅",
        "On dirait que t'es au milieu d'une situation gênante et que t'essaies juste de fuir... mais sans succès. 😓",
        "Ce sourire est la version 2.0 de la panique. Juste en plus poli. 😄",
        "C'est ce genre de sourire que tu fais quand tu veux que tout le monde oublie que tu viens de faire une énorme gaffe. 🙈",
        "Tu fais semblant d'aller bien, mais en vrai tu viens de sortir une réplique ultra gênante. 😅",
        "Ce sourire, c'est celui d'un chat qui a fait une bêtise et qui essaie de convaincre tout le monde que ce n'est pas lui. 🐱",
        "T'as ce sourire comme si tu savais que t'es déjà dans un piège et que c'est trop tard pour t'en sortir. 😬",
        "Ce sourire, c'est exactement celui qu'on fait après avoir mangé une blague complètement ratée. 😅",
      ];

      const randomIndex = Math.floor(Math.random() * responses.length);
      message.reply(responses[randomIndex]);
    }
  },
};
