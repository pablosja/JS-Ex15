
function mostrarDivisores(numero) {
    if (numero <= 0) {
        console.log("Por favor, ingresa un número positivo y distinto de cero.");
        document.getElementById('result').innerHTML = "Por favor, ingresa un número positivo y distinto de cero.";
        return;
    }

    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    console.log(`Los divisores de ${numero} son: ${divisores.join(', ')}`);
    document.getElementById('result').innerHTML = `Los divisores de ${numero} son: ${divisores.join(', ')}`;
}

let numero = parseInt(prompt("Por favor, ingresa un número para encontrar sus divisores:"));
if (!isNaN(numero)) {
    mostrarDivisores(numero);
} else {
    document.getElementById('result').innerHTML = "Por favor, ingresa un número válido.";
}