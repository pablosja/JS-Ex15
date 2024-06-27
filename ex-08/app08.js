function esVocal(caracter) {
    return 'aeiouAEIOU'.includes(caracter);
}

function contarVocales(frase) {
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;

    let fraseMinusculas = frase.toLowerCase();

    for (let i = 0; i < fraseMinusculas.length; i++) {
        let caracter = fraseMinusculas[i];
        if (caracter === 'a') {
            contadorA++;
        } else if (caracter === 'e') {
            contadorE++;
        } else if (caracter === 'i') {
            contadorI++;
        } else if (caracter === 'o') {
            contadorO++;
        } else if (caracter === 'u') {
            contadorU++;
        }
    }

    return {
        'a': contadorA,
        'e': contadorE,
        'i': contadorI,
        'o': contadorO,
        'u': contadorU
    };
}

let frase = prompt("Por favor, ingresa una frase:");

let resultados = contarVocales(frase);

console.log(`En la frase "${frase}" las vocales aparecen de la siguiente manera:`);
console.log(`- Vocal 'a': ${resultados['a']} veces`);
console.log(`- Vocal 'e': ${resultados['e']} veces`);
console.log(`- Vocal 'i': ${resultados['i']} veces`);
console.log(`- Vocal 'o': ${resultados['o']} veces`);
console.log(`- Vocal 'u': ${resultados['u']} veces`);

let resultadoTexto = `
    En la frase "${frase}" las vocales aparecen de la siguiente manera:<br>
    - Vocal 'a': ${resultados['a']} veces<br>
    - Vocal 'e': ${resultados['e']} veces<br>
    - Vocal 'i': ${resultados['i']} veces<br>
    - Vocal 'o': ${resultados['o']} veces<br>
    - Vocal 'u': ${resultados['u']} veces
`;

document.getElementById('words').innerHTML = resultadoTexto;