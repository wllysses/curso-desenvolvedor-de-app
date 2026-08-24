function calcular(a, b, operacao) {
  let resultado = 0;

  if (operacao === "soma") {
    resultado = a + b;
  } else if (operacao === "subtrair") {
    resultado = a - b;
  } else if (operacao === "multiplicar") {
    resultado = a * b;
  } else if (operacao === "dividir") {
    resultado = a / b;
  } else {
    console.log("Informe uma operação válida.");
  }

  return resultado;
}

console.log(calcular(10, 5, "multiplicar"));
