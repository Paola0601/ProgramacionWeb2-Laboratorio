google.charts.load("current", { packages: ["corechart"] });

document.addEventListener("DOMContentLoaded", function () {
  const select1 = document.getElementById("region1");
  const select2 = document.getElementById("region2");
  const boton = document.getElementById("btnMostrar");
  const contenedorGrafico = document.getElementById("grafico-usuario");

  let datosGlobales = [];

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

  boton.addEventListener("click", function () {
    const regionA = select1.value;
    const regionB = select2.value;

    if (regionA === regionB) {
      contenedorGrafico.innerText = "Seleccione dos regiones diferentes.";
      return;
    }

    const seleccionadas = [regionA, regionB];
    const fechasMap = new Map();

    seleccionadas.forEach(nombreRegion => {
      const region = datosGlobales.find(r => r.region === nombreRegion);

      if (region) {
        region.confirmed.forEach(dia => {
          const fecha = dia.date;
          const casos = parseInt(dia.value);

          if (!fechasMap.has(fecha)) {
            fechasMap.set(fecha, { fecha });
          }

          fechasMap.get(fecha)[nombreRegion] = casos;
        });
      }
    });

    const encabezado = ["Fecha", ...seleccionadas];
    const dataArray = [encabezado];

    Array.from(fechasMap.values()).forEach(fila => {
      const filaCompleta = [fila.fecha];
      seleccionadas.forEach(nombre => {
        filaCompleta.push(fila[nombre] || 0);
      });
      dataArray.push(filaCompleta);
    });

    const data = google.visualization.arrayToDataTable(dataArray);
    const options = {
      title: "Comparación entre dos regiones seleccionadas por el usuario",
      curveType: "function",
      legend: { position: "bottom" }
    };

    const chart = new google.visualization.LineChart(contenedorGrafico);
    chart.draw(data, options);
  });

}).catch(error => {
      document.getElementById("grafico-usuario").innerText = error.message;
 });



