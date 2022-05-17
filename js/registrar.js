"use strict";
function registrar() {
    var usuari = document.getElementById("usuari").value;
    var correu = document.getElementById("correu").value;
    var contrasenya = document.getElementById("contrasenya").value;
    var repContrasenya = document.getElementById("repContrasenya").value;
    var user = [usuari, correu, contrasenya];
    if (usuari != "" && correu != "" && contrasenya != "" && repContrasenya != "") {
        if (contrasenya == repContrasenya) {
            console.log(contrasenya.length);
            if (contrasenya.length > 6) {
                if (usuari.length > 3) {
                    var espacios = false;
                    var cont = 0;
                    while (!espacios && (cont < contrasenya.length)) {
                        if (contrasenya.charAt(cont) == " ") {
                            espacios = true;
                        }
                        cont++;
                    }
                    if (espacios) {
                        alert("La contraseña no puede contener espacios en blanco");
                    }
                    else {
                        if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(correu)) {
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
                                    console.log(xmlhttp);
                                    if (select == 1) {
                                        alert("Usuario ya existente");
                                    }
                                    else if (select == 0) {
                                        alert("fino");
                                    }
                                    else {
                                        alert("Email ya utilizado");
                                    }
                                }
                            };
                            xmlhttp.open("POST", "../php/controlador/registrar.php", true);
                            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            xmlhttp.send("word=" + user);
                        }
                        else {
                            alert("La dirección de email es invalida.");
                        }
                    }
                }
                else {
                    alert("El usuario no puede tener menos de 3 caracteres");
                }
            }
            else {
                alert("La contrasenya no puede tener menos de 6 caracteres");
            }
        }
        else {
            alert("Las contrasenyas no coinciden");
        }
    }
    else {
        alert("No pueden haber campos vacios");
    }
}
