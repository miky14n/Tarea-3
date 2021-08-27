const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input")

form.addEventListener("submit", (event) => {
  
  if(edad.value<18){
    alert("Hola " + nombre.value);
  }
  else{
    if(edad.value>18){
      
      alert("Hola Señor@ " + nombre.value);
    }
  }
  
});

