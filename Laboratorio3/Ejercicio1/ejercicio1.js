const fechaActual=new Date();
document.getElementById("prueba").innerHTML=fechaActual.toLocaleDateString("es-ES", {year: "numeric", month: "2-digit", day: "2-digit"});
