const fechaActual=new Date();
const diaActual=fechaActual.getDay();
const dias=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
const nombreDelDia=dias[diaActual];
document.getElementById("prueba").innerHTML=nombreDelDia;
