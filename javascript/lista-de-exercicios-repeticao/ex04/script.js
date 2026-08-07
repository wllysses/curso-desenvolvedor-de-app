const numeroEscolhido = Number(prompt("Digite um número:"));

if (numeroEscolhido < 1) {
  alert("Digite um número válido.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numeroEscolhido} x ${i} = ${numeroEscolhido * i}`);
  }
}
