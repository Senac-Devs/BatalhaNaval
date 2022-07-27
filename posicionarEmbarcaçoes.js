const prompt = require("prompt-sync")();
const tamanhoNavio = [2, 3, 4];
let coordenada;
let tabela;

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
    console.log(coordenada)
    coluna = parseInt(coordenada[1]);
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

  return tab;
}
function Posicionamento(tabela, tamanhoNavio, X) {
  let jogando = true;
  while (jogando) {
    let [linha, coluna, direçao] = Coordenada(coordenada);
    console.log(coluna, tamanhoNavio, direçao, X);
    if ((direçao == "H" || direçao == "h")
      && tamanhoNavio[X] + coluna <= 5) {
     for (let c = 0; c < tamanhoNavio[X]; c++) {
      if (c == 0) {
      tabela[linha][coluna] = "<";
      }
      else if (c == tamanhoNavio[X]- 1) {
        tabela[linha][coluna + c] = ">";
      }
     else { tabela[linha][coluna + c] = "="; }
     };
    }
    else {
      console.log("Tente novamente!\nVocê não pode colocar um navio na horizontal nesta posição!")
      continue;
    };
    if (direçao == "V" || direçao =="v"
      && tamanhoNavio[X] + tabela[linha] >! 5) {
      for (let c = 0; c < tamanhoNavio[X]; c++) {
        if (c == 0) {
        tabela[linha][coluna] = "ʌ";
        }
        else if (c == tamanhoNavio[X] - 1) {
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
  return tabela;
};
tabela = Tabela();
tabela = Navios(tabela, tamanhoNavio)
console.table(tabela);
// tabela = Tabela();
// console.table(tabela);
tabela = Posição()
console.table(tabela);

// let posicionar = require ("./posicionarEmbarcaçoes.js");
// posicionar.Posicionamento(tab, tamanhoNavio);

// Por RenatoTonelli 22jun-1600 - criando uma simples chamada para apresentacao do jogo
