let numeroUno = document.getElementById('numeroUno');
let numeroDos = document.getElementById('numeroDos');
let boton = document.getElementById('btn');
let resultado = document.getElementById('resultado')
let infoUno = numeroUno.value
let infoDos = numeroDos.value

boton.addEventListener('click',() => {
    let suma = parseFloat(infoUno) + parseFloat(infoDos);
    resultado.innerHTML = 'el resultado de la suma es' + suma
})




/* function sumarNumeros() {
    // Obtener los valores de los campos de entrada

    
    // Calcular la suma
    let resultado = numeroUno + numeroDos;

    boton 
    
    // Mostrar el resultado en el párrafo con id "resultado"
    document.getElementById('resultado').textContent = 
        `La suma de ${numeroUno} con ${numeroDos} es ${resultado}`;
}

sumarNumeros() */