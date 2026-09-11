const botao = document.querySelector("button");

botao.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.value === "dark") {
    botao.textContent = "Claro";
    botao.style.backgroundColor = "white";
    botao.style.color = "black";
  } else {
    botao.textContent = "Escuro";
    botao.style.backgroundColor = "black";
    botao.style.color = "white";
  }
});
