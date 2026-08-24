function calcularDesconto(preco, percentual) {
  let valorDesconto = preco * (percentual / 100);
  let valorFinal = preco - valorDesconto;

  return valorFinal;
}

console.log(calcularDesconto(200, 10));
