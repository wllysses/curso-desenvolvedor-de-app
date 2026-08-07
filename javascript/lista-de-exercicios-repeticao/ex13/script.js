let numeroSolicitado = Number(prompt("Digite um número: "));
let somatorio = 0;

while (numeroSolicitado !== 0) {
  somatorio += numeroSolicitado;
  numeroSolicitado = Number(prompt("Digite outro número: "));
}

alert(`Soma = ${somatorio}`);
