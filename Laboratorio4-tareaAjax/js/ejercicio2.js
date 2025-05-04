document.addEventListener("DOMContentLoaded", function() {
    const listaRegiones=document.getElementById("casos_por_regiones");
    const peticion = new XMLHttpRequest();
    peticion.open("GET", "data.json", true);

    peticion.onload = function () {
        if (peticion.status === 200) {
            const datosDeDataJson = JSON.parse(peticion.responseText);
      
             
               
            datosDeDataJson.forEach(regiones =>{
              let nombre=datosDeDataJson.region;
              let fechaCantidad=regiones.confirmed;
              let casosTotales=fechaCantidad.reduce((total,fecha) =>
                 total+fecha,0);
            });
                            
            
              const li = document.createElement("li");
              li.textContent = nombre+casosTotales;
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