const prompt = require("prompt-sync")();

function posicionar() {
  let posicionar = require("./posicionarEmbarcacoes.js");
  posicionar.posicionamento();
  
}

function logicaVisualizacao() { // RenatoTonelli 22jun1647 - funcao criada para ser chamado no jogo

let tabuleiro = []
for (let i = 0; i < 5; i++) {
  tabuleiro.push([])
  for (let j = 0; j < 5; j++) {
    tabuleiro[i].push("~")
  }
}
console.log("     Água          = ~ ")
console.log(" 1 - Navio pequeno = <> ")
console.log("                   = ʌ ")
console.log("                   = v ")
console.log(" 2 - Navio Médio   = <=> ")
console.log("                   = ʌ ")
console.log("                   = ǁ ")
console.log("                   = v ")
console.log(" 3 - Navio Grande  = <==> ")
console.log("                   = ʌ ")
console.log("                   = ǁ ")
console.log("                   = ǁ ")
console.log("                   = v ")
console.log("     Bomba         = * ")
console.table(tabuleiro)
posicionar()
}



// Por RenatoTonelli 22jun-1651 - criando uma simples chamada para apresentacao do jogo
module.exports = {
  "apresentaLogica":logicaVisualizacao
}