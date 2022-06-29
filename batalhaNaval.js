let modelBombas = require ("./logicaBombas.js");


function tipoNavios() {
    let logica = require("./logicaDeVisualizacao.js");
    let tabuleiro = logica.apresentaLogica();
    console.log(tabuleiro)
    return tabuleiro
}

function posicionar() {
  let posicionar = require("./posicionarEmbarcaçoes.js");
  posicionar.posicionamento();
}

function apresentacao() {
    console.log("\n         ..................................." +
    "\n           ### Jogo de Batalha Naval ####" +
    "\n         ..................................." +
    "\n         Jogo de tabuleiro de dois jogadores" +
    "\nSeu objectivo é derrubar os barcos do oponente adversário," +
    "\nganha quem derrubar todos os navios adversários primeiro." +
    "\n")
    console.log("!! Vamos Jogar !!")
    console.log("Qualquer caracter = sim")
    let jogar = prompt("Ou so enter para nao - ")
    let tabuleiro;
    if (jogar != "") {
        console.clear()
        tabuleiro = tipoNavios()
    } else {
        console.log(" \n !! Que pena !!")
    }
    return tabuleiro
}

  function iniciaJogo() {
    let tabuleiro = apresentacao()
    // posicionar()
    tabuleiro[0][0]="<"
    modelBombas.RodarBombas(tabuleiro)    

  }
  // modulo de chamada para o index.js
  module.exports = {
    "exportadorIniciaJogo": iniciaJogo
  }
