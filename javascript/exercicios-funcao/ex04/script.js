function verificarMaioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

const verificacao = verificarMaioridade(20);
console.log(verificacao);
