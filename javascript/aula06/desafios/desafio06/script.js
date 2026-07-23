// ENTRADA DE DADOS
const nomeCliente = prompt("Digite o seu nome: ");
const idadeCliente = Number(prompt("Digite a sua idade: "));
const quantidadeIngressos = Number(
  prompt("Informe a quantidade de ingressos desejados: "),
);
const VALOR_INGRESSO = 30;
let percentualDesconto = null;
let totalSemDesconto = quantidadeIngressos * VALOR_INGRESSO;
let valorDesconto = percentualDesconto * VALOR_INGRESSO;
let valorFinal = totalSemDesconto - valorDesconto;

// VERIFICACOES
if (idadeCliente <= 12) {
  percentualDesconto = 0.5;
} else if (idadeCliente > 12 && idadeCliente < 18) {
  percentualDesconto = 0.2;
} else {
  percentualDesconto = 0;
}

document.write(`Cliente: ${nomeCliente} / Idade: ${idadeCliente} anos / Quantidade de ingressos: ${quantidadeIngressos} / Valor sem desconto: R$${totalSemDesconto} / Desconto aplicado: R$${valorDesconto} / Valor final: R$${valorFinal}
`);
