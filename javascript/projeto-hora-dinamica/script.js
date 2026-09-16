const horaAtual = new Date().getHours();

const body = document.body;
const saudacao = document.querySelector("h3");
const imagem = document.getElementById("fotoPaisagem");
const periodo = document.getElementById("periodo");
const frase = document.getElementById("frase");

saudacao.textContent = `Olá. Agora são ${horaAtual} horas.`;

if (horaAtual >= 0 && horaAtual < 12) {
  body.style.backgroundColor = "#e2cd9f";
  periodo.textContent = "Manhã";
  frase.textContent = "Começando o dia com energia.";
} else if (horaAtual >= 12 && horaAtual < 18) {
  body.style.backgroundColor = "#b9846f";
  periodo.textContent = "Tarde";
  frase.textContent = "Um bom café para não dormir.";
} else {
  body.style.backgroundColor = "#515154";
  periodo.textContent = "Noite";
  frase.textContent = "Que lindas estão as estrelas.";
}
