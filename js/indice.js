"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iniciar_sesion_js_1 = require("./iniciar_sesion.js");
function indice(seccion) {
    switch (seccion) {
        case 0:
            var user = document.getElementById("usuari").value;
            var contrasenya = document.getElementById("contrasenya").value;
            if (user != "" && contrasenya != "") {
                (0, iniciar_sesion_js_1.iniciar_sesion)(user, contrasenya);
            }
            else {
                alert("El usuario y contrasenya no pueden estar vacios");
            }
            break;
    }
}
