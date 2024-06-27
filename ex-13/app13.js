
function obtenerDivisores(numero) {
    const num = parseInt(numero);
    if (isNaN(num) || num <= 0) {
        alert('Introduce un número mayor que cero');
        return [];
    }

    const divisores = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }

    return divisores;
}


function calcularDivisoresComunes() {
    const numero1 = document.getElementById('show1').value.trim();
    const numero2 = document.getElementById('show2').value.trim();

    if (!numero1 || !numero2) {
        alert('Introduce números válidos en ambos campos');
        return;
    }

    const divisores1 = obtenerDivisores(numero1);
    const divisores2 = obtenerDivisores(numero2);

    if (divisores1.length === 0 || divisores2.length === 0) {
        return;
    }

    const divisoresComunes = divisores1.filter(value => divisores2.includes(value));

    const resultado = `Los divisores comunes de ${numero1} y ${numero2} son: ${divisoresComunes.join(', ')}.`;
    document.getElementById('result').innerHTML = resultado;
}