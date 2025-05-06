google.charts.load("current", { packages: ["corechart"] });

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error("Error al cargar los datos del data.json");
      }
      return respuesta.json();
    })
    .then(datos => {
      const regionesSeleccionadas = ["Arequipa", "Puno", "Piura"];
      const fechasMap = new Map();

      regionesSeleccionadas.forEach(nombreRegion => {
        const regionDatos = datos.find(r => r.region === nombreRegion);

        if (regionDatos) {
          regionDatos.confirmed.forEach(fechaRegion => {
            const fecha = fechaRegion.date;
            const casos = parseInt(fechaRegion.value);

            if (!fechasMap.has(fecha)) {
              fechasMap.set(fecha, { fecha });
            }

            fechasMap.get(fecha)[nombreRegion] = casos;
          });
        }
      });

      const encabezado = ["Fecha", ...regionesSeleccionadas];
      const dataArray = [encabezado];

      Array.from(fechasMap.values()).forEach(fila => {
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
    .catch(error => {
      document.getElementById("grafico-comparativo").innerText = error.message;
    });
});

