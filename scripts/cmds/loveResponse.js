module.exports = {
  config: {
    name: "loveResponse",
    version: "1.1",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à ❤️",
    longDescription: "Réponses drôles et variées à l'emoji ❤️",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("❤️")) {
      const responses = [
        "Ah, l'amour... Dommage que personne ne t'aime vraiment !",
        "❤️ ? T'es sûr que ton cœur est encore fonctionnel ?",
        "Cœur rouge ? Voilà pourquoi t'es célibataire.",
        "Même un emoji a plus de sentiments que toi.",
        "C'est mignon... sauf que t'es seul comme un caillou.",
        "Oh, t'es romantique ? Dommage que ton crush t'ignore.",
        "❤️ ? On dirait que tu joues dans une mauvaise comédie romantique.",
        "Garde ton cœur, personne n'en veut ici.",
        "C'est beau l'amour... quand c'est réciproque, pas comme toi.",
        "Cœur rouge ? Retourne liker des photos sur Insta.",
        "Ton emoji est plus romantique que ta vie entière.",
        "❤️ ? Laisse-moi deviner, t'es en train de rêver.",
        "Cœur rouge ? T'as déjà pleuré devant un film Netflix, avoue !",
        // Nouvelles phrases ajoutées
        "❤️ ? Ah oui, t’as oublié que Cupidon t’a blacklisté ?",
        "L’amour est dans l’air... Mais pas autour de toi, visiblement.",
        "Cœur rouge ? Essaie plutôt un emoji 💀, c'est plus réaliste.",
        "Oh, un ❤️ ! T’as cru qu’on était sur Tinder ?",
        "Cœur rouge ? Dis-le que tu veux juste de l'attention.",
        "On dirait que tu confonds l’amour avec ton besoin de validation.",
        "❤️ ? Arrête, tu vas faire buguer mes circuits avec tant de solitude.",
        "Un cœur rouge pour te remonter le moral ? Cute, mais inutile.",
        "❤️ ? J’espère que c’est pour ton animal de compagnie, au moins.",
        "Tu utilises des cœurs comme si ça allait cacher ton désespoir.",
        "Cœur rouge ? T’es en mode 'j’ai un cœur', mais on sait que tu l’utilises jamais.",
        "❤️ ? Ton cœur est aussi utile qu’un parapluie en plein désert.",
        "Oh, un cœur ! T’essaies de te consoler après avoir raté ta vie sentimentale ?",
        "C’est beau un cœur, dommage que tu sois émotionnellement indisponible.",
        "❤️ ? T’as pris ça où, sur un site de romance pour robots ?",
        "Arrête avec les cœurs, on sait tous que tu mens à toi-même.",
        "Ton ❤️ est aussi crédible que tes promesses de te reprendre en main.",
        "Cœur rouge ? On dirait que t’essaies de te convaincre que t’es une bonne personne.",
        "❤️ ? J’espère que t’as pas envoyé ça à ton ex, sinon c’est gênant.",
        "Oh, un cœur ! T’essaies de combler un vide abyssal, avoue.",
        "Cœur rouge ? On dirait que t’es en train de jouer à l’illusionniste avec toi-même.",
        "❤️ ? Si seulement ça pouvait réparer ton karma catastrophique.",
        "Un cœur, hein ? Si seulement ça pouvait cacher ta solitude intersidérale.",
        "❤️ ? Ton niveau de désespoir est presque touchant... Presque.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
