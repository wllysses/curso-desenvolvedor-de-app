let num = Number(prompt("Qual a tabuada desejada? "));

let cont = 1; // i

if (num > 0) {
  while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont = cont + 1;
  }
} else {
  console.log("Tabuada invalida.");
}
