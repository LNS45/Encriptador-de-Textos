function obtenerMensaje(){
    mensaje = document.getElementById("input").value;
}
function encriptA(){
    mensaje = mensaje.replaceAll("a" , "&6lpyjkl");
}
function encriptE(){
    mensaje = mensaje.replaceAll("e" , "jh%^13kd");
}
function encriptI(){
    mensaje = mensaje.replaceAll("i" , "pw>(nw*7");
}
function encriptO(){
    mensaje = mensaje.replaceAll("o" , "jsgrbr@1");
}
function encriptU(){
    mensaje = mensaje.replaceAll("u" , "h&dkpl91");
}
function encriptar(){
    obtenerMensaje();
    ocultarElementos();
    encriptA();
    encriptE();
    encriptI();
    encriptO();
    encriptU();
    mostrarElementos();
    mostrarMensaje();
    enfoque("area__texto");
    console.log(mensaje);
}
function desencriptA(){
    mensaje = mensaje.replaceAll("&6lpyjkl" , "a" );
}
function desencriptE(){
    mensaje = mensaje.replaceAll("jh%^13kd" , "e");
}
function desencriptI(){
    mensaje = mensaje.replaceAll("pw>(nw*7" , "i" );
}
function desencriptO(){
    mensaje = mensaje.replaceAll("jsgrbr@1" , "o");
}
function desencriptU(){
    mensaje = mensaje.replaceAll("h&dkpl91" , "u");
}
function desencriptar(){
    obtenerMensaje();
    ocultarElementos();
    desencriptA();
    desencriptE();
    desencriptI();
    desencriptO();
    desencriptU();
    mostrarElementos();
    mostrarMensaje();
    enfoque("area__texto");
    console.log(mensaje);
}
function mostrarMensaje(){
    document.getElementById("area__texto").innerHTML = mensaje;
}
function ocultarElementos(){
    document.getElementById("icono").style.display = "none";
}
function mostrarElementos(){
    document.getElementById("elementos").style.display = "flex";
}
function enfoque(campo){
    document.getElementById(campo).focus();
}
function botonCopiar(){
    var contenido = document.getElementById("area__texto");
    contenido.select();
    document.execCommand('copy');
    alert("Texto Copiado");
    enfoque("input");
}
