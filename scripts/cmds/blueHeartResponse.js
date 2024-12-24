module.exports = {
  config: {
    name: "blueHeartResponse",
    version: "1.1",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 💙",
    longDescription: "Réponses drôles et variées à l'emoji 💙",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("💙")) {
      const responses = [
        // Phrases originales
        "💙 ? Ah, tu crois qu'un cœur bleu va te rendre cool ? Non.",
        "Le bleu c'est pour les enfants. C'est ça ton style ?",
        "💙, c'est l'emoji que tu mets quand t'es trop timide pour le rouge.",
        "Un cœur bleu... même les avatars de profil sont plus intéressants que ça.",
        "💙, c'est censé être romantique, mais sur toi, c'est juste déprimant.",
        "T'as pris 💙 parce que t'as pas de personnalité, c'est ça ?",
        "💙, ou comment faire passer un cœur en mode 'je suis en mode déprime'.",
        "Tu sais que 💙 c'est l'emoji des gens qui essaient de faire genre, hein ?",
        "💙, vraiment ? T'es à fond dans les clichés, non ?",
        "C'est quoi ce cœur bleu ? T'as un crush sur l'océan ?",
        "💙 = ton cœur, mais aussi ton niveau d'originalité.",
        "T'as vu un cœur bleu quelque part et tu t'es dit 'c'est moi' ? Quelle idée.",
        "💙, c'est la couleur des gens qui se prennent trop au sérieux.",
        "Tu voulais être mignon avec 💙, mais ça a l'effet inverse.",
        "💙, comme un cœur d'enfant... pas très mature comme choix.",
        // Nouvelles phrases ajoutées
        "💙 ? Ça fait très 'je suis cool mais pas trop', sauf que t'es rien de tout ça.",
        "Un cœur bleu... c'est quoi, t'es triste mais stylé ?",
        "💙, l'emoji parfait pour dire 'j'ai de l'ego mais pas de talent'.",
        "Tu penses que 💙 est mystérieux, mais en fait, c'est juste bizarre.",
        "💙 ? Ah, t'es ce genre de personne qui choisit toujours la mauvaise couleur.",
        "Un cœur bleu ? Bravo, t'as trouvé le moyen le plus ennuyeux de montrer ton amour.",
        "💙, l'emoji des gens qui veulent se démarquer, mais qui échouent lamentablement.",
        "T'as pris 💙 parce que t'étais fatigué du rouge, hein ? Quel audace.",
        "Ce cœur bleu, c'est comme toi : froid et distant.",
        "💙, c'est la version low-cost d'un vrai sentiment.",
        "Un cœur bleu... la tentative la plus faible pour paraître original.",
        "Tu mets 💙 comme si c'était une déclaration d'amour, mais non, c'est juste gênant.",
        "💙, c'est pour ceux qui veulent avoir du style sans rien comprendre au concept.",
        "Un cœur bleu ? Allez, t'as sûrement mieux à faire que ça, non ?",
        "💙, la tentative désespérée d'avoir l'air cool sur les réseaux.",
        "Ce cœur bleu, c'est pour camoufler quoi ? Ta personnalité plate ?",
        "💙, t'as l'air d'avoir hésité entre 'j'aime' et 'je m'en fiche'.",
        "Un cœur bleu ? Si c'était un test d'originalité, c'est raté.",
        "💙, l'emoji parfait pour ceux qui pensent qu'être différent, c'est juste choisir une autre couleur.",
        "Tu crois que 💙 rend tout plus profond ? Non, ça reste superficiel.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
