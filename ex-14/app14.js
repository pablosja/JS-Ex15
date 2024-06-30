
function esPrimo(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultado.innerText = "Por favor, introduce un número válido.";
        return;
    }

    if (esPrimo(numero)) {
        resultado.innerText = `El número ${numero} es primo.`;
    } else {
        resultado.innerText = `El número ${numero} no es primo.`;
    }
}


document.getElementById('verificar').onclick = verificarPrimo;