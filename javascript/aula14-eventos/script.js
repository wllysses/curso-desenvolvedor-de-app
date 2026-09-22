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

// EVENTO CHANGE
const select = document.querySelector("select");

select.addEventListener("change", function (evento) {
  console.log(evento.target.value);
});

//EVENTO SUBMIT
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const form = document.querySelector("form");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  console.log({
    email: email.value,
    senha: senha.value,
  });
});
