const prompt = require("prompt-sync")();
const tamanhoNavio = [ [ 'P', 2 ], [ 'M', 3 ], [ 'G', 4 ] ];
let coordenada;
let tabela;
function Tabela() {
  let tabela = [];
  for (let h = 0; h < 5; h++) {
    tabela.push([]);
    for (let v = 0; v < 5; v++) {
      tabela[h][v] = "~";
    };
  };
  console.table(tabela);
  return tabela;
};
function Coordenada(coordenada) {
  let linha;
  let info = true;
  let coluna;
  let direçao;
  while (info) {
    console.log("Esses são seus navios:\nPequeno: <>\nMédio: <=>\nGrande:<==>\nEles serão posicionados nessa mesma ordem.\n\n");
    console.log("Onde deseja posicionar?");
    coordenada = prompt("Letras (Maiúsculas) primeiro!");
    coordenada = coordenada.split("");
    coluna = parseInt(coordenada[1]);
    console.log("Vertical ou Horizontal");
    direçao = prompt("V para vertical e H para horizontal: ");
    if (coluna < 0 || coluna > 4) {
      console.log("Coordenada inválida, tente novamente!");
      continue;
    }
    if (coordenada[0] == "A") {
      linha = 0;
      break;
    }
    else if (coordenada[0] == "B") {
      linha = 1;
      break;
    }
    else if (coordenada[0] == "C") {
      linha = 2;
      break;
    }
    else if (coordenada[0] == "D") {
      linha = 3;
      break;
    }
    else if (coordenada[0] == "E") {
      linha = 4;
      break;
    }
    else {
      console.log("Coordenada inválida, tente novamente!");
      continue;
    };
  };
  return [linha, coluna, direçao];
};
function Navios (tab, tamanhoNavio, X) {

  Posicionamento(tab, tamanhoNavio, 0);

  Posicionamento(tab, tamanhoNavio, 1);

  Posicionamento(tab, tamanhoNavio, 2);
}
function Posicionamento(tab, tamanhoNavio, X) {
  let jogando = true;
  while (jogando) {
    let [linha, coluna, direçao] = Coordenada(coordenada);
    if (direçao == H 
      && tamanhoNavio[X][1] + coluna >! 5) {
     for (let c = 0; c < tamanhoNavio[X][1]; c++) {
      if (c == 0) {
      tabela[linha][coluna] = "<";
      }
      else if (c == tamanhoNavio[X][1] - 1) {
        tabela[linha][coluna + c] = ">";
      }
     else { tabela[linha][coluna + c] = "="; }
     };
    }
    else {
      console.log("Tente novamente!\nVocê não pode colocar um navio na horizontal nesta posição!")
      continue;
    };
    if (direçao == V 
      && tamanhoNavio[X][1] + linha >! 5) {
      for (let c = 0; c < tamanhoNavio[X][1]; c++) {
        if (c == 0) {
        tabela[linha][coluna] = "ʌ";
        }
        else if (c == tamanhoNavio[X][1] - 1) {
        tabela[linha + c][coluna] = "v";
        }
        else { tabela[linha + c][coluna] = "ǁ"; }
      };
    }
    else {
      console.log("Tente novamente!\nVocê não pode colocar um navio na vertical nesta posição!")
      continue;
    };
  };
};
tabela = Tabela();
tabela = Navios()
console.table(tabela);
// tabela = Tabela();
// console.table(tabela);
tabela = Posição()
console.table(tabela);

// let posicionar = require ("./posicionarEmbarcaçoes.js");
// posicionar.Posicionamento(tab, tamanhoNavio);

// Por RenatoTonelli 22jun-1600 - criando uma simples chamada para apresentacao do jogo
