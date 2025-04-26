document.getElementById("invertir").addEventListener("click",invertirPalabra);

function invertirPalabra(){

  const palabraIngresada= document.getElementById("palabraIngresada").value.trim();
  let palabraInvertida="";
  for(let i=0;i<palabraIngresada.length;i++)
  {
    palabraInvertida=palabraIngresada+palabraIngresada.charAt(i);

  }
document.getElementById("palabraInvertida").innerHTML=palabraInvertida;

}