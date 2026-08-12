[] // colchetes
// ARRAY
const alunos = ["Welitania", "Ester", "Guilherme", "Laura", "Aquiles Javeiro", "Luiza", "Samira"];

const idades = [45, 24, 21, 16, 16, 25, 30, 65, 78, 11, 15];

alunos[4] = "Thieslânia";

// adiciona um elemento no final
alunos.push("Aquiles");

// adicionar no inicio do array
alunos.unshift("Kaique");

// remover no final
//alunos.pop();

// remover no início
//alunos.shift();


document.write(JSON.stringify(alunos, null, 2));

//length - TAMANHO

// includes
alert(alunos.includes("luiza"));

// indexOf
document.write(`<p>${alunos.indexOf("Luiza")}</p>`);

// MÉTODOS PARA PERCORRER (ITERAR) UM ARRAY
// for
for(let i = 0; i < alunos.length; i++) {
  console.log(alunos[i]);
}

// for of
for(const aluno of alunos) {
  console.log(aluno);
}

// forEach (para cada)
alunos.forEach(function (aluno, index) {
  console.log({
    aluno,
    index
  });
});

// MAP
const novasIdades = idades.map(function (idade) {
  return idade / 2;
});

//console.log(novasIdades);

// FILTER
const filtragemDeAlunos = alunos.filter(function(aluno) {
  return aluno === "Aquiles";
});

//console.log(filtragemDeAlunos);


// FIND
const buscaDeAluno = alunos.find(function(nomeAluno){
  return nomeAluno === "Samira";
});

//console.log(buscaDeAluno);

// REDUCE
const somaIdades = idades.reduce(function(total, idade) {
  return total + idade;
}, 0);

console.log(somaIdades);