const primeiroNumero = Number(prompt("Informe o primeiro número: "));
const segundoNumero = Number(prompt("Informe o segundo número: "));
const operacaoMatematica = prompt(
  "Qual operação matemática deseja realizar?\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão",
);
let resultadoOperacao = null;
let operacaoEscolhida = null;

if (!primeiroNumero || !segundoNumero || !operacaoMatematica) {
  alert("Todas as informações são necessárias.");
} else {
  switch (operacaoMatematica) {
    case "1":
      operacaoEscolhida = "Adição";
      resultadoOperacao = primeiroNumero + segundoNumero;
      break;
    case "2":
      operacaoEscolhida = "Subtração";
      resultadoOperacao = primeiroNumero - segundoNumero;
      break;
    case "3":
      operacaoEscolhida = "Multiplicação";
      resultadoOperacao = primeiroNumero * segundoNumero;
      break;
    case "4":
      operacaoEscolhida = "Divisão";
      resultadoOperacao = primeiroNumero / segundoNumero;
      break;
    default:
      alert("Informe um número válido.");
  }

  alert(
    `O resultado da operação de ${operacaoEscolhida} foi: ${resultadoOperacao}`,
  );
}
