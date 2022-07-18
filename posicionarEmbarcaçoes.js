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
function Posicionamento(tab, tamanhoNavio) {
  let jogando = true;
  while (jogando) {
    let [linha, coluna, direçao] = Coordenada(coordenada);
    if (tamanhoNavio[0][1] + coluna >! 5) {
      if 
    }
      }
      else {
        console.log("Tente novamente!\nVocê não pode colocar um navio na horizontal nesta posição!")
        continue;
      };
    };
    if ((linha != 4)
      || (tamanhoNavio <= 3 && linha != 3)
      || (tamanhoNavio != 4 && linha <= 2)) {
      if (direçao == "V") {
        for (let i = 0; i < tamanhoNavio; i++) {
          tab[linha][coluna] = "X";
          tab[linha + i][coluna] = "X";
        };
        break;
      }
      else {
        console.log("Tente novamente!\nVocê não pode colocar um navio na vertical nesta posição!")
        continue;
      };
    };
  };
  return tab;
};

tabela = Tabela();
tabela = Posicionamento(tabela, tamanhoNavio);
console.table(tabela);
// tabela = Tabela();
// console.table(tabela);
tabela = Posição()
console.table(tabela);

// let posicionar = require ("./posicionarEmbarcaçoes.js");
// posicionar.Posicionamento(tab, tamanhoNavio);

// Por RenatoTonelli 22jun-1600 - criando uma simples chamada para apresentacao do jogo
