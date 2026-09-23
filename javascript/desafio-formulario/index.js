const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const role = document.querySelectorAll("input[type=radio]");
const seniority = document.querySelector("select");
const tecnologies = document.querySelectorAll("input[type=checkbox]");
const comment = document.querySelector("textarea");

let user = {}

// lógica para pegar o valor dos inputs radio
role.forEach((item) => {
  item.addEventListener("click", (e) => {
    const element = e.target;
    if(element.checked) {
      user.cargo = element.value;
    }
  });
});

// lógica para pegar o valor dos inputs checkbox
tecnologies.forEach((item) => {
  item.addEventListener("change", () => {
    const checkeds = document.querySelectorAll("input[type=checkbox]:checked");
    const techs = Array.from(checkeds).map((element) => element.value);
    user.tecnologias = techs;
    //console.log(techs);
  });
});



form.addEventListener("submit", (e) => {
  e.preventDefault();

  user.nome = firstName.value;
  user.sobreNome = lastName.value;
  user.email = email.value;
  user.senioridade = seniority.value;
  user.comentario = comment.value;

  console.log(user);
});