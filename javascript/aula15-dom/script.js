const texto = document.getElementById("texto");

function adicionarEstilo() {
  texto.classList.add("paragrafo");
}

function removerEstilo() {
  texto.classList.remove("paragrafo");
}

const divResultado = document.getElementById("resultado");

divResultado.innerHTML =
  "<a href='resultado.html'>Clique e acesse a página de resultado</a>";
