const prompt = require("prompt-sync")();
module.exports = {
  "RodarBombas":RodarBombas
}

function bombas(tabuleiro, linha, coluna) {
    let acertou = true;
    if (tabuleiro[linha][coluna] == "~") {
        acertou = false

    } else { acertou = true }
    
    return acertou
    
}

function RodarBombas (tabuleiro) { 
    console.table(tabuleiro)
    let linha = prompt("Digite a linha: ")
    let coluna = prompt("Digite a coluna:")
    
   let acertou = bombas(tabuleiro, linha, coluna);
    if (acertou) {
        console.log("Parte do navio acertada!")
    } else {
     console.log("Nenhuma embarcação atingida")
    }
}
    
    // var navio1 = 2;
    // var navio2 = 3;
    // var navio3 = 4;
    // var jogada;
    // var acertou = 0;
    // var foiAfundado = false;
    
    // while (!foiAfundado) {
    //     jogada = prompt(bombas);
    //     if (jogada) {
    //         coordenadas == ~
    //             console.log("Nenhuma embarcação atingida")
    //     } else if (jogada) {
    //         jogada == ">" || jogada == "<" || jogada == "=" || jogada == "="|| jogada == "v" ||jogada == "ʌ" ||
    //             console.log("Parte do navio acertada!")
    //         jogada = jogada + 1;
    //     }
    
    //     if (jogada == navio1 || jogada == navio2 || jogada == navio3) {
    //         alert("acerte mais um quadro!");
    //         acertou = acertou + 1;
    //         if (acertou == 3) {
    //             foiAfundado = true;
    //             alert("navio totalmente afundado!");
    //         }
    
    //     }
    // }