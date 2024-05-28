
let button = document.getElementById('btn')

function suma(joker, riddler) {
    let resultado = parseInt(joker) + parseInt(riddler);
    return resultado
}

function render(jok, rid, score) {
    const divApp = document.getElementById('app')
    const txt = `La suma de ${jok} + ${rid} es ${score}`
    divApp.innerHTML = txt
}

button.addEventListener('click', () => {
    let fig1 = parseInt(document.getElementById('numeroUno').value)
    let fig2 = parseInt(document.getElementById('numeroDos').value)
    render(fig1,fig2,suma(fig1,fig2))
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