let tabuleiro = []

function logicaVisualizacao() { 
  let tabuleiro = []
for (let i = 0; i < 5; i++) {
  tabuleiro.push([])
   for (let j = 0; j < 5; j++) {
    tabuleiro[i].push("~")
// console.clear()
  }
}

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
  "apresentaLogica":logicaVisualizacao
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
