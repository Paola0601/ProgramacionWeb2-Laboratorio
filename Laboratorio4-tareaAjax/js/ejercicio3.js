document.addEventListener("DOMContentLoaded", function() {
    const listaRegiones=document.getElementById("Top-10");
    const peticion = new XMLHttpRequest();
    peticion.open("GET", "data.json", true);

    peticion.onload = function () {
        if (peticion.status === 200) {
            const datosDeDataJson = JSON.parse(peticion.responseText);
            //En este ejercicio creamos un arreglo para almacenar los casos totales por region
            let todosLosCasos=[];
            datosDeDataJson.forEach(regiones =>{
              let nombre=regiones.region;
              let fechaCantidad=regiones.confirmed;
              let casosTotales=fechaCantidad.reduce((total,fecha) =>
                  total+parseInt(fecha.value), 0);
              //Guardamos el nombre de la region y los casos totales en un objeto
              todosLosCasos.push({nombre:nombre,total: casosTotales});
           
             });
             //Ordenamos el arreglo de forma decendente
             todosLosCasos.sort((masCasos, menosCasos) => menosCasos.total - masCasos.total);
             //Creamos un for para mostrar los primeros 10 casos totales en el HTML
             for(let i=0;i<10;i++){
             const ol = document.createElement("ol");
             ol.textContent = todosLosCasos[i].nombre + ": " + todosLosCasos[i].total;
             listaRegiones.appendChild(ol);}
         } else {
              listaRegiones.innerHTML = "<li>Error al cargar los datos</li>";
         }
    };

  peticion.onerror = function () {
    listaRegiones.innerHTML = "<li>Error de conexión</li>";
  };

  peticion.send();
});