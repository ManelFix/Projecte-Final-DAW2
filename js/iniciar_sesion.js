"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniciar_sesion = void 0;
function iniciar_sesion(usr, passwrd) {
    var usuario = usr;
    var contrasenya = passwrd;
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var select = xmlhttp.responseXML;
            if (select == 0) {
                alert("Usuario o contrasenyas incorrectos");
            }
            else if (select == 1) {
                location.href = "../php/client.html";
            }
        }
    };
    xmlhttp.open("GET", "../php/controlador/iniciar_sesion.php", true);
    xmlhttp.send();
}
exports.iniciar_sesion = iniciar_sesion;
