const nomeAluno = prompt("Informe seu nome:");
const idadeAluno = prompt("Informe sua idade:");
const turmaAluno = prompt("Informe sua turma:");
const nota1Aluno = Number(prompt("Informe a primeira nota:"));
const nota2Aluno = Number(prompt("Informe a segunda nota::"));
const nota3Aluno = Number(prompt("Informe a terceira nota:"));
let mediaAluno = null;
let classificacaoAluno = null;

if (!nomeAluno || !idadeAluno || !nota1Aluno || !nota2Aluno || !nota3Aluno) {
  alert("Você precisa informar todos os dados.");
} else {
  mediaAluno = ((nota1Aluno + nota2Aluno + nota3Aluno) / 3).toFixed(1);

  if (mediaAluno < 4) {
    classificacaoAluno = "Reprovado";
  } else if (mediaAluno >= 4 && mediaAluno < 7) {
    classificacaoAluno = "Recuperaçao";
  } else {
    classificacaoAluno = "Aprovado";
  }

  alert(
    `Nome: ${nomeAluno}\nIdade: ${idadeAluno}\nTurma: ${turmaAluno}\nMédia: ${mediaAluno}\nResultado: ${classificacaoAluno}`,
  );
}
