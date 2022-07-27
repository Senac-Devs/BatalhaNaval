const prompt = require("prompt-sync")();
let modelBombas = require ("./logicaBombas.js");
let logica = require("./logicaDeVisualizacao.js");
let posicionar = require("./posicionarEmbarcaçoes.js");

function iniciaJogo() {
  let querJogar = logica.apresentacao();
  if (querJogar){
    let tabuleiro = logica.geraTabuleiro()
    posicionar.Funcionamento(tabuleiro);
    // modelBombas.lancarBombas();    
  }
}
// modulo de chamada para o index.js
module.exports = {
  "exportadorIniciaJogo": iniciaJogo
}
logica.apresentaLogica();
  