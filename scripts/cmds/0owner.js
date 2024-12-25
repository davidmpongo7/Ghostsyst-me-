const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "owner",
    aurthor: "Tokodori", // Convert By Goatbot Tokodori
    role: 0,
    shortDescription: " ",
    longDescription: "",
    category: "admin",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    try {
      // Informations du propriétaire
      const ownerInfo = {
        name: 'XxGhostxX',
        gender: 'Male',
        age: '17+',
        height: 'Unknown',
        facebookLink: 'https://www.facebook.com/0xxghostboyxx0',
        nick: 'Ghost'
      };

      const bold = '.....'; // Remplacez par votre lien Google Drive pour la vidéo

      const tmpFolderPath = path.join(__dirname, 'tmp');

      if (!fs.existsSync(tmpFolderPath)) {
        fs.mkdirSync(tmpFolderPath);
      }

      // Téléchargement de la vidéo
      const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
      const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

      fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

      // Réponse des informations du propriétaire
      const response = `
Owner Information:🧾
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
Facebook: ${ownerInfo.facebookLink}
Nick: ${ownerInfo.nick}
`;

      // Envoi des informations du propriétaire avec la vidéo
      await api.sendMessage({
        body: response,
        attachment: fs.createReadStream(videoPath)
      }, event.threadID, event.messageID);

      // Liste de réponses aléatoires pour présenter le propriétaire
      const responses = [
        "Le propriétaire, c'est XxGhostxX, un véritable génie des ombres. 😎",
        "Ghost, 17 ans, prêt à conquérir le monde avec ses connaissances mystérieuses. 🌍",
        "C'est lui, XxGhostxX, le maître des secrets et de l'ombre. 🌑",
        "L'âge n'est qu'un chiffre pour Ghost, mais il a déjà tout vu à 17 ans. 🕵️‍♂️",
        "Ghost, aka XxGhostxX, toujours calme, toujours mystérieux, mais quand il parle, tout le monde écoute. 🧠",
        "Si tu veux des réponses à des questions, XxGhostxX est ton homme. Ou fantôme. 👻",
        "Le propriétaire ? C'est XxGhostxX. Un esprit brillant avec une vision claire. 👀",
        "Ghost n'a pas besoin de super pouvoirs, juste d'une connexion internet et d'un esprit vif. ⚡",
        "À 17 ans, Ghost est déjà un phénomène. Prépare-toi à être ébloui. ✨",
        "XxGhostxX, le nom que tout le monde connaît, mais que personne ne peut cerner. 🔍",
        "Le propriétaire de ce bot ? Un certain XxGhostxX. À la fois énigmatique et brillant. 🕶️",
        "Ghost : 17 ans, pas de limites. Les règles ? Il les fait, pas les suit. 🔥",
        "XxGhostxX, un nom légendaire, même à 17 ans. Tu peux essayer de le suivre, mais bonne chance ! 🏃‍♂️",
        "N'attends pas de réponses classiques de Ghost. Il est tout sauf ordinaire. 🎩",
        "Derrière ce bot, c'est XxGhostxX qui fait régner l'ordre dans le chaos. ⚔️",
        "Savais-tu que Ghost est un génie caché sous une couche de mystère ? Il est là, toujours prêt à impressionner. 🎭"
      ];

      // Sélection aléatoire d'une réponse
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      await api.sendMessage(randomResponse, event.threadID);

      // Réaction si l'utilisateur mentionne "ownerinfo"
      if (event.body.toLowerCase().includes('ownerinfo')) {
        api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
      }

    } catch (error) {
      console.error('Error in ownerinfo command:', error);
      return api.sendMessage('An error occurred while processing the command.', event.threadID);
    }
  },
};
