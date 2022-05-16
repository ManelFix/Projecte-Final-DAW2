import { iniciar_sesion } from './iniciar_sesion.js';

function indice(seccion: any) {

    switch (seccion) {

        case 0:
            var user = document.getElementById("usuari").value;
            var contrasenya = document.getElementById("contrasenya").value;

            if (user != "" && contrasenya != "") {

                iniciar_sesion(user, contrasenya);

            } else {
                alert("El usuario y contrasenya no pueden estar vacios");
            }

            break;

    }

}