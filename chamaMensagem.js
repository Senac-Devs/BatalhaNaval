function msgInstrucao(){
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
}


function msgAcertou(){
    console.log ("Acertou navio!")
}


function msgAgua(){
    console.log ("Não acertou nada!")
}

function msgBomba(){
    console.log ("Acertou a bomba!")
}

function msgVencer(){
    console.log ("Parabéns você venceu!")
}

module.exports = {
    "msgInstrucao":msgInstrucao
  }

  module.exports = {
    "msgAcertou":msgAcertou
  }