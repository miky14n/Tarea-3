const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");
const gen = document.querySelector("#genero-input");
form.addEventListener("submit", (event) => {
  const generoSaludo ="Señor ";
  const mensaje="Hola ";
  
  if(edad.value>18){
    if(gen.value == "Femenino" || gen.value == "femenino"){
      generoSaludo ="Señora ";
    }
    mensaje= mensaje+generoSaludo;
  }
  alert(mensaje.value + nombre.value);
  
});

