const linkDelMeet=document.getElementById("linkMeet");
const boton=document.getElementById("boton");
boton.addEventListener("click", mostrarCodigo);

function mostrarCodigo(){
    const codigoFinal = sacarCodigo(); 
    document.getElementById("codigo").innerHTML = codigoFinal;
document.getElementById("codigo").innerHTML=codigoSinGuiones;}
function sacarCodigo(){
    link=linkDelMeet.value;
    const partes=link.split("/");
    const codigo=partes[partes.length-1];
    const codigoSinGuiones=sacarGuiones(codigo);
}
function sacarGuiones(codigo){
    const codigoSinGuiones=codigo.replace(/-/g,"");
    return codigoSinGuiones;
}