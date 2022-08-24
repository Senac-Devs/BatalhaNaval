function vitoria(tabela) {
  for (l = 0; l < tabela.length; l++) {
    for (c = 0; c < tabela[l].length; c++) {
      if (tabela[l][c] !== '~' && tabela[l][c] !== '*' && tabela[l][c] !== 'X') {
        return false;
      }
    }
  }
  return true
}
module.exports = {
  "vitoria": vitoria
}