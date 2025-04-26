const linkDelMeet=document.getElementById("linkMeet");
const boton=document.getElementById("boton");
boton.addEventListener("click", mostrarCodigo);

function mostrarCodigo(){
    const codigoFinal = sacarCodigo(); 
    document.getElementById("codigo").innerHTML = codigoFinal;
}
function sacarCodigo(){
    link=linkDelMeet.textContent;
    const partes=link.split("/");
    const codigo=partes[partes.length-1];
    const codigoSinGuiones=sacarGuiones(codigo);
    return codigoSinGuiones;
}
function sacarGuiones(codigo){
    const codigoSinGuiones=codigo.replace(/-/g,"");
    return codigoSinGuiones;
}