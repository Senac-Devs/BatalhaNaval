const prompt = require("prompt-sync")();
let modelBombas = require ("./logicaBombas.js");
let logica = require("./logicaDeVisualizacao.js");
let posicionar = require("./posicionarEmbarcaçoes.js");

function iniciaJogo() {
  let querJogar = logica.apresentacao();
  if (querJogar){
    let tabuleiroJorge = logica.geraTabuleiro();
    tabuleiroJorge = posicionar.Funcionamento(tabuleiroJorge);
    let tabuleiroAlberto = logica.geraTabuleiro();
    tabuleiroAlberto = posicionar.Funcionamento(tabuleiroAlberto);
    modelBombas.lancarBombas();    
  }
}
// modulo de chamada para o index.js
module.exports = {
  "exportadorIniciaJogo": iniciaJogo
}
logica.apresentaLogica();
  