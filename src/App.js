const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");
const gen = document.querySelector("#genero-input");
form.addEventListener("submit", (event) => {
  var sms="Hola ";
  var generoSaludo ="Señor ";
  if(edad.value>18){
    if(gen.value == "Femenino" ){
      generoSaludo ="Señora ";
    }
    sms= sms+generoSaludo;
  }
  alert(sms + nombre.value)
  
});

