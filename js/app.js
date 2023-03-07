/* DOMContentLoaded, ejecuta la función una vez cargada la página */
document.addEventListener('DOMContentLoaded', function() {
    /* selectores */
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMsg = document.querySelector('#mensaje')
    const form = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    

    /* objeto de datos input */
    const objEmail = {
        email: '',
        asunto: '',
        mensaje: ''
    }


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
        btnReset.addEventListener('click', resetForm)
    }


    /* funciones */
    function validarInput(e)
    {
        limpiarAlerta(e.target.parentElement) // ejecuta cuando hay texto en el campo

        if (e.target.value.trim() === '') { // trim, borra los espacios de ambos lados
            mostrarAlerta(`Falta completar el campo ${e.target.id}`, e.target.parentElement)
            objEmail[e.target.id] = e.target.value
            comprobarObjEmail()
            return // detiene la ejecución del código
        }
        
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement)
            objEmail[e.target.id] = e.target.value
            comprobarObjEmail()
            return
        }

        objEmail[e.target.id] = e.target.value.trim().toLowerCase() // asignando valores al objeto
        comprobarObjEmail()
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

    function comprobarObjEmail()
    {
        if (Object.values(objEmail).includes('') || !validarEmail(objEmail['email'])) { // validar si hay un elemento vacío o si el email es incorrecto
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
        } else {
            btnSubmit.classList.remove('opacity-50')
            btnSubmit.disabled = false
        }
    }

    function resetForm(e)
    {
        e.preventDefault()
        objEmail.email = ''
        objEmail.asunto = ''
        objEmail.mensaje = ''
        form.reset()
        comprobarObjEmail()
    }
})