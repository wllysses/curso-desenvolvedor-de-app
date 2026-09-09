const botaoDiminuir = document.getElementById("botaoDiminuir");
const botaoAumentar = document.getElementById("botaoAumentar");
const resultado = document.getElementById("resultado");

let contador = 0;

botaoDiminuir.addEventListener("click", function () {
  if (contador < 1) {
    alert("O contador não pode ser menor que 0.");
    return;
  }
  contador = contador - 1;
  resultado.textContent = contador;
});

botaoAumentar.addEventListener("click", function () {
  contador = contador + 1;
  resultado.textContent = contador;
});
