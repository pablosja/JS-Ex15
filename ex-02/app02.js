//Dado que accedo a la página
//Cuando se renderiza
//Entonces veo el texto: "La suma de 3 + 5 es 8"

const numb1 = 3
const numb2 = 5


function sum(num1, num2) {
    const total = num1 + num2
    return total
}

function render(num1,num2,total) {
    const divApp = document.getElementById('app')
    const txt = 'La suma de $(numb1) + $(numb2) es $(total)'
    divApp.innerHTML = txt
}

render(numb1,numb2,sum(numb1,numb2))