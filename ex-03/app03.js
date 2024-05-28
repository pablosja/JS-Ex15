//Dado que el usuario se encuentra en la página con el formulario
//Cuando rellena el campo de forumulario con su nombre y valida haciendo clic en el botón "validar"
//Entonces se renderiza en pantalla el texto "Hola <nombre-de-usuario>"

//Dado que el input está vacío
//Cuando el usuario hace click en validar
//Entonces se muestra el texto "Debe introducir su nombre"

//Criterio 1
//clic de botón = evento
//recuperar el nombre de usuario
//renderizar en un contenedor html el texto "Hola <nombre-de-usuario>"

//Criterio 2
//Comprobar si el input está vacío

const inputUsername = document.getElementById('username')
const btnValidate = document.getElementById('btn-validate')
const mainBlock = document.querySelector('main')

btnValidate.addEventListener('click', () => {
    const username = inputUsername.value
    render(username)
})

function render(joker) {

    if (isEmpty(joker)) {
        mainBlock.innerHTML = `<span>Debe introducir su nombre</span>`
        return
    }
        mainBlock.innerHTML = `<span>Hola ${joker}</span>`
}

function isEmpty(riddler) {
    const stringLength = riddler.length
    return (stringLength === 0) ? true : false
}