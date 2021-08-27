const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");
const gen = document.querySelector("#genero-input");
const idi =document.querySelector("#Idioma")

/*function tiipoSaludo( hrs){
  var tiipoSaludos= "Buenas Noches "; 
  if(hora>0 && hora<12){
    tiipoSaludos= "Buenas Dias ";
  }
  else if(hora>11 && hora<19){
    tiipoSaludos= "Buenas tardes ";
  }
  return tiipoSaludos;
}*/
form.addEventListener("submit", (event) => {
  var sms="Hola ";
  var generoSaludo ="Señor ";
  var hoy= new Date();
  var hora= hoy.getHours();
  var tiipoSaludo= "Buenas Noches "; 
  if(hora>0 && hora<12){
    tiipoSaludo= "Buenas Dias ";
  }
  else if(hora>11 && hora<19){
    tiipoSaludo= "Buenas tardes ";
  }
  if(edad.value>18){
    if(gen.value == "Femenino" ){
      generoSaludo ="Señora ";
    }
    sms= sms+generoSaludo;
  }
  alert(sms +tiipoSaludo + nombre.value )
});

