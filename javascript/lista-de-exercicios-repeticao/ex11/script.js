let senhaDigitada = Number(prompt("Digite uma senha: "));

while (senhaDigitada !== 1234) {
  alertg("Senha incorreta. Tente novamente.");
  senhaDigitada = Number(prompt("Digite outra senha: "));
}

alert("Senha correta!");
