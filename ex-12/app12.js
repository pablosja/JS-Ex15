function calcularDivisor() {
    const numero = document.getElementById('show').value; // Corregir 'Value' a 'value'

    if (numero.trim() === '') { // Cambiar ' ' a '' y usar trim() para eliminar espacios
        alert('Introduce un número válido');
        return;
    }

    const num = parseInt(numero);
    if (isNaN(num) || num <= 0) {
        alert('Introduce un número mayor que cero');
        return;
    }

    const divisores = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }

    const resultado = `El número ${num} es divisible por ${divisores.join(', ')}.`;
    document.getElementById('result').innerHTML = resultado;
}