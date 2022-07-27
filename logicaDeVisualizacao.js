const prompt = require("prompt-sync")();

function logicaVisualizacao() { 
function geraTabuleiro(){
  let tabuleiro = []
  for (let i = 0; i < 5; i++) {
    tabuleiro.push([])
    for (let j = 0; j < 5; j++) {
      tabuleiro[i].push("~")
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


function logicaVisualizacao() { // RenatoTonelli 22jun1647 - funcao criada para ser chamado no jogo
  let tabuleiro = geraTabuleiro()

  console.log("******** Jogo  ******")
  // ʌ
  console.log(" Água          = ~ ")
  console.log(" Navio pequeno = <> ")
  console.log("               = ʌ ")
  console.log("               = v ")
  console.log(" Navio Médio   = <=> ")
  console.log("               = ʌ ")
  console.log("               = ǁ ")
  console.log("               = v ")
  console.log(" Navio Grande  = <==> ")
  console.log("               = ʌ ")
  console.log("               = ǁ ")
  console.log("               = ǁ ")
  console.log("               = v ")
  console.log(" Bomba         = * ")
  console.table(tabuleiro)
}



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
