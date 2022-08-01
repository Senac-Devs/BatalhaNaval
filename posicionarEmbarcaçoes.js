const prompt = require("prompt-sync")();
const tamanhoNavio = [2, 3, 4];
// let tabela;
function Funcionamento(tabuleiro) {
  tabuleiro = Navios(tabuleiro, tamanhoNavio);
  return tabuleiro;
}
function Coordenada(tab) {
  let linha;
  let coordenada;
  let info = true;
  let coluna;
  let direçao;
  console.log("Esses são seus navios:\nPequeno: <>\nMédio: <=>\nGrande:<==>\nEles serão posicionados nessa mesma ordem.\n");
  console.table(tab);
  console.log("Onde deseja posicionar?");
  while (info) {
    coordenada = prompt("Letras (Maiúsculas) primeiro!");
    coordenada = coordenada.split("");
    coluna = parseInt(coordenada[1]);
    if (coluna < 0 || coluna > 4) {
      console.log("Coordenada inválida, tente novamente!");
      continue;
    }
    if (coordenada[0] == "A") {
      linha = 0;
      info = false;
    }
    else if (coordenada[0] == "B") {
      linha = 1;
      info = false;
    }
    else if (coordenada[0] == "C") {
      linha = 2;
      info = false;
    }
    else if (coordenada[0] == "D") {
      linha = 3;
      info = false;
    }
    else if (coordenada[0] == "E") {
      linha = 4;
      info = false;
    }
    else {
      console.log("Coordenada inválida, tente novamente!");
      continue;
    };
  };
  console.log("Vertical ou Horizontal");
  direçao = prompt("V para vertical e H para horizontal: ");
  return [linha, coluna, direçao];
};

function Navios (tab, tamanhoNavio) {

  tab = Posicionamento(tab, tamanhoNavio, 0);
  console.table(tab);
  tab = Posicionamento(tab, tamanhoNavio, 1);
  console.table(tab);
  tab = Posicionamento(tab, tamanhoNavio, 2);
  console.table(tab);
  prompt("Esses são seus navios posicionados\nClique ENTER para passar ao próximo jogador.");
  console.clear();
  return tab;
}
function Posicionamento(tabuleiro, tamanhoNavio, X) {
  let jogando = true;
  while (jogando) {
    let [linha, coluna, direçao] = Coordenada(tabuleiro);
    if ((direçao == "H" || direçao == "h")
      && (tamanhoNavio[X] + coluna <= 5)) {
      jogando = false;
      for (let c = 0; c < tamanhoNavio[X]; c++) {
      if (c == 0) {
      tabuleiro[linha][coluna] = "<";
      }
      else if (c == tamanhoNavio[X]- 1) {
        tabuleiro[linha][coluna + c] = ">";
      }
     else { tabuleiro[linha][coluna + c] = "="; }
     };
    }
    else if ((direçao == "V" || direçao =="v")
      && (tamanhoNavio[X] + linha <= 5)
      && (tabuleiro[linha][coluna] == "~")) {
      jogando = false;
      for (let c = 0; c < tamanhoNavio[X]; c++) {
        if (c == 0) {
        tabuleiro[linha][coluna] = "ʌ";
        }
        else if (c == tamanhoNavio[X] - 1) {
        tabuleiro[linha + c][coluna] = "v";
        }
        else { tabuleiro[linha + c][coluna] = "ǁ"; }
      };
    }
    else {
      console.log("Tente novamente!\nPosição ou direção inválida!")
      continue;
    };
  };
  return tabuleiro;
};
// tabela = Tabela();
// tabela = Navios(tabela, tamanhoNavio)
// console.table(tabela);
// // tabela = Tabela();
// // console.table(tabela);
// tabela = Posição()
// console.table(tabela);

// let posicionar = require ("./posicionarEmbarcaçoes.js");
// posicionar.Posicionamento(tab, tamanhoNavio);

// Por RenatoTonelli 22jun-1600 - criando uma simples chamada para apresentacao do jogo


module.exports = {
  "Funcionamento":Funcionamento
}