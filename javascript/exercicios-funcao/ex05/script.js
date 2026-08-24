function validarLogin(usuario, senha) {
  const USUARIO_CORRETO = "admin";
  const SENHA_CORRETA = 1234;

  if (USUARIO_CORRETO === "admin" && SENHA_CORRETA === 1234) {
    console.log("Login realizado com sucesso!");
  } else {
    console.log("Usuário ou senha inválidos!");
  }
}

validarLogin("admin", 1234);
