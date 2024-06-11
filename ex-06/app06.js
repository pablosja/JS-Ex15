let btn = document.getElementById('compare')

function compare(joker,twoface,penguin) {
    let higher = Math.max(joker,twoface,penguin)
    return higher
}

function render(riddler) {
    let thediv = document.getElementById('answer')
    thediv.innerHTML = `<span>El número mayor es ${riddler}</span>`
}

btn.addEventListener('click', () => {
    let no1 = document.getElementById('no1').value
    let no2 = document.getElementById('no2').value
    let no3 = document.getElementById('no3').value
    render(compare(no1,no2,no3))
})