const inputTexto = document.getElementById("palabra");
const boton = document.getElementById("boton");
const divTexto = document.getElementById("texto");

boton.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarBotones();
});

function mostrarBotones() {
    divTexto.textContent = inputTexto.value;
    eliminarBotones(); 
    crearBotonAumentarTamanio();
    crearBotonDisminuirTamanio();
    crearBotonCambiarColor();
}

function eliminarBotones() {
    const botones = document.querySelectorAll(".boton-dinamico");
    botones.forEach((boton) => boton.remove());
}

function crearBotonAumentarTamanio() {
    const botonAumentar = document.createElement("button");
    botonAumentar.textContent = "Aumentar Tamaño";
    botonAumentar.classList.add("boton-dinamico"); 
    botonAumentar.addEventListener("click", aumentarTamanio);
    document.body.appendChild(botonAumentar);
}

function crearBotonDisminuirTamanio() {
    const botonDisminuir = document.createElement("button");
    botonDisminuir.textContent = "Disminuir Tamaño";
    botonDisminuir.classList.add("boton-dinamico"); 
    botonDisminuir.addEventListener("click", disminuirTamanio);
    document.body.appendChild(botonDisminuir);
}

function crearBotonCambiarColor() {
    const botonCambiar = document.createElement("button");
    botonCambiar.textContent = "Cambiar Color";
    botonCambiar.classList.add("boton-dinamico"); 
    botonCambiar.addEventListener("click", cambiarColor);
    document.body.appendChild(botonCambiar);
}

function aumentarTamanio() {
    const estiloTexto = window.getComputedStyle(divTexto).fontSize;
    const tamanioActual = parseFloat(estiloTexto);
    divTexto.style.fontSize = (tamanioActual + 2) + "px";
}

function disminuirTamanio() {
    const estiloTexto = window.getComputedStyle(divTexto).fontSize;
    const tamanioActual = parseFloat(estiloTexto);
    divTexto.style.fontSize = (tamanioActual - 2) + "px";
}

function cambiarColor() {
    const colores = ["red", "blue", "green", "purple", "orange"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    divTexto.style.color = colorAleatorio;
}