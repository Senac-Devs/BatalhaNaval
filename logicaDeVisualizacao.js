const prompt = require("prompt-sync")();

const moduleMsg = require("./chamaMensagem.js")
function geraTabuleiro(){
  let tabuleiro = []
  for (let linha = 0; linha < 5; linha++) {
    tabuleiro.push([])
    for (let coluna = 0; coluna < 5; coluna++) {
      tabuleiro[linha].push("~")
    }
  }
  return tabuleiro
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
  let jogar = prompt("Ou so enter para nao")
  if (!jogar == "") {
    console.clear()
    return true
  } else {
    console.log(" \n !! Que pena !!")
    return false
  }
}


function logicaVisualizacao() {
  let tabuleiro = geraTabuleiro()

  moduleMsg.msgInstrucao()
  console.table(tabuleiro)
}



//Criando uma simples chamada para apresentacao do jogo
module.exports = {
  "apresentaLogica":logicaVisualizacao,
  "geraTabuleiro": geraTabuleiro,
  "apresentacao": apresentacao
}


// let tabuleiro1 = []
// for (let m = 0; m < 5; m++) {
//   tabuleiro1.push([])
//    for (let s = 0; s < 5; s++) {
//     tabuleiro1[m].push("-")
// let linha = parseFloat(prompt("Insira a linha "))
//   let coluna = parseFloat(prompt("Insira a coluna"))
//   let escolha = prompt("Insira a X ou 0")
// console.clear()
//   tabuleiro[linha][coluna] = escolha
  // console.table(tabuleiro)

// <> <=> <==>  *  o desenho
  // }
// }
//      console.table(tabuleiro1)
