const readline = require('readline');

let tabuleiro = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validarJogada(jogada) {
  // Implemente a lógica de validação de jogadas
  // Verifique se a jogada é válida e retorne true ou false
}

function moverPeca(jogada) {
  // Implemente a lógica de movimentação das peças
  // Atualize o estado do tabuleiro de acordo com a jogada
}

function exibirTabuleiro() {
  // Exiba o tabuleiro no terminal
  const pecasUnicode = {
    'r': '\u265C', // Torre preta
    'n': '\u265E', // Cavalo preto
    'b': '\u265D', // Bispo preto
    'q': '\u265B', // Rainha preta
    'k': '\u265A', // Rei preto
    'p': '\u265F', // Peão preto
    'R': '\u2656', // Torre branca
    'N': '\u2658', // Cavalo branco
    'B': '\u2657', // Bispo branco
    'Q': '\u2655', // Rainha branca
    'K': '\u2654', // Rei branco
    'P': '\u2659', // Peão branco
    ' ': ' '       // Espaço vazio
  };

  const letrasColunas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  console.log('   ' + letrasColunas.join('  ')); // Exibe as letras das colunas

  for (let i = 0; i < tabuleiro.length; i++) {
    let linha = `${8 - i} `;
    for (let j = 0; j < tabuleiro[i].length; j++) {
      const peca = tabuleiro[i][j];
      const pecaUnicode = pecasUnicode[peca];
      linha += pecaUnicode + ' ';
    }
    console.log(linha);
  }
}

// Função para obter a entrada do jogador
function obterEntrada() {
  rl.question(`Jogador ${jogador}, digite sua jogada: `, (entrada) => {
    if (validarJogada(entrada)) {
      moverPeca(entrada);
      jogador = jogador === 1 ? 2 : 1;
    } else {
      console.log('Jogada inválida! Tente novamente.');
    }
    obterEntrada(); // Chama novamente para obter a próxima jogada
  });
}

// Loop principal do jogo
let jogador = 1;
exibirTabuleiro();
obterEntrada()
