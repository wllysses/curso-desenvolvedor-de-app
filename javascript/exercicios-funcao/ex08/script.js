function criarNotificacao(usuario, tipo) {
  let mensagem = null;

  if (tipo === "curtida") {
    mensagem = "alguém curtiu sua publicação!";
  } else if (tipo === "comentario") {
    mensagem = "alguém comentou em sua publicação!";
  } else if (tipo === "seguidor") {
    mensagem = "você tem um(a) novo(a) seguidor(a)!";
  } else {
    console.log("Informe um tipo de notificação válido.");
  }

  return `${usuario}, ${mensagem}`;
}

const notificacao = criarNotificacao("Wllysses", "curtida");
console.log(notificacao);
