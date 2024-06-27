function esDivisible(num) {
    let divisibles = [];

    if (num % 2 === 0) {
        divisibles.push(2);
    }
    if (num % 3 === 0) {
        divisibles.push(3);
    }
    if (num % 5 === 0) {
        divisibles.push(5);
    }
    if (num % 7 === 0) {
        divisibles.push(7);
    }

    if (divisibles.length === 0) {
        return 'El número no es divisible por 2, 3, 5 ni 7';
    } else {
        return `El número es divisible por los siguientes números: ${divisibles.join(', ')}`;
    }
}

let numero = parseInt(prompt("Por favor, ingresa un número:"));

let resultado = esDivisible(numero);
console.log(resultado);

document.body.innerHTML = resultado;
