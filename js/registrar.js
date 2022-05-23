"use strict";
function enterButton(event) {
    var _a;
    if (event.keyCode == 13) {
        event.returnValue = false;
        (_a = document.getElementById("btnRegister")) === null || _a === void 0 ? void 0 : _a.click();
    }
}
function registrar() {
    var usuari = document.getElementById("usuari").value;
    var correu = document.getElementById("correu").value;
    var contrasenya = document.getElementById("contrasenya").value;
    var repContrasenya = document.getElementById("repContrasenya").value;
    var user = [usuari, correu, contrasenya];
    if (usuari != "" && correu != "" && contrasenya != "" && repContrasenya != "") {
        if (contrasenya == repContrasenya) {
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
                        alert("La contrasenya no pot tenir espais en blanc");
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
                                        alert("Usuari ja existent");
                                    }
                                    else if (select == 0) {
                                        alert("Usuari creat correctament");
                                        location.href = "../php/login.php";
                                    }
                                    else {
                                        alert("Email ja utilitzat");
                                    }
                                }
                            };
                            xmlhttp.open("POST", "../php/controlador/registrar.php", true);
                            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            xmlhttp.send("word=" + user);
                        }
                        else {
                            alert("La direcció d'email és invàlida.");
                        }
                    }
                }
                else {
                    alert("L'usuari no pot tenir menys de 3 caràcters");
                }
            }
            else {
                alert("La contrasenya no pot tenir menys de 6 caràcters");
            }
        }
        else {
            alert("Les contrasenyes no coincideixen");
        }
    }
    else {
        alert("No poden haver camps buits");
    }
}
