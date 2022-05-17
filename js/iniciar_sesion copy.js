"use strict";
function iniciar_sesion() {
    var nombre = document.getElementById("usuari").value;
    var contrasenya = document.getElementById("contrasenya").value;
    var user = [nombre, contrasenya];
    if (nombre != "" && contrasenya != "") {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                var select = xmlhttp.responseText;
                console.log(select);
                if (select == 0) {
                    alert("Usuario o contrasenyas incorrectos");
                }
                else if (select == 1) {
                    location.href = "../php/client.html";
                }
                else if (select == 2) {
                    location.href = "../php/admin.html";
                }
            }
        };
        xmlhttp.open("POST", "../php/controlador/iniciar_sesion.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("word=" + user);
    }
    else {
        alert("El usuario y contrasenya no pueden estar vacios");
    }
}
