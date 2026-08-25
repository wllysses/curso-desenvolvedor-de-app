function verificarAcesso(tipoUsuario) {
  let mensagem = null;

  if (tipoUsuario === "admin") {
    mensagem = "Acesso total liberado.";
  } else if (tipoUsuario === "editor") {
    mensagem = "Você pode criar e editar conteúdos.";
  } else if (tipoUsuario === "usuario") {
    mensagem = "Você possui acesso limitado.";
  } else {
    mensagem = "Tipo de usuário inválido.";
  }

  return mensagem;
}

const acesso = verificarAcesso("admin");
console.log(acesso);
