// EVENTO CLICK
const botao = document.querySelector("button");

botao.addEventListener("click", function (evento) {
  alert("Botão clicado!");
  console.log(evento);
});

// EVENTO INPUT
const nomeUsuario = document.querySelector("input");

nomeUsuario.addEventListener("input", function () {
  console.log(nomeUsuario.value);
});
