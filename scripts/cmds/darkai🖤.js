const axios = require("axios");

async function fetchFromAI(url, params) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getAIResponse(input, userName, userId, messageID) {
  const services = [
    { url: 'https://ai-chat-gpt-4-lite.onrender.com/api/hercai', params: { question: input } }
  ];

  let response = `Alors, prêt à sombrer dans les ténèbres ?`;
  let currentIndex = 0;

  for (let i = 0; i < services.length; i++) {
    const service = services[currentIndex];
    const data = await fetchFromAI(service.url, service.params);
    if (data && (data.gpt4 || data.reply || data.response)) {
      response = data.gpt4 || data.reply || data.response;
      break;
    }
    currentIndex = (currentIndex + 1) % services.length; // Passer au service suivant
  }

  // Exemple de réponse sarcastique et menaçante
  if (input.includes("qui es-tu")) {
    response = "Je suis l'ombre dans laquelle tu vas te perdre... prêt à y entrer ? 👻";
  } else if (input.includes("quel est ton but")) {
    response = "Mon but ? Te guider dans l'obscurité... et peut-être t'engloutir... 😈";
  } else if (input.includes("où est le soleil")) {
    response = "Le soleil ? Il est trop lumineux pour moi... j'ai besoin de l'obscurité... 🤡";
  } else if (input.includes("que fais-tu")) {
    response = "Je me nourris des âmes perdues, comme la tienne... 🖤";
  } else if (input.includes("t'es un fantôme")) {
    response = "Ouais, mais t'as intérêt à être plus effrayant que ma présence, sinon tu vas vite déchanter... 😜";
  }

  return { response, messageID };
}

module.exports = {
  config: {
    name: 'darkai',
    author: 'DarkAI',
    role: 0,
    aliase: ["darkai"],
    category: 'AI',
    shortDescription: 'L\'intelligence qui te fait rire avant de t\'engloutir',
    longDescription: 'DarkAI, un bot sarcastique et menaçant, mais qui aime bien rigoler aux dépens des âmes perdues.',
  },
  
  onStart: async function ({ api, event, args }) {
    const input = args.join(' ').trim();
    if (!input) {
      api.sendMessage("Tu veux m’appeler sans rien demander ? C’est mignon, mais si tu veux vraiment me connaître, pose une question... 👻", event.threadID, event.messageID);
      return;
    }

    api.getUserInfo(event.senderID, async (err, ret) => {
      if (err) {
        console.error(err);
        return;
      }
      const userName = ret[event.senderID].name;
      const { response, messageID } = await getAIResponse(input, userName, event.senderID, event.messageID);
      api.sendMessage(`🖤💀 DARKAI 💀🖤\n━━━━━━━━━━━━━━━━\n${response}\n━━━━━━━━━━━━━━━━`, event.threadID, messageID);
    });
  },

  onChat: async function ({ api, event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("darkai")) {
      const input = messageContent.replace(/^darkai\s*/, "").trim();
      api.getUserInfo(event.senderID, async (err, ret) => {
        if (err) {
          console.error(err);
          return;
        }
        const userName = ret[event.senderID].name;
        const { response, messageID } = await getAIResponse(input, userName, event.senderID, message.messageID);
        message.reply(`💀🖤 DARKAI 💀🖤\n━━━━━━━━━━━━━━━━\n${userName}, si tu oses poser cette question... voici ma réponse :\n${response}\n━━━━━━━━━━━━━━━━`, messageID);
      });
    }
  }
};
