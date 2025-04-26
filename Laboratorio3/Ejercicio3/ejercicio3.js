const fechaActual = new Date();
const anioActual = fechaActual.getFullYear();
let aniversarioArequipa = new Date(anioActual, 7, 15); 
const tiempoFaltante = aniversarioArequipa - fechaActual;
const diasFaltantes = Math.ceil(tiempoFaltante / (1000 * 60 * 60 * 24)); 

document.getElementById("diasFaltantes").innerHTML = diasFaltantes;