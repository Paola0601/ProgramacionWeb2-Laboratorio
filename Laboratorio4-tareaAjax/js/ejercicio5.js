const { parse } = require("marked");

google.charts.load("current", { packages: ["corechart"] });

document.addEventListener("DOMContentLoaded", function () {
 fetch("data.json").then(respuesta) => {
  if(!respuesta.ok) {
   throw new Error("Error al cargar los datos del data.JSON");    
  }
   return respuesta.json();
}).then(datos =>{
    
    const regionesAcomparar=["Arequipa","Lima","Piura"];
    const fechas=new Map();
    regionesSeleccionadas.forEach(nombreRegion => {
        const regionDatos=datos.find(regionesSeleccionadas=>regionesSeleccionadas.region===nombreRegion);
      if(regionDatos){
        regionDatos.confirmend.forEach(fechaRegion=>{
            const fecha=fechaRegion.date;
            const casos=parseInt(fechaRegion.value);      }
           
            if (!fechasMap.has(fecha)) {
                fechasMap.set(fecha, { fecha });
              }
  
              fechasMap.get(fecha)[nombreRegion] = valor;
        });
      }
    });




}
 });






});
