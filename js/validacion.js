
function validar() {
    var retornoCorreo = validarCorreo();
    var retornoContrasena = validarContrasena();
    var retornoConfirmarContrasena = validarConfirmarContrasena();
    var retornoDireccion = validarDireccion();
    var retornoTelefono = validarTelefono();
    var retornoWeb = validarWeb();
    var retornoComuna = validarComuna();
    var retornoAficiones = validarAficiones();
    
    return retornoCorreo && retornoContrasena && retornoConfirmarContrasena && retornoDireccion && retornoTelefono && retornoWeb && retornoComuna && retornoAficiones;
}


function validarCorreo() {
    var inputCorreo = document.getElementById("input-correo");
    var divErrorCorreo = document.getElementById("error-correo");
    var correo = inputCorreo.value.trim();
    if (correo === "") {
        divErrorCorreo.innerHTML = "El correo electrónico es obligatorio";
        divErrorCorreo.className = "text-danger small mt-1";
        return false;
    } else if (!validarFormatoCorreo(correo)) {
        divErrorCorreo.innerHTML = "El correo electrónico no es válido";
        divErrorCorreo.className = "text-danger small mt-1";
        return false;
    } else {
        divErrorCorreo.innerHTML = "";
        return true;
    }
}


function validarFormatoCorreo(correo) {
    var arrobaIndex = correo.indexOf("@");
    var puntoIndex = correo.lastIndexOf(".");
    return arrobaIndex > 0 && puntoIndex > arrobaIndex + 1 && puntoIndex < correo.length - 1;
}


function validarContrasena() {
    var inputContrasena = document.getElementById("input-contrasena");
    var divErrorContrasena = document.getElementById("error-contrasena");
    var contrasena = inputContrasena.value.trim();
    if (contrasena === "") {
        divErrorContrasena.innerHTML = "La contraseña es obligatoria";
        divErrorContrasena.className = "text-danger small mt-1";
        return false;
    } else if (!validarFormatoContrasena(contrasena)) {
        divErrorContrasena.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres y contener al menos un dígito y una letra";
        divErrorContrasena.className = "text-danger small mt-1";
        return false;
    } else {
        divErrorContrasena.innerHTML = "";
        return true;
    }
}


function validarFormatoContrasena(contrasena) {
    var digitos = /\d/.test(contrasena);
    var letras = /[a-zA-Z]/.test(contrasena);
    return contrasena.length >= 3 && contrasena.length <= 6 && digitos && letras;
}

function validarConfirmarContrasena() {
    var inputContrasena = document.getElementById("input-contrasena");
    var inputConfirmarContrasena = document.getElementById("input-confirmar-contrasena");
    var divErrorConfirmarContrasena = document.getElementById("error-confirmar-contrasena");
    var contrasena = inputContrasena.value.trim();
    var confirmarContrasena = inputConfirmarContrasena.value.trim();
    if (confirmarContrasena === "") {
        divErrorConfirmarContrasena.innerHTML = "Por favor, confirme su contraseña";
        divErrorConfirmarContrasena.className = "text-danger small mt-1";
        return false;
    } else if (contrasena !== confirmarContrasena) {
        divErrorConfirmarContrasena.innerHTML = "Las contraseñas no coinciden";
        divErrorConfirmarContrasena.className = "text-danger small mt-1";
        return false;
    } else {
        divErrorConfirmarContrasena.innerHTML = "";
        return true;
    }
}


function validarDireccion() {
    var inputDireccion = document.getElementById("input-direccion");
    var divErrorDireccion = document.getElementById("error-direccion");
    var direccion = inputDireccion.value.trim();
    if (direccion === "") {
        divErrorDireccion.innerHTML = "La dirección es obligatoria";
        divErrorDireccion.className = "text-danger small mt-1";
        return false;
    } else {
        divErrorDireccion.innerHTML = "";
        return true;
    }
}


function validarTelefono() {
    var inputTelefono = document.getElementById("input-telefono");
    var divErrorTelefono = document.getElementById("error-telefono");
    var telefono = inputTelefono.value.trim();
    if (telefono === "") {
        divErrorTelefono.innerHTML = "El teléfono es obligatorio";
        divErrorTelefono.className = "text-danger small mt-1";
        return false;
    } else if (!validarFormatoTelefono(telefono)) {
        divErrorTelefono.innerHTML = "El teléfono no es válido";
        divErrorTelefono.className = "text-danger small mt-1";
        return false;
    } else {
        divErrorTelefono.innerHTML = "";
        return true;
    }
}


function validarFormatoTelefono(telefono) {
    return /^[0-9]{7,}$/g.test(telefono);
}


function validarWeb() {
    var inputWeb = document.getElementById("input-web");
    var divErrorWeb = document.getElementById("error-web");
    var web = inputWeb.value.trim();
    if (web === "") {
        divErrorWeb.innerHTML = "La página web es obligatoria";
        divErrorWeb.className = "text-danger small mt-1";
        return false;
    } else if (!validarFormatoWeb(web)) {
        divErrorWeb.innerHTML = "La URL de la página web no es válida";
        divErrorWeb.className = "text-danger small mt-1";
        return false;
    } else {
        divErrorWeb.innerHTML = "";
        return true;
    }
}


function validarFormatoWeb(web) {
    return /^(http|https):\/\/[^ "]+$/.test(web);
}


function validarComuna() {
    var selectComuna = document.getElementById("select-comuna");
    var divErrorComuna = document.getElementById("error-comuna");
    var comuna = selectComuna.value;
    if (comuna === "Seleccione una comuna...") {
        divErrorComuna.innerHTML = "Por favor, seleccione una comuna";
        divErrorComuna.className = "text-danger small mt-1";
        return false;
    } else {
        divErrorComuna.innerHTML = "";
        return true;
    }
}


function validarAficiones() {
    var inputAficiones = document.getElementById("input-aficiones");
    var divErrorAficiones = document.getElementById("error-aficiones");
    var aficiones = inputAficiones.value.trim().split(",");
    if (aficiones.length < 2) {
        divErrorAficiones.innerHTML = "Debe ingresar al menos dos aficiones separadas por coma";
        divErrorAficiones.className = "text-danger small mt-1";
        return false;
    } else {
        divErrorAficiones.innerHTML = "";
        return true;
    }
}
