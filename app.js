import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";


//colocamos el simbolo "$" para mostrar que es un elemento del DOM
const $ = elementoDOM => document.querySelector(elementoDOM);

const $form = $(`form`);
const $input = $(` form input`);
const $template = $(`#mensaje_template`);
const $messages = $(`ul`);
const $main = $(`main`);
const $button = $(`button`);
const $info = $(`small`)
const MODELO_SELECCIONADO = `gemma-2b-it-q4f32_1-MLC-1k`
const motor = await CreateMLCEngine(
    MODELO_SELECCIONADO,
    {
        initProgressCallback: (info) =>{
            $info.textContent = `${info.text}%`
            if (info.progress === 1){
                $button.removeAttribute(`dosabled`)
            }
        }
    }
)


$form.addEventListener(`submit`, (e)=>{
    e.preventDefault()
    const mensajesText = $input.value.trim()

    if(mensajesText !== ``){
        $input.value = ``
    }
    addMessage(mensajesText, `user`)
    $button.setAttribute(`disabled`, true)
    
    setTimeout(() =>{
        addMessage(`Hola, aqui tu chat`, `bot`)

        $button.removeAttribute(`disabled`)
    }, 2000)
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

    $main.scrollTop = $main.scrollHeight
}