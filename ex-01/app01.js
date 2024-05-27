//Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga "Hello Javascript"
//Texto -
//renderiza un h1 en navegador
//Dado que me encuentro en la página html
//cuando se renderiza
//entonces veo el título Hello Javascript

const hello = 'Hello Javascript'
const divApp = document.querySelector('#app01')

function renderTitle(title) {
    divApp.innerHTML = 
        `<h1>${title}</h1>`
}

renderTitle(hello)
