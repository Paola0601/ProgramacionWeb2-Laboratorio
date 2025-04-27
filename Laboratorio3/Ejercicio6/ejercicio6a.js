 const texto=getElementById("palabra");

 const boton=document.getElementById("boton");
 boton.addEventListener("click", mostrarBotones);

document.getElementById("demo").style.fontSize = "35px";

mostrarBotones(){
    botonAumeentarTamanio();
    botonDisminuirTamanio();
    botonCambiarColor();
}
botonAumentarTamanio(){
    const botonAumentar=document.createElement("button");
    botonAumentar.textContent="Aumentar Tamaño";
    botonAumentar.addEventListener("click", aumentarTamanio);
    document.body.appendChild(botonAumentar);
}
botonDisminuirTamanio(){
    const botonDisminuir=document.createElement("button");
    botonDisminuir.textContent="Disminuir Tamaño";
    botonDisminuir.addEventListener("click", disminuirTamanio);
    document.body.appendChild(botonDisminuir);
}
botonCambiarColor(){
    const botonCambiar=document.createElement("button");
    botonCambiar.textContent="Cambiar Color";
    botonCambiar.addEventListener("click", cambiarColor);
    document.body.appendChild(botonCambiar);
}
disminuirTamanio(){
    const texto=document.getElementById("texto");
    let tamanioActual=window.getComputedStyle(texto).fontSize;
    tamanioActual=parseFloat(tamanioActual);
    texto.style.fontSize=(tamanioActual-2)+"px";
}
