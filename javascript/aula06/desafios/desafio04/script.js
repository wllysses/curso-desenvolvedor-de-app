const nomeUsuario = prompt("Informe seu nome:");
const idadeUsuario = prompt("Informe sua idade:");
const pesoUsuario = Number(prompt("Informe seu peso:"));
const alturaUsuario = Number(prompt("Informe sua altura:"));
let classificacaoIMC = null;

if (!nomeUsuario || !idadeUsuario || !pesoUsuario || !alturaUsuario) {
  alert("Você precisa informar todos os dados.");
} else {
  let IMC = (pesoUsuario / alturaUsuario ** 2).toFixed(2);

  if (IMC < 18.5) {
    classificacaoIMC = "Abaixo do peso";
  } else if (IMC >= 18.5 && IMC < 25) {
    classificacaoIMC = "Peso normal";
  } else if (IMC >= 25 && IMC < 30) {
    classificacaoIMC = "Sobrepeso";
  } else {
    classificacaoIMC = "Obesidade";
  }

  alert(
    `Nome: ${nomeUsuario}\nPeso: ${pesoUsuario}\nAltura: ${alturaUsuario}\nIMC: ${IMC}\nClassificação: ${classificacaoIMC}`,
  );
}
