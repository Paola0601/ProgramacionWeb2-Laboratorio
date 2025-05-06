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
      const regionesFiltradas = datos.filter(region => region.region !== "Lima" && region.region !== "Callao");

      const fechas = regionesFiltradas[0].confirmed.map(d => d.date);
      const fechasMap = new Map();

    
      fechas.forEach(fecha => {
        fechasMap.set(fecha, { fecha });
      });

      regionesFiltradas.forEach(region => {
        const nombre = region.region;
        const confirmados = region.confirmed.map(d => parseInt(d.value));

  
        const crecimientoDiario = confirmados.map((valor, i) => {
          if (i === 0) return 0;
          return valor - confirmados[i - 1];
        });


        region.confirmed.forEach((dia, i) => {
          const fecha = dia.date;
          fechasMap.get(fecha)[nombre] = crecimientoDiario[i];
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
          title: "Crecimiento diario de casos confirmados (sin Lima y Callao)",
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
