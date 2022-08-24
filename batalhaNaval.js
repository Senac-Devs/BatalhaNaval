const prompt = require("prompt-sync")();
let modelBombas = require ("./logicaBombas.js");
let logica = require("./logicaDeVisualizacao.js");
let posicionar = require("./posicionarEmbarcaçoes.js");
let vitoria =  require("./logicaDeVitoria.js");

function iniciaJogo() {
  let querJogar = logica.apresentacao();
  if (querJogar){
    let tabuleiroJorge = logica.geraTabuleiro();
    tabuleiroJorge = posicionar.Funcionamento(tabuleiroJorge);
    let tabuleiroAlberto = logica.geraTabuleiro();
    tabuleiroAlberto = posicionar.Funcionamento(tabuleiroAlberto);
    jogar(tabuleiroJorge, tabuleiroAlberto)
  }
}
function jogar(tabuleiroJorge, tabuleiroAlberto){
  let ganhou = false;
  let entrada;
  let acertou;
  while (!ganhou){
    console.clear()
    console.log("jogador 1")
    console.table(tabuleiroJorge)
    entrada = prompt("Onde deseja posicionar a bomba? ")
    let [linha1, coluna1] = posicionar.transformaCordenada(entrada)
    acertou = modelBombas.lancarBombas(tabuleiroAlberto, linha1, coluna1);   
    console.clear() 
    
    if(acertou) {
      console.log("Parabéns, você acertou uma embarcação.")
      tabuleiroAlberto[linha1][coluna1] = "*";
      if (vitoria.vitoria(tabuleiroAlberto)){
        ganhou = true
        console.log("!!Parabens voce ganhou!!")
        prompt("Enter para jogar de novo")
        continue;
      }
    } else {
      console.log("Você não acertou a embarcação.")
      tabuleiroAlberto[linha1][coluna1] = "X";
    }
    prompt("jogador 2 precione enter")
    console.clear()
    console.log("jogador 2")
    console.table(tabuleiroAlberto)
    entrada = prompt("Onde deseja posicionar a bomba? ")
    let [linha2, coluna2] = posicionar.transformaCordenada(entrada)
    acertou = modelBombas.lancarBombas(tabuleiroJorge, linha2, coluna2);
    console.clear()    
    
    if(acertou) {
      console.log("Parabéns, você acertou uma embarcação.")
      tabuleiroJorge[linha2][coluna2] = "*";
      if (vitoria.vitoria(tabuleiroJorge)){
        ganhou = true
        console.log("!!Parabens voce ganhou!!")
        prompt("Enter para jogar de novo")
        continue;
      }
    } else {
      console.log("Você não acertou a embarcação.")
      tabuleiroJorge[linha2][coluna2] = "X";
    }
    prompt("jogador 1 precione enter")
  }
  
}




// modulo de chamada para o index.js
module.exports = {
  "exportadorIniciaJogo": iniciaJogo
}
logica.logicaVisualizacao();
  