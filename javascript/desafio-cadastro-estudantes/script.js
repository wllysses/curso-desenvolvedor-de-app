// CRIAR O ARRAY QUE VAI SALVAR OS ESTUDANTES
let estudantes = [];

// PEDIR AO USUÁRIO A OPÇÃO DESEJADA
let opcoesUsuario = prompt(
  "Selecione uma das opções abaixo: \n1 - Cadastrar um novo estudante\n2 - Listar todos os estudantes\n3 - Pesquisar por nome\n4 - Mostrar apenas aprovados\n5 - Remover um estudante pelo índice\n0 - Sair do sistema",
);

while (opcoesUsuario !== "0") {
  if (opcoesUsuario === "1") {
    // cadastrar um estudante
    const nomeEstudante = prompt("Digite o nome do estudante:");
    const idadeEstudante = Number(prompt("Digite a idade do estudante:"));
    const mediaEstudante = Number(prompt("Digite a média do estudante"));

    estudantes.push({
      nomeEstudante,
      idadeEstudante,
      mediaEstudante,
    });
  } else if (opcoesUsuario === "2") {
    alert(JSON.stringify(estudantes, null, 2));
  } else if (opcoesUsuario === "3") {
    const nome = prompt("Digite o nome do estudante:");

    if (nome === "") {
      alert("Digite o nome desejado.");
    } else {
      const estudanteFiltrado = estudantes.find(function (estudante) {
        return estudante.nomeEstudante === nome;
      });

      alert(JSON.stringify(estudanteFiltrado, null, 2));
    }
  }

  opcoesUsuario = prompt(
    "Selecione uma das opções abaixo: \n1 - Cadastrar um novo estudante\n2 - Listar todos os estudantes\n3 - Pesquisar por nome\n4 - Mostrar apenas aprovados\n5 - Remover um estudante pelo índice\n0 - Sair do sistema",
  );
}

alert("Programa encerrado.");
