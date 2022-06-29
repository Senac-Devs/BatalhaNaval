let tamanhoNavio;
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
function NavioX(tamanhoNavio) {
  info = true;
  console.log("Esses são seus navios:\nPequeno: XX\nMédio: XXX\nGrande:XXXX\nQual deseja posicionar?\n");
  while (info) {
    tamanhoNavio = prompt("Utilize as iniciais para chamá-los(P, M, G)");
    if (tamanhoNavio == "P") {
      tamanhoNavio = 2;
      break;
    }
    else if (tamanhoNavio == "M") {
      tamanhoNavio = 3;
      break;
    }
    else if (tamanhoNavio == "G") {
      tamanhoNavio = 4;
      break;
    }
    else {
      console.log("Tamanho inválido, tente novamente!")
      continue;
    };
  };
  console.log(tamanhoNavio);
  return tamanhoNavio;
};
function Coordenada(coordenada) {
  let linha;
  let info = true;
  let coluna;
  let direçao;
  while (info) {
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
    if (tab[linha][coluna] != "~") {
        console.log("Posição já utilizada!\nEscolha outro local!"
      continue;
        }
    if (direçao == "H") {
      if (coluna + tamanhoNavio - 1 <= 4) {
        for (let i = 0; i < tamanhoNavio; i++) {
          tab[linha][coluna] = "X";
          tab[linha][coluna + i] = "X";
        }
        break;
      }
      else {
        console.log("Tente novamente!\nVocê não pode colocar um navio na horizontal nesta posição!")
        continue;
      };
    }
    else if (direçao == "V") {
      if (linha + tamanhoNavio - 1 <= 4) {
        for (let i = 0; i < tamanhoNavio; i++) {
          if (i == 1) {
            tab[linha][coluna] = ""
          }
          tab[linha + i][coluna] = "X";
        };
        break;
      }
      else {
        console.log("Tente novamente!\nVocê não pode colocar um navio na vertical nesta posição!")
        continue;
      };
    }
    else {
      console.log("Direção inválida!\nTente novamente!")
    };
  };
  return tab;
};
tabela = Tabela();
tamanhoNavio = NavioX(tamanhoNavio);
tabela = Posicionamento(tabela, tamanhoNavio);
console.table(tabela);