
document.addEventListener("DOMContentLoaded", function() {
    const listaRegiones=document.getElementById("Lista_de_regiones");
    const peticion = new XMLHttpRequest();
    peticion.open("GET", "data.json", true);

    peticion.onload = function () {
        if (peticion.status === 200) {
            const datosDeDataJson = JSON.parse(peticion.responseText);
            const regionesSet = new Set();

             datosDeDataJson.forEach(regiones => {
                if (regiones.region) {
                regionesSet.add(regiones.region);
                }
              });

            const regiones = Array.from(regionesSet).sort();

              regiones.forEach(region => {
              const li = document.createElement("li");
              li.textContent = region;
              listaRegiones.appendChild(li);
             });
         } else {
              listaRegiones.innerHTML = "<li>Error al cargar los datos</li>";
        }
    };

  peticion.onerror = function () {
    listaRegiones.innerHTML = "<li>Error de conexión</li>";
  };

  peticion.send();
});