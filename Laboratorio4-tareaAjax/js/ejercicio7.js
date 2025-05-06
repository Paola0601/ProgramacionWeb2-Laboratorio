google.charts.load("current", { packages: ["corechart"] });

document.addEventListener("DOMContentLoaded", function () {
  const select1 = document.getElementById("region1");
  const select2 = document.getElementById("region2");
  const boton = document.getElementById("btnMostrar");
  const contenedorGrafico = document.getElementById("grafico-usuario");
  fetch("data.json")
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error("Error al cargar los datos del data.json");
      }
      return respuesta.json();
    })
    .then(datos => {

      datosGlobales = datos;

      datos.forEach(region => {

          const option1 = document.createElement("option");
          const option2 = document.createElement("option");

          option1.value = option1.textContent = region.region;
          option2.value = option2.textContent = region.region;

          select1.appendChild(option1);
          select2.appendChild(option2);
        
      });
    });

      const nombresRegiones = regionesFiltradas.map(r => r.region);
      const encabezado = ["Fecha", ...nombresRegiones];
      const dataArray = [encabezado];

      Array.from(fechasMap.values()).forEach(fila => {
        const filaCompleta = [fila.fecha];
        nombresRegiones.forEach(nombre => {
          filaCompleta.push(fila[nombre] || 0);
        });
        dataArray.push(filaCompleta);
      });

      google.charts.setOnLoadCallback(function () {
        const data = google.visualization.arrayToDataTable(dataArray);
        const options = {
          title: "Crecimiento de casos confirmados (excluyendo Lima y Callao)",
          curveType: "function",
          legend: { position: "bottom" }
        };

        const chart = new google.visualization.LineChart(document.getElementById("grafico-sin-lima-callao"));
        chart.draw(data, options);
      });
    })
    .catch(error => {
      document.getElementById("grafico-comparativo").innerText = error.message;
    });
});


