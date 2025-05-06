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
const encabezado=["Fecha", ...regionesAcomparar];
const datosComparacion=[encabezado];
Array.from(fechas.values()).forEach(fila => {
    const filaCompleta = [fila.fecha];
    regionesSeleccionadas.forEach(nombre => {
      filaCompleta.push(fila[nombre] || 0);
    });
    dataArray.push(filaCompleta);
  });

  google.charts.setOnLoadCallback(function () {
    const data = google.visualization.arrayToDataTable(dataArray);
    const options = {
      title: "Comparación de regiones (casos diarios confirmados)",
      curveType: "function",
      legend: { position: "bottom" }
    };
    const chart = new google.visualization.LineChart(document.getElementById("grafico-comparativo"));
    chart.draw(data, options);
  });
})

}
 });






});
