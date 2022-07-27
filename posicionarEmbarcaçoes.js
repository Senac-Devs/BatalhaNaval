const { geraTabuleiro } = require("./logicaDeVisualizacao");
const prompt = require("prompt-sync")();
const tamanhoNavio = [2, 3, 4];
let tabela = geraTabuleiro();

function Coordenada(tabela) {
  console.log(tabela);
  let coordenada;
  let linha;
  let coluna;
  let info = true;
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
      linha = parseInt(0);
      break;
    }
    else if (coordenada[0] == "B") {
      linha = parseInt(1);
      break;
    }
    else if (coordenada[0] == "C") {
      linha = parseInt(2);
      break;
    }
    else if (coordenada[0] == "D") {
      linha = parseInt(3);
      break;
    }
    else if (coordenada[0] == "E") {
      linha = parseInt(4);
      break;
    }
    else {
      console.log("Coordenada inválida, tente novamente!");
      continue;
    };
  };
  return [linha, coluna, coordenada];
};

function Navios (tabela, coluna, tamanhoNavio,) {
  
  tabela = Posicionamento(tabela, coluna, tamanhoNavio, 0);
  console.table(tabela);
  tabela = Posicionamento(tabela, coluna, tamanhoNavio, 1);
  console.table(tabela);
  tabela = Posicionamento(tabela, coluna, tamanhoNavio, 2);
  
  return tab;
}
function Posicionamento(tabela, coluna, tamanhoNavio, X) {
  let direcao;
  let jogando = true;
  while (jogando) {
    console.log("Vertical ou Horizontal");
    direcao = prompt("V para vertical e H para horizontal: ");
    if (direcao == "V" || direcao =="v") {
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
    if (direcao == "H" || direcao == "h") {
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
  };
  return [tabela, direcao];
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
  "Coordenada":Coordenada(),
  "Posicionar":Posicionamento()
}