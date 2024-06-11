//los inputs deben recoger números
//los números deben ser comparados al pulsar el botón
//el número que sea mayor deberá aparecer en el div de respuesta

let btn = document.getElementById('compare')

function compare(joker,twoface) {
    let higher = Math.max(joker,twoface)
    return higher
}

function render(riddler) {
    let thediv = document.getElementById('answer')
    thediv.innerHTML = `<span>El número mayor es ${riddler}</span>`
}

btn.addEventListener('click', () => {
    let no1 = document.getElementById('numb1').value
    let no2 = document.getElementById('numb2').value
    render(compare(no1,no2))
})