let games = {};
let leaderboard = {}; // Pour le tableau des scores

const candyTypes = ['🍬', '🍒', '🍭', '🍫', '🍪', '🍩'];
const difficultyLevels = ['Facile', 'Normal', 'Difficile']; // 3 niveaux de difficulté

// Génère la grille initiale en fonction de la difficulté
function generateBoard(difficulty) {
  let size = 4;
  if (difficulty === 'Normal') size = 5;
  if (difficulty === 'Difficile') size = 6;

  let board = [];
  for (let i = 0; i < size; i++) {
    board.push([]);
    for (let j = 0; j < size; j++) {
      const randomCandy = candyTypes[Math.floor(Math.random() * candyTypes.length)];
      board[i].push(randomCandy);
    }
  }
  return board;
}

// Affiche la grille
function displayBoard(board) {
  let display = "";
  for (let row of board) {
    display += row.join(" ") + "\n";
  }
  return display;
}

// Vérifie s'il y a des matchs
function checkMatch(board) {
  let matched = false;
  let size = board.length;

  // Check rows for matches
  for (let row of board) {
    for (let i = 0; i <= size - 4; i++) {
      if (row[i] === row[i + 1] && row[i] === row[i + 2] && row[i] === row[i + 3]) {
        matched = true;
        break;
      }
    }
  }

  // Check columns for matches
  for (let col = 0; col < size; col++) {
    for (let i = 0; i <= size - 4; i++) {
      if (board[i][col] === board[i + 1][col] && board[i][col] === board[i + 2][col] && board[i][col] === board[i + 3][col]) {
        matched = true;
        break;
      }
    }
  }

  return matched;
}

// Mettre à jour le score
function updateScore(playerID, score) {
  if (!leaderboard[playerID]) {
    leaderboard[playerID] = { score: 0, money: 0 };
  }
  leaderboard[playerID].score += score;
  leaderboard[playerID].money += score * 10; // L'argent est basé sur le score
}

// Échanger des bonbons
function swapCandies(board, x1, y1, x2, y2) {
  const temp = board[x1][y1];
  board[x1][y1] = board[x2][y2];
  board[x2][y2] = temp;
}

function resetGame(playerID, difficulty) {
  games[playerID] = {
    board: generateBoard(difficulty),
    score: 0,
    difficulty: difficulty
  };
}

module.exports = {

  config: {
    name: "candycrush",
    aliases: ["ccrush"],
    version: "1.0",
    author: "Ghost",
    category: "game",
  },

  onStart: async function ({ event, api }) {
    const playerID = event.senderID;
    if (!games[playerID]) {
      api.sendMessage("Choisis ton niveau de difficulté : Facile, Normal, ou Difficile ?", event.threadID);
      return;
    }

    const boardMessage = displayBoard(games[playerID].board);
    api.sendMessage(`🍬 Bienvenue dans Candy Crush ! 🍬\n\nVoici la grille de départ :\n${boardMessage}\n\nPour jouer, envoie les coordonnées des bonbons à échanger, par exemple : "1,1 avec 1,2"`, event.threadID);
  },

  onChat: async function ({ event, api, args }) {
    const playerID = event.senderID;
    const message = event.body.toLowerCase();

    if (message.includes("candycrush")) {
      if (!games[playerID]) {
        if (args[0] && difficultyLevels.includes(args[0])) {
          resetGame(playerID, args[0]);
          api.sendMessage(`Ok, niveau ${args[0]} sélectionné ! Commence à jouer. Pour échanger les bonbons, écris "X,Y avec A,B".`, event.threadID);
          return;
        } else {
          api.sendMessage("S'il te plaît, choisis un niveau de difficulté valide : Facile, Normal, ou Difficile.", event.threadID);
          return;
        }
      }

      const swapArgs = args[0]?.split(" avec ");
      if (!swapArgs || swapArgs.length !== 2) {
        api.sendMessage("Essaye de formuler l'échange comme ceci : 'X,Y avec A,B'.", event.threadID);
        return;
      }

      const [x1, y1] = swapArgs[0].split(",").map(Number);
      const [x2, y2] = swapArgs[1].split(",").map(Number);

      const size = games[playerID].board.length;

      if (
        x1 < 1 || x1 > size || y1 < 1 || y1 > size || 
        x2 < 1 || x2 > size || y2 < 1 || y2 > size ||
        (x1 === x2 && y1 === y2)
      ) {
        api.sendMessage("Les coordonnées ne sont pas valides ! Essaye de nouveau.", event.threadID);
        return;
      }

      const x1Idx = x1 - 1;
      const y1Idx = y1 - 1;
      const x2Idx = x2 - 1;
      const y2Idx = y2 - 1;

      // Effectuer l'échange
      swapCandies(games[playerID].board, x1Idx, y1Idx, x2Idx, y2Idx);

      // Vérification des matchs
      const boardMessage = displayBoard(games[playerID].board);
      const hasMatch = checkMatch(games[playerID].board);

      // Mise à jour du score
      if (hasMatch) {
        games[playerID].score += 10;
        updateScore(playerID, 10);
        api.sendMessage(`💥 Match trouvé ! Score: ${games[playerID].score} 🎯.\nVoici la grille :\n${boardMessage}\nRéessaie pour plus de points !`, event.threadID);
      } else {
        games[playerID].score -= 5;
        api.sendMessage(`😅 Pas de match, ton score a diminué ! Score: ${games[playerID].score}\nVoici la grille :\n${boardMessage}`, event.threadID);
      }
    }
  },

  // Affichage du tableau des scores
  onLeaderboard: async function ({ event, api }) {
    let leaderboardMessage = "🏆 Tableau des scores 🏆\n\n";
    for (let playerID in leaderboard) {
      leaderboardMessage += `${event.threadID} - Score: ${leaderboard[playerID].score} | Argent: ${leaderboard[playerID].money}€\n`;
    }

    api.sendMessage(leaderboardMessage, event.threadID);
  },

};
