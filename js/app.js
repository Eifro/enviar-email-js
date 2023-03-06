/* DOMContentLoaded, ejecuta la función una vez cargada la página */
document.addEventListener('DOMContentLoaded', function() {
    /* selectores */
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMsg = document.querySelector('#mensaje')


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
        if (e.target.value.trim() === '') { // trim, borra los espacios de ambos lados
            console.log('Campo vacío')
        }
    } 
})