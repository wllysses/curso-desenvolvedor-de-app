function verificarStatusPedido(status) {
  let mensagem = null;

  switch (status) {
    case "recebido":
      mensagem = "Seu pedido foi recebido!";
      break;
    case "preparando":
      mensagem = "Seu pedido está sendo preparado!";
      break;
    case "enviado":
      mensagem = "Seu pedido está a caminho!";
      break;
    case "entregue":
      mensagem = "Seu pedido foi entregue com sucesso!";
      break;
    default:
      mensagem = "Status do pedido não encontrado.";
  }

  return mensagem;
}

const pedido = verificarStatusPedido("entregue");
console.log(pedido);
