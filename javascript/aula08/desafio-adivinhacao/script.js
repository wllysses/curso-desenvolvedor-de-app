const numeroAleatorio = Math.floor(Math.random() * 10);
let numeroEscolhido = Number(prompt("Informe um número entre 0 e 10:"));

while (numeroAleatorio !== numeroEscolhido) {
  alert("Você errou. Tente novamente.");

  numeroEscolhido = Number(prompt("Informe outro número entre 0 e 10:"));
}

alert(
  `Parabéns! Você acertou! O número escolhido foi ${numeroEscolhido} e o número sorteado pelo programa foi ${numeroAleatorio}`,
);
