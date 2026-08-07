let palavraUsuario = prompt("Informe uma palavra: ");

while (palavraUsuario !== "fim") {
  alert("Você errou. Tente novamente.");
  palavraUsuario = prompt("Informe outra palavra: ");
}

alert(`Você digitou a palavra correta. Programa encerrado.`);
