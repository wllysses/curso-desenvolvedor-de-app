// OBJETOS
const aluno = {
  nome: "Maria",
  idade: 16,
  curso: "Informática",
  filar: function() {
    console.log("Filei. Estou desapontado comigo mesmo.")
  },
  estaCursando: true,
  disciplinas: {
    nome: "Português",
    codigo: 1
  },
  hoobies: ["Jogar Frifas", "Dormir", "Ler", "Programar", "Comer"]
};

aluno.nome = "Ester";
aluno.media = 7.0;

console.log({
  nomeAluno: aluno.nome,
  cursoAluno: aluno.curso,
  mediaAluno: aluno.media
});