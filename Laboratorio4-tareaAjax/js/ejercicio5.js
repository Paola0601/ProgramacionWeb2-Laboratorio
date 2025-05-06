google.charts.load("current", { packages: ["corechart"] });

document.addEventListener("DOMContentLoaded", function () {
 fetch("data.json").then(respuesta) => {
  if(!respuesta.ok) {
   throw new Error("Error al cargar los datos del data.JSON");    
  }
   return respuesta.json();
 }






});
