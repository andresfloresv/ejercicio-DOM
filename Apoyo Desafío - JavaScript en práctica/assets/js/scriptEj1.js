
let btnSubmit = document.getElementById("botton");
let formas = document.getElementsByTagName("form")[0];

let nombre = document.getElementById("nombre");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");

let errorNombre = document.getElementsByClassName("errorNombre")[0];
let errorAsunto = document.getElementsByClassName("errorAsunto")[0];
let errorMensaje = document.getElementsByClassName("errorMensaje")[0];
let success = document.getElementsByClassName("resultado")[0];

let limpiarMensajes = () => {
    errorNombre.innerHTML = '';
    errorAsunto.innerHTML = '';
    errorMensaje.innerHTML = '';
    success.innerHTML = '';
}

formas.addEventListener("submit", function(event) {
    event.preventDefault();
    limpiarMensajes();
    var check = 0;
    var patron = /[a-zA-Z]/gim;
    var nom = nombre.value;
    if (nom == '') {
        errorNombre.innerHTML = 'El nombre es requerido';
    }else{
        if (!nom.match(patron)) {
            errorNombre.innerHTML = 'Escriba un nombre válido por favor (solamente letras, mayúsculas o minúsculas)';        
        }else{
            check+=1;
        }
    } 
    
    var subj = asunto.value;
    if (subj == '') {
        errorAsunto.innerHTML = 'El asunto es requerido';
    }else{
        if (!subj.match(patron)) {
            errorAsunto.innerHTML = 'Escriba un asunto válido por favor (solamente letras, mayúsculas o minúsculas)';        
        }else{
            check+=1;
        }
    } 

    var msg = mensaje.value
    if (msg=='') {
        errorMensaje.innerHTML = 'El mensaje es requerido';
        
    }else{
        if (!msg.match(patron)) {
            errorMensaje.innerHTML = 'Escriba un mensaje válido por favor (solamente letras, mayúsculas o minúsculas)';        
        }else{
            check+=1;
        }
    } 
    if (check == 3) {
        success.innerHTML = '¡¡¡Mensaje enviado con éxito!!!'  
    }
})
