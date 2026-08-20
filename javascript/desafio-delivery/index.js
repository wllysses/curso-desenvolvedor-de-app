function calcularSubTotal(preco, quantidade) {
  return preco * quantidade;
}

function aplicarDesconto(subtotal, desconto) {
  return subtotal * (desconto / 100);
}

function aplicarTaxaEntrega(taxa) {
  return taxa;
}

function obterValorFinal(subtotal, desconto, taxa) {
  let valorFinal = (subtotal - desconto) + taxa;
  return valorFinal;
}

const subtotal = calcularSubTotal(100, 2);
const desconto = aplicarDesconto(subtotal, 10);
const taxa = aplicarTaxaEntrega(5);
const total = obterValorFinal(subtotal, desconto, taxa);

console.log({
  valorSubtotal: subtotal,
  valorDesconto: desconto,
  valorTaxa: taxa,
  valorFinal: total
});
