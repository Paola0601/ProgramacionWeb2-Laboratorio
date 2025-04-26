const linkDelMeet=document.getElementById("linkMeet");
const boton=document.getElementById("boton");
boton.addEventListener("click", mostrarLink);
function mostrarLink(){
document.getElementById("codigo").innerHTML=linkDelMeet.value;}