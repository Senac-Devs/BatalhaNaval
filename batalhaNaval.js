function tipoNavios() {
  let logica = require("./logicaDeVisualizacao.js");
  logica.apresentaLogica();
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
  if (!jogar == "") {
    console.clear()
    tipoNavios()
  } else console.log(" \n !! Que pena !!")
}

  function iniciaJogo() {
    apresentacao()
    // posicionar()


  }
  // modulo de chamada para o index.js
  module.exports = {
    "exportadorIniciaJogo": iniciaJogo
  }
