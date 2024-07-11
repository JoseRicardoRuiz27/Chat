//colocamos el simbolo "$" para mostrar que es un elemento del DOM
const $ = elementoDOM => document.querySelector(elementoDOM);


const $form = $(`form`);
const $input = $(` form input`);
const $template = $(`#mensaje_template`);
const $messages = $(`ul`);
const $conteiner = $(`main`);
const $button = $(`button`);

$form.addEventListener(`submit`, (e)=>{
    e.preventDefault()
    const mensajesText = $input.value.trim

    if(mensajesText != ``){
        $input.value = ``
    }
    addMessage(mensajesText, `user`)
})

function addMessage(texto, envio){
    //utilizamos el template del html
    const clonHtml = $template.content.cloneNode(true)

    const $nuevoMensaje = clonHtml.querySelector(`.mensaje`)
    
    const $nombre = $nuevoMensaje.querySelector(`span`)
    const $texto = $nuevoMensaje.querySelector(`p`)

    $texto.textContent = texto
    $nombre.textContent = envio === 'bot' ? `GPT` : `Tu`
    $nuevoMensaje.classList.add (envio)

    $messages.appendChild($nuevoMensaje)
}