let games = {}; 

function checkWinner(board) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; 
    }
  }

  return null; 
}

function isBoardFull(board) {
  return board.every((cell) => cell !== null);
}

function displayBoard(board) {
  let display = "";
  for (let i = 0; i < 9; i++) {
    display += board[i] ? board[i] : "🔳";
    display += (i + 1) % 3 === 0 ? "\n" : " ";
  }
  return display.replace(/⚪/g, "⚪").replace(/🔴/g, "🔴"); 
}

function makeBotMove(board, currentPlayer) {
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = currentPlayer === "⚪" ? "🔴" : "⚪";
      if (checkWinner(board)) {
        return;
      }
      board[i] = null; 
    }
  }

  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = currentPlayer === "⚪" ? "⚪" : "🔴";
      if (checkWinner(board)) {
        board[i] = "🔴"; 
        return;
      }
      board[i] = null; 
    }
  }

  const emptyCells = board.reduce((acc, cell, index) => {
    if (cell === null) {
      acc.push(index);
    }
    return acc;
  }, []);

  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const botMove = emptyCells[randomIndex];
    board[botMove] = currentPlayer === "⚪" ? "🔴" : "⚪";
  }
}

function resetGame(playerID) {
  games[playerID] = {
    board: Array(9).fill(null),
    currentPlayer: "⚪"
  };
}

module.exports = {
  config: {
    name: "ttt",
    aliases: ["tictactoe"],
    version: "1.0",
    author: "XxGhostxX",
    category: "game",
  },

  onStart: async function ({ event, api }) {
    const playerID = event.senderID;

    if (!games[playerID] || isBoardFull(games[playerID].board) || checkWinner(games[playerID].board)) {
      resetGame(playerID);
    }

    const introMessage = "Reply box by number\n𝑇𝑢 𝑒𝑠 '⚪' 𝑒𝑡 𝑙𝑒 𝑏𝑜𝑡 𝑒𝑠𝑡 '🔴'.";
    api.sendMessage(introMessage, event.threadID, event.messageID);

    const boardMessage = displayBoard(games[playerID].board);
    api.sendMessage(boardMessage, event.threadID, event.messageID);
  },

  onChat: async function ({ event, api, args }) {
    const playerID = event.senderID;

    if (!games[playerID]) {
      api.sendMessage("Tu n'as pas de partie en cours. Tape !ttt pour commencer.", event.threadID);
      return;
    }

    const position = parseInt(args[0]);

    if (isBoardFull(games[playerID].board) || checkWinner(games[playerID].board)) {
      resetGame(playerID);
    }

    if (isNaN(position) || position < 1 || position > 9 || games[playerID].board[position - 1] !== null) {
      const errorMessage = "Tu sais pas jouer à ça ? Essaie encore... 🤦‍♂️";
      api.sendMessage(errorMessage, event.threadID);
      return;
    }

    games[playerID].board[position - 1] = "⚪";

    const tauntMessages = [
      "Bravo, tu as joué... mais ça ne changera rien. 😏",
      "C'était une blague, non ? Haha, moi aussi je pourrais faire mieux les yeux fermés. 👀",
      "Tu me fais pitié avec ce mouvement... T'as déjà pensé à abandonner ? 🤔",
      "La façon dont tu joues, c'est limite une performance artistique... mais j'aimerais pas te voir gagner. 😂",
      "C'est tout ce que tu as ? Franchement, t'as de la chance que je sois gentil avec toi. 😎",
      "Essaie encore, je vais juste t'écraser de toute façon. 🥱",
      "Sérieusement ? C'est la meilleure que tu puisses faire ? C'est ridicule. 😆",
    ];

    const tauntMessage = tauntMessages[Math.floor(Math.random() * tauntMessages.length)];
    api.sendMessage(tauntMessage, event.threadID);

    makeBotMove(games[playerID].board, games[playerID].currentPlayer);

    const winner = checkWinner(games[playerID].board);
    let responseMessage = displayBoard(games[playerID].board);

    if (winner) {
