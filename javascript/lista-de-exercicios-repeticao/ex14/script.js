let numeroSolicitado = Number(prompt("Digite um número: "));
let somatorio = numeroSolicitado;

for (let i = 1; i <= 4; i++) {
  numeroSolicitado = Number(prompt("Digite outro número: "));
  somatorio += numeroSolicitado;
}

alert(`O resultado da soma dos cinco números digitados foi ${somatorio}`);
