
    const formulario = document.getElementById("formulario");
    const contenidoDeLaTabla = document.getElementById("contenidoDeLaTabla");
    const resultadoSuma = document.getElementById("resultado");

    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario
      crearTabla();
    });

  
      
    function crearTabla()
    {const cantidad=parseInt(document.getElementById("cantidad").value);
       
     const tabla=document.createElement("table");
     const fila=document.createElement("tr");
      
     let numeros=[];
     for(let i=0;i<cantidad;i++)
     { const numero=Math.floor(Math.random()*100)+1;
      numeros.push(numero);
       const celda=document.createElement("td");
    celda.textContent=numero;
    fila.appendChild(celda);
     }
      tabla.appendChild(fila);
      contenidoDeLaTabla.appendChild(tabla);

    }; 
    
    
    
    function calcularSuma()
    { };
    function mostrarResultado()
    { };
    function agregarBotonSumar()
    { };
    function limpiarTodo()
    {contenidoDeLaTabla.innerHTML="";
      resultadoSuma.innerHTML="";
    };