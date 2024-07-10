const form = document.querySelector(`form`);
const input = document.querySelector(`input`);
const template = document.querySelector(`#mensaje_template`);
const mensaje = document.querySelector(`ul`);
const conteiner = document.querySelector(`main`);
const button = document.querySelector(`button`);



form.addEventListener(`submit`, (event) =>{
    event.preventDefault()
    const mensajeTexto = input.value.trim()

    if (mensajeTexto !== "") {
        //para añadir un mensaje en el DOM
        input.value = ``
    }
    agregarMensaje(mensajeTexto, `user`)
})


function agregarMensaje(text, envio){
    //compiamos el template 
    const clonedTemplate = template.content.cloneNode(true)
    //mensaje para el template copiado
    const nuevoMensaje = clonedTemplate.querySelector(`.mensaje`)
    
    const who = nuevoMensaje.querySelector(`.span`)
    const texto = nuevoMensaje.querySelector(`.p`)
    
    texto.texContent = text
    who.texContent = envio === `bot` ? `GPT` : `Tu`
    nuevoMensaje.classList.add(envio)

    mensaje.appendChild(nuevoMensaje)
}