google.charts.load('current', { packages: ['corechart'] });

document.addEventListener("DOMContentLoaded", function () {
  const peticion = new XMLHttpRequest();
  peticion.open("GET", "data.json", true);

  peticion.onload = function () {
    if (peticion.status === 200) {
      const datos = JSON.parse(peticion.responseText);
      const arequipa = datos.find(region => region.region === "Arequipa");

      if (!arequipa) {
        document.getElementById("grafico-arequipa").innerText = "No se encontró la región Arequipa.";
        return;
      }

      const dataArray = [["Fecha", "Confirmados"]];
      arequipa.confirmed.forEach(dia => {
        dataArray.push([dia.date, parseInt(dia.value)]);
      });

      google.charts.setOnLoadCallback(function () {
        const data = google.visualization.arrayToDataTable(dataArray);

        const options = {
          title: "Casos confirmados en Arequipa (por día)",
          curveType: "function",
          legend: { position: "bottom" }
        };

        const chart = new google.visualization.LineChart(document.getElementById("grafico-arequipa"));
        chart.draw(data, options);
      });

    } else {
      document.getElementById("grafico-arequipa").innerText = "Error al cargar los datos.";
    }
  };

  peticion.onerror = function () {
    document.getElementById("grafico-arequipa").innerText = "Error de conexión.";
  };

  peticion.send();
});
