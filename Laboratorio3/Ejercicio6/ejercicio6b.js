function calcular() {

    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;
    let resultado = '';

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado = "Ingrese ambos números";
    } else {
        switch (operacion) {
            case 'suma':
                resultado = numero1 + numero2;
                break;
            case 'resta':
                resultado = numero1 - numero2;
                break;
            case 'multiplicacion':
                resultado = numero1 * numero2;
                break;
            case 'division':
                resultado = numero2 !== 0 ? numero1 / numero2 : "Error: División entre 0";
                break;
            case 'potencia':
                resultado = Math.pow(numero1, numero2);
                break;
            case 'and':
                resultado = (numero1 !== 0) && (numero2 !== 0);
                break;
            case 'or':
                resultado = (numero1 !== 0) || (numero2 !== 0);
                break;
            case 'bitwise_and':
                resultado = numero1 & numero2;
                break;
            case 'bitwise_or':
                resultado = numero1 | numero2;
                break;
            case 'bitwise_xor':
                resultado = numero1 ^ numero2;
                break;
            case 'left_shift':
                resultado = numero1 << numero2;
                break;
            case 'right_shift':
                resultado = numero1 >> numero2;
                break;
            default:
                resultado = "Operación no válida";
        }
    }

    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}


document.getElementById('boton').addEventListener('click', calcular);