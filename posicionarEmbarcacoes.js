const prompt = require("prompt-sync")();

var tamanhoNavio = ""
let coordenada = ""
let linha = ""
let coluna = ""
let direcao = ""
let num = 1
var tabela = [
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
];

jogadorUm= [
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
];
jogadorDois= [
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~'],
];


function NavioX() { // escolha do tipo de navio
  console.log(" Jogador" + num)
  console.log("Esses são seus navios:\n 1 - Navio pequeno = <> \n 2 - Navio Médio   = <=>\n 3 - Navio Grande  = <==> \n\n Qual deseja posicionar?\n");
  tamanhoNavio = prompt("Escolha o tipo de navio -> ")

  let check = true
    
  while (check){
  if (tamanhoNavio == "1" || tamanhoNavio == "2" || tamanhoNavio == "3"){
    tamanhoNavio = tamanhoNavio
    check = false
    verticalHorizontal()
  } else
    tamanhoNavio = prompt("Escolha o tipo de navio 1, 2 ou 3 ")
    check = true

    }
  }

  function verticalHorizontal() { // escolhe a direcao do navio Vertical/Horizontal
    console.clear()
    console.table(jogadorUm)
    console.log("\n Como deseja posicionar o navio :")
    console.log("\n h ou H = Horizontal")
    console.log(" Exemplo   = <=> ")
    console.log("\n v / V = Vertical")
    console.log(" Exemplo   = ʌ ")
    console.log("           = ǁ ")
    console.log("           = v \n")  

    var ckvh = true

    while (ckvh) {
    direcao = prompt(" Posicionar o Navio na V-ertical ou H-orizontal -> ")
    if (direcao == "h" || direcao == "H" || direcao == "v" || direcao == "V") {
      direcao = direcao
      linhaColuna()      
      } else
      direcao = prompt(" O Navio ira ficar na V-ertical ou H-orizontal -> ")
        ckvh = true    
      }
    }

  function linhaColuna() {
        escolhaLinha()


    function escolhaLinha() {
      console.table(jogadorUm)

      console.log("\nO tipo de navio e " + tamanhoNavio+".")

      if (direcao == "h" || direcao == "H"){
        console.log("\nE voce escolheu posicionar na Horizontal.")
        } else
        console.log("\nE voce escolheu posicionar na Vertical.")
        
        if (tamanhoNavio==1) {
        console.log("Apartir do ponto escolhido mais 1 posição será utilizada.")
      } else if (tamanhoNavio==2){
        console.log("Apartir do ponto escolhido mais 2 posição será utilizada.")
      } else 
      console.log("Apartir do ponto escolhido mais 3 posição será utilizada.")


      linha = prompt("Escolha a linha  0, 1, 2, 3, ou 4: ->");

      var ckh = true //valida as opcoes de entrada na linha
      while (ckh) {
        if (linha == "0" || linha == "1" || linha == "2" || linha == "3" || linha == "4") {
          linha = linha
          ckh = false
          escolhaColuna()
      } else {
        linha = parseInt(prompt("Opção errada - linha   0, 1, 2, 3, ou 4: ->"));
        ckh = true
      }
      }
    }

    function escolhaColuna() {
      
      coluna = parseInt(prompt("Escolha a coluna 0, 1, 2, 3, ou 4: ->"));
      
      var ckv = true //valida as opcoes de entrada na coluna
      while (ckv) {
        if (coluna == "0" || coluna == "1" || coluna == "2" || coluna == "3" || coluna == "4") {
          coluna = coluna
          ckv = false
          validaBarcoLinaColuna()
        } else {
        coluna = parseInt(prompt("Opção errada - linha  0, 1, 2, 3, ou 4: ->"));
        ckv = true
      }
    }  
    }
  }

function validaBarcoLinaColuna (){
  // valida barco na horizontal
  if (direcao == "h"|| direcao == "H") {
    if (tamanhoNavio == "1" && coluna != "4" ){
      tabelaJogador()
    } else if (tamanhoNavio == "2" && coluna != "3" ){
      tabelaJogador()
    } else if (tamanhoNavio == "3" && coluna != "2" ){
      tabelaJogador()
    } else
    console.clear
    console.log ("As opções de coluna escolhida não comporta o navio")
    linhaColuna()
  } else // valida barco na vertical
  if (tamanhoNavio == "1" && linha != "4" ){
    tabelaJogador()
  } else if (tamanhoNavio == "2" && linha != "3" ){
   tabelaJogador()
  } else if (tamanhoNavio == "3" && linha != "2" ){
   tabelaJogador()
  } else
  console.clear
  console.log ("As opções de linha escolhida não comporta o navio")
  linhaColuna()
}

  
function tabelaJogador(){


  if (direcao == "h"|| direcao == "H") {

    if (tamanhoNavio == "1") {
      jogadorUm[linha][coluna++] = "<"
      jogadorUm[linha][coluna] = ">"
      exibir()

    } else if (tamanhoNavio == "2") {
      jogadorUm[linha][coluna++] = "<"
      jogadorUm[linha][coluna++] = "="
      jogadorUm[linha][coluna] = ">"
      exibir()

      } else
      jogadorUm[linha][coluna++] = "<"
      jogadorUm[linha][coluna++] = "="
      jogadorUm[linha][coluna++] = "="
      jogadorUm[linha][coluna++] = ">"
      exibir()

      }

    
  
function exibir(){
  console.log("tipo de Navio.... " + tamanhoNavio)
  console.log("direcao.......... " + direcao)
  console.log("linha............ " + linha)
  console.log("coluna........... " + coluna)
  console.table(jogadorUm)
  NavioX()
}

}
  
  
 /// inicio de jogo ///

  NavioX()

  


// let posicionar = require ("./posicionarEmbarcaçoes.js");
// posicionar.Posicionamento(tab, tamanhoNavio);

// Por RenatoTonelli 22jun-1600 - criando uma simples chamada para apresentacao do jogo
module.exports = {
  "posicionar":NavioX
}
