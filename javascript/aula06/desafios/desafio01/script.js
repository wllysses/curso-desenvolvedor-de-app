// SOLICITAR DOIS NÚMEROS
const primeiroNumero = Number(prompt("Informe o primeiro número:"));
const segundoNumero = Number(prompt("Informe o segundo número: "));

if (primeiroNumero === 0 || segundoNumero === 0) {
  alert("Você não digitou nada.");
} else {
  // Calcular soma, subtração, multiplicação e divisão.
  const soma = primeiroNumero + segundoNumero;
  const subtracao = primeiroNumero - segundoNumero;
  const multiplicacao = primeiroNumero * segundoNumero;
  const divisao = primeiroNumero / segundoNumero;

  // Exibir os resultados
  document.write(
    `Resultados: Soma - ${soma} / Subtração - ${subtracao} / Multiplicação - ${multiplicacao} / Divisão - ${divisao}`,
  );
}
