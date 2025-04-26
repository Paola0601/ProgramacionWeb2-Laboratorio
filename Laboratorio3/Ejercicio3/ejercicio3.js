const fechaActual = new Date();
const anioActual = fechaActual.getFullYear();
let aniversarioArequipa = new Date(anioActual, 7, 15); 
//Implementamos este if para que nos ayude a evitar eerrores en el caso de que la fecha actual sea mayor a la fecha de aniversario
// de Arequipa, ya que si no lo hacemos el resultado nos daria un valor negativo.
if (aniversarioArequipa < fechaActual) {
    aniversarioArequipa.setFullYear(anioActual + 1);
  }
const tiempoFaltante = aniversarioArequipa - fechaActual;
const diasFaltantes = Math.ceil(tiempoFaltante / (1000 * 60 * 60 * 24)); 

document.getElementById("diasFaltantes").innerHTML = diasFaltantes;