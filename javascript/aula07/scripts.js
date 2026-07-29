alert(
  "1 - Domingo / 2 - Segunda / 3 - Terça / 4 - Quinta / 5 - Sexta / 6 - Sábado",
);
// ENTRADA DO DADO
const numeroSemana = prompt("Informe um número entre 1 e 7: ");

// SINTAXE
switch (numeroSemana) {
  case "1":
    document.write("Domingouuu!");
    break;
  case "2":
    document.write("Segundouuu!");
    break;
  case "3":
    document.write("Terçouuuuu!");
    break;
  case "4":
    document.write("Quartouuuu!");
    break;
  case "5":
    document.write("Quintouuuu!");
    break;
  case "6":
    document.write("Sextouuuuu!");
    break;
  case "7":
    document.write("Sabadouuuu!");
    break;
  default:
    document.write("Você digitou um número inválido.");
}
