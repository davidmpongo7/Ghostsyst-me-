const axios = require('axios');

module.exports = {
    name: '3ai',
    description: 'An AI command powered by Neuronspike, modified by joshua apostol',
    aliases: ['globalGPT'],
    cooldown: 3,
    nashPrefix: false,
    execute: async (api, event, args) => {
        const input = args.join(' ');

        if (!input) {
            api.sendMessage(
                `💬 \n━━━━━━━━━\n😐`,
                event.threadID,
                event.messageID
            );
            return;
        }

        api.sendMessage(`.......⌛`, event.threadID, event.messageID);

        try {
            const { data } = await axios.get(`https://api.easy-api.online/v1/globalgpt?q=${encodeURIComponent(input)}`);
            const response = data.content;

            const finalResponse = `💬\n━━━━━━━━━━\n\n${response}\n\n━━━━━━━━━━\n`;
            api.sendMessage(finalResponse, event.threadID, event.messageID);
        } catch (error) {
            api.sendMessage('An error occurred while processing your request, please try sending your question again', event.threadID, event.messageID);
            console.error(error);
        }
    },
};
