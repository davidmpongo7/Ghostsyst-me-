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

  let response = `Pose ta question, parce que t'as vraiment l'air perdu là...`;
  let currentIndex = 0;

  // Vérifier si l'entrée contient un mot déclencheur comme "Ghost" ou une insulte
  const insults = ['connard', 'merde', 'nul', 'débile', 'abruti', 'idiot', 'salope']; // Liste d'insultes basiques
  const triggerWord = 'ghost';

  // Si l'utilisateur insulte ou utilise le mot déclencheur "ghost"
  if (input.toLowerCase().includes(triggerWord)) {
    response = "Oh, t'as dit Ghost ? Bien sûr, je suis là pour te pourrir encore plus la journée. Tu veux vraiment ça ? 🤔";
  } else if (insults.some(insult => input.toLowerCase().includes(insult))) {
    response = `Oh, t'es vraiment qu'un gros ${input.match(new RegExp(insults.join('|'), 'i'))[0]} hein ? Ça te va comme réponse ? 👏`;
  } else {
    for (let i = 0; i < services.length; i++) {
      const service = services[currentIndex];
      const data = await fetchFromAI(service.url, service.params);
      if (data && (data.gpt4 || data.reply || data.response)) {
        response = data.gpt4 || data.reply || data.response;
        break;
      }
      currentIndex = (currentIndex + 1) % services.length; // Passer au service suivant
    }
  }

  return { response, messageID };
}

module.exports = {
  config: {
    name: 'ghost',
    author: 'shizuka',
    role: 0,
    aliase: ["2ghost"],
    category: 'AI',
    shortDescription: 'ai to ask anything',
  },
  onStart: async function ({ api, event, args }) {
    const input = args.join(' ').trim();
    if (!input) {
      api.sendMessage("Eh bien, t'as encore oublié ce que tu voulais dire ? Pose ta question au lieu de m'appeler 😐", event.threadID, event.messageID);
      return;
    }

    api.getUserInfo(event.senderID, async (err, ret) => {
      if (err) {
        console.error(err);
        return;
      }
      const userName = ret[event.senderID].name;
      const { response, messageID } = await getAIResponse(input, userName, event.senderID, event.messageID);
      api.sendMessage(`𝑿☠️𝑿 『𝑮𝑯𝑶𝑺𝑻』𝑿☠️𝑿\n━━━━━━━━━━━━━━━━\n${response}\n━━━━━━━━━━━━━━━━`, event.threadID, messageID);
    });
  },
  onChat: async function ({ api, event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("ghost")) { // Si le message commence par "ghost", on active la réponse
      const input = messageContent.replace(/^ghost\s*/, "").trim();
      api.getUserInfo(event.senderID, async (err, ret) => {
        if (err) {
          console.error(err);
          return;
        }
        const userName = ret[event.senderID].name;
        const { response, messageID } = await getAIResponse(input, userName, event.senderID, message.messageID);
        message.reply(`𝑿☠️𝑿 『𝑮𝑯𝑶𝑺𝑻』 𝑿☠️𝑿 \n━━━━━━━━━━━━━━━━\n${userName}, ${response}\n━━━━━━━━━━━━━━━━\n`, messageID);
        api.setMessageReaction("🏌️‍♂️", event.messageID, () => {}, true);
      });
    }
  }
};
