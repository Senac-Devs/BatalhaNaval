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
  info = 0;
  let opçoes = [];
  console.log("Esses são seus navios:\n(Você pode posicionar um de cada)\n\nPequeno: <>\nMédio: <=>\nGrande:<==>\n\nQual deseja posicionar?\n");
  while (info < 3) {
    tamanhoNavio = prompt("Utilize as iniciais para chamá-los(P, M, G)");
    if (tamanhoNavio == "P"
        && opçoes[0] != 1) {
      tamanhoNavio = 2;
      opçoes.push[0] = 1;
      info++;
    }
    else if (tamanhoNavio == "M"
            && opçoes[1] != 1) {
      tamanhoNavio = 3;
      opçoes.push[1] = 1;
      info++;
    }
    else if (tamanhoNavio == "G"
            && opçoes[2] != 1) {
      tamanhoNavio = 4;
      opçoes.push[2] = 1;
      info++;
    }
    else {
      console.log("Tamanho inválido ou já utilizado, tente novamente!")
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
      console.log("Posição já utilizada!\nEscolha outro local!")
      continue;
    };
    if (direçao == "H") {
      if (coluna + tamanhoNavio - 1 <= 4) {
        for (let i = 0; i < tamanhoNavio; i++) {
          if (i == 0) {
            tab[linha][coluna + i] = "<"
          }
          else if (i == tamanhoNavio - 1) {
            tab[linha][coluna + i] = ">"
          }
          else { 
            tab[linha][coluna + i] = "="
          };
        };
      }
      else {
        console.log ("Tente novamente!\nVocê não pode colocar um navio na horizontal nesta posição!")
        continue;
      };
    break;
    }
    else if (direçao == "V") {
      if (linha + tamanhoNavio - 1 <= 4) {
        for (let i = 0; i < tamanhoNavio; i++) {
          if (i == 0) {
            tab[linha + i][coluna] = "ʌ"
          }
          else if (i == tamanhoNavio - 1) {
            tab[linha + i][coluna] = "v"
          }
          else { 
            tab[linha + i][coluna] = "ǁ" 
          };
        };
      }
      else {
        console.log("Tente novamente!\nVocê não pode colocar um navio na vertical nesta posição!")
        continue;
      };
        break;
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