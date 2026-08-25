function calcularFrete(valorCompra, cidade) {
  let valorFrete = null;

  if (valorCompra >= 200) {
    valorFrete = 0;
  } else {
    switch (cidade) {
      case "Recife":
        valorFrete = 10;
        break;
      case "Olinda":
        valorFrete = 15;
        break;
      case "Jaboatão":
        valorFrete = 20;
        break;
      default:
        valorFrete = 30;
    }
  }

  return `O valor do frete será de R$${valorFrete}.`;
}

const frete = calcularFrete(150, "Recife");
console.log(frete);
