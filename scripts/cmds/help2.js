module.exports = {
  config: {
    name: "help2",
    version: "1.17",
    author: "NTKhang", // Auteur du bot
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "View command usage and list all commands directly",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += `\n.    /)    /)                  (＼  (＼ \n.  (｡•ㅅ•｡)〝₎₎            (⁠ㆁ⁠ω⁠ㆁ)\n╭∪─∪─────∪─∪╮\n├─–✿🌸xx Ghost xx🌸✿─┤\n╰━━━━━━━━━━━╯\n╭━━━━━━━━━━━•❖\n│𝐋𝐢𝐬𝐭𝐞 𝐝𝐞𝐬 𝐜𝐦𝐝𝐬\n╰━━━━━━━━━━━╮`;

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "Uncategorized";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += `\n╭━━━━━━━━━━━╯\n│ ⊱–{ ${category.toUpperCase()} }–⊰`;

          const names = categories[category].commands.sort();
          for (let i = 0; i < names.length; i += 3) {
            const cmds = names.slice(i, i + 3).map((item) => `\n│✰${item}`);
            msg += `${cmds.join(" ".repeat(Math.max(1, 10 - cmds.join("").length)))}`;
          }

          msg += `\n╰━━━━━━━━━━━╮`;
        }
      });

      const totalCommands = commands.size;
      msg += `❖━━━━━━━━━━━╯\n╭━━━━━━━━━━━•❖\n│𝐈𝐍𝐅𝐎\n│𝐒𝐔𝐏𝐏𝐋𝐄́𝐌𝐄𝐍𝐓𝐀𝐈𝐑𝐄\n├━━━━━━━━━━━•❖\n│𝐀𝐜𝐭𝐮𝐞𝐥𝐥𝐞𝐦𝐞𝐧𝐭 𝐣'𝐚𝐢 ${totalCommands}\n│𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬\n├━━━━━━━━━━━•❖`;
      msg += `\n│𝐓𝐚𝐩𝐞 ${prefix} 𝗵𝗲𝗹𝗽+𝐧𝐨𝐦\n│𝐝𝐞 𝐥𝐚 𝐜𝐦𝐝 𝐩𝐨𝐮𝐫 𝐯𝐨𝐢𝐫 𝐥𝐞𝐬 \n│𝐝𝐞́𝐭𝐚𝐢𝐥𝐬 𝐝𝐞 𝐥𝐚 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞\n├━━━━━━━━━━━•❖\n`;

      // Ajout des GIFs
      const helpListImages = [
        'https://i.imgur.com/KbyJFzN.gif', // GIF d'introduction
        'https://i.imgur.com/HgMPxRE.gif', // GIF liste de commandes
      ];

      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];

      // Message final avec GIF
      await message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(helpListImage),
      });
    } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Commande "${commandName}" introuvable.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Inconnu";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "Pas de description" : "Pas de description";

        const guideBody = configCommand.guide?.en || "Pas de guide disponible.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `╭── NAME ────⭓
  │ ${configCommand.name}
  ├── INFO
  │ Description: ${longDescription}
  │ Autres noms: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Aucun"}
  │ Version: ${configCommand.version || "1.0"}
  │ Rôle: ${roleText}
  │ Temps de recharge: ${configCommand.countDown || 1}s
  │ Auteur: ${author}
  ├── Utilisation
  │ ${usage}
  ├── Notes
  │ Le contenu dans <XXXXX> peut être changé
  │ Le contenu dans [a|b|c] est une option parmi a, b ou c
  ╰━━━━━━━❖`;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (Tous les utilisateurs)";
    case 1:
      return "1 (Administrateurs du groupe)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Rôle inconnu";
  }
	  }
