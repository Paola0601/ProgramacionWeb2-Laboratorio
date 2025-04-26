document.getElementById("invertir").addEventListener("click",invertirPalabra);

function invertirPalabra(){

  const palabraIngresada= document.getElementById("palabraIngresada").value.trim();
  let palabraInvertida="";
  for(let i=palabraIngresada.length-1;i>=0;i--)
  {
    palabraInvertida=palabraInvertida+palabraIngresada.charAt(i);

  }
document.getElementById("palabraInvertida").innerHTML="La palabra invertida es: "+palabraInvertida;

}