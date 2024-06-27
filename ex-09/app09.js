function esDivisible(num) {
    if (num % 2 === 0) {
        return 'El número es divisible por 2';
    } else if (num % 3 === 0) {
        return 'El número es divisible por 3';
    } else if (num % 5 === 0) {
        return 'El número es divisible por 5';
    } else if (num % 7 === 0) {
        return 'El número es divisible por 7';
    } else {
        return 'El número no es divisible por 2, 3, 5 ni 7';
    }
}

let numero = parseInt(prompt("Por favor, ingresa un número:"));

let resultado = esDivisible(numero);
console.log(resultado);

document.body.innerHTML = resultado;