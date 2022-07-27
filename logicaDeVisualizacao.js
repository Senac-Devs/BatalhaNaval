const prompt = require("prompt-sync")();

function geraTabuleiro(){
  let tabuleiro = []
  for (let i = 0; i < 5; i++) {
    tabuleiro.push([])
    for (let j = 0; j < 5; j++) {
      tabuleiro[i].push("\033[7;30;41m ~ \033[m")
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

  console.log("******** Jogo  ******")
  // ʌ
  console.log(" Água          =  \033[1;30;41m~\033[m")
  console.log(" Navio pequeno = \033[7;32;44m<>\033[m")
  console.log("               = ʌ ")
  console.log("               = v ")
  console.log(" Navio Médio   = \033[5;35;47m<=>\033[m")
  console.log("               = ʌ ")
  console.log("               = ǁ ")
  console.log("               = v ")
  console.log(" Navio Grande  = <==> \033[4;31;45m<==>\033[m")
  console.log("               = ʌ ")
  console.log("               = ǁ ")
  console.log("               = ǁ ")
  console.log("               = v ")
  console.log(" Bomba         =º")
  exibeTabuleiro(tabuleiro)
}
function exibeTabuleiro(tabuleiro){
  for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
      process.stdout.write(tabuleiro[i][j]+ " ")
}
process.stdout.write("\n")
  }
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
