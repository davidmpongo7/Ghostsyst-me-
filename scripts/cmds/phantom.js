const axios = require('axios');

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

  let response = `👻 *Crrrrreeeek*... Je suis un fantôme affamé... pose ta question, et je vais te dévorer vivant(e)... 😈`;

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

  return { response, messageID };
}

module.exports = {
  config: {
    name: 'phantom',
    author: 'shizuka',
    role: 0,
    aliase: ["phantom", "👻"],
    category: 'AI',
    shortDescription: 'Un fantôme affamé qui dévore l\'âme des utilisateurs 👻',
  },

  onStart: async function ({ api, event, args }) {
    const input = args.join(' ').trim();
    if (!input) {
      api.sendMessage("👻 Tu veux que je te dévore ? Pose ta question et prépare-toi à être englouti... 😈", event.threadID, event.messageID);
      return;
    }

    api.getUserInfo(event.senderID, async (err, ret) => {
      if (err) {
        console.error(err);
        return;
      }
      const userName = ret[event.senderID].name;
      const { response, messageID } = await getAIResponse(input, userName, event.senderID, event.messageID);
      api.sendMessage(`👻 *Hahaha*... Je vais te dévorer, ${userName}. Voici ma réponse avant que je t'engloutisse : \n━━━━━━━━━━━━━━━━\n${response}\n━━━━━━━━━━━━━━━━`, event.threadID, messageID);
    });
  },

  onChat: async function ({ api, event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("👻")) {
      const input = messageContent.replace(/^👻\s*/, "").trim();
      api.getUserInfo(event.senderID, async (err, ret) => {
        if (err) {
          console.error(err);
          return;
        }
        const userName = ret[event.senderID].name;
        const { response, messageID } = await getAIResponse(input, userName, event.senderID, message.messageID);
        message.reply(`👻 *Crrrrreeek*... ${userName}, tu es maintenant dans ma bouche ! Voici ce que j'ai à te dire avant de t'avaler : \n━━━━━━━━━━━━━━━━\n${response}\n━━━━━━━━━━━━━━━━\n`, messageID);
        api.setMessageReaction("👻", event.messageID, () => {}, true);
      });
    }
  }
};
