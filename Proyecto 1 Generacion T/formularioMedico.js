var Enviar_Formulario = document.getElementById('boton').value;

function nombre() {
    var nombre = document.getElementById('nombre').value;
    if (isNaN(nombre)) {
        return true;
    } else {
        return false;
    }
}

function email() {
    var expresion = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    var email = document.getElementById('email').value;
    if (expresion.test(email)) {
        return true;
    } else {
        return false;
    }
}


function telefono() {
    var expresion = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    var telefono = document.getElementById('telefono').value;
    if (expresion.test(telefono)) {
        return true;
    } else {
        return false;
    }
}

function mensaje() {
    /*var expresion = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    var expresion = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;*/
    var mensaje = document.getElementById('mensaje').value;
    if (isNaN(mensaje)) {
        return true;
    } else {
        return false;
    }
}

function validoCampos(){
    var esCorrecto = true;
    var mErr = "Corrija los siguientes campos: \n";
    if (!nombre()) {
        mErr = mErr + "- Nombre \n";
        esCorrecto = false;
    }

    if (!email()) {
        mErr = mErr + "- email \n";
        esCorrecto = false;
    }

    if (!telefono()) {
        mErr = mErr + "- Teléfono \n";
        esCorrecto = false;
    }

    if (!mensaje()) {
        mErr = mErr + "- mensaje \n";
        esCorrecto = false;
    }
    
    if (esCorrecto == false) {
        alert(mErr);
    } else {
        alert('Los datos ingresados en el Formulario se han guardado exitosamente.');
    }
}