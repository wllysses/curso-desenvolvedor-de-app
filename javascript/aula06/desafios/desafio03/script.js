const nomeCliente = prompt("digite seu nome:");
const valorConta = Number(prompt("informe o valor da compra:"));
const possuiCupom = confirm("você possui cupom de desconto?");
let valorDescontoCupom = null;
let valorDesconto = null;

if (possuiCupom === true) {
  valorDescontoCupom = 0.05;
} else {
  valorDescontoCupom = 0;
}

if (valorConta >= 200) {
  valorDesconto = 0.2;
} else if (valorConta >= 100) {
  valorDesconto = 0.1;
} else {
  valorDesconto = 0;
}

let valorDescontoTotal = valorDescontoCupom + valorDesconto;

alert(
  `nome do cliente: ${nomeCliente}/ valor original: R$${valorConta}/percentual de desconto: ${valorDescontoTotal * 100}/ desconto aplicado: R$${valorConta * valorDescontoTotal}/ valor final: R$${valorConta - valorConta * valorDescontoTotal}`,
);
