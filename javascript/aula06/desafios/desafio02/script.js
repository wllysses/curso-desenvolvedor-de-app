const nomeUsuario = prompt("Digite seu nome:");
const idadeUsuario = Number(prompt("Digite sua idade:"));
let eMaiorDeIdade = null;

if (!nomeUsuario || !idadeUsuario) {
  alert("Por favor, informe todos os dados.");
} else {
  // verificar se ele é maior ou menor de idade
  if (idadeUsuario >= 18) {
    eMaiorDeIdade = true;
  } else {
    eMaiorDeIdade = false;
  }

  alert(
    `Seu nome é ${nomeUsuario}, você tem ${idadeUsuario} anos e é ${eMaiorDeIdade ? "maior de idade" : "menor de idade"}.`,
  );
}
