
    const formulario = document.getElementById("formulario");
    const contenidoDeLaTabla = document.getElementById("contenidoDeLaTabla");
    const resultadoSuma = document.getElementById("resultado");

    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario
      crearTabla();
   
    });

  let numeros=[];
      
    function crearTabla()
    {const cantidad=parseInt(document.getElementById("cantidad").value);
       
     const tabla=document.createElement("table");
     const fila=document.createElement("tr");
      
     numeros=[];
     for(let i=0;i<cantidad;i++)
     { const numero=Math.floor(Math.random()*100)+1;
      numeros.push(numero);
       const celda=document.createElement("td");
    celda.textContent=numero;
    fila.appendChild(celda);
     }
      tabla.appendChild(fila);
      contenidoDeLaTabla.appendChild(tabla);

        agregarBotonCalcularSuma();
    }; 
    
    
    
    function calcularSuma()
    { numeros=[];
      let suma=0;
      for(let i=0;i<numeros.length;i++)
      {suma+=numeros[i];}
      resultadoSuma.innerHTML="La suma es: "+suma;
    }
    function agregarBotonCalcularSuma()
    { const botonCalcularSuma=document.createElement("button");
      botonCalcularSuma.textContent="Calcular Suma";
      botonCalcularSuma.addEventListener("click",calcularSuma);
      contenidoDeLaTabla.appendChild(botonCalcularSuma);
    };
    function mostrarResultado()
    { };
    function limpiarTodo()
    {contenidoDeLaTabla.innerHTML="";
      resultadoSuma.innerHTML="";
    };