/* DOMContentLoaded, ejecuta la función una vez cargada la página */
document.addEventListener('DOMContentLoaded', function() {
    /* selectores */
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMsg = document.querySelector('#mensaje')
    const form = document.querySelector('#formulario')


    /* event listeners */
    eventListeners()
    function eventListeners()
    {
        // evento blur, ejecuta cuando sales del campo
        // evento input, ejecuta cada que vez que se teclea
        // target, es el elemento en donde se registra el evento
        // value, retorna el valor que se ingreso en el input
        inputEmail.addEventListener('blur', validarInput) 
        inputAsunto.addEventListener('blur', validarInput) 
        inputMsg.addEventListener('blur', validarInput) 
    }


    /* funciones */
    function validarInput(e)
    {
        limpiarAlerta(e.target.parentElement) // ejecuta cuando hay texto en el campo

        if (e.target.value.trim() === '') { // trim, borra los espacios de ambos lados
            mostrarAlerta(`Falta completar el campo ${e.target.id}`, e.target.parentElement)
            return // detiene la ejecución del código
        }
        
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement)
            return
        }
    }
    
    function mostrarAlerta(msg, referencia)
    {
        if (!referencia.lastElementChild.classList.contains('alerta')) {
            const error = document.createElement('P')
            error.textContent = msg
            error.className = 'bg-red-600 p-2 text-white text-center font-bold alerta'
            referencia.appendChild(error) // agrega un nuevo elemento debajo de cada input
        }
    }

    function limpiarAlerta(referencia)
    {
        const alerta = referencia.querySelector('.alerta')
        if (alerta) alerta.remove()
    }

    function validarEmail(email)
    {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const isEmail = regex.test(email)
        return isEmail
    }
})