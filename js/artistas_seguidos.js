"use strict";
function artistas_seguidos(id) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        var _a, _b;
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var select = xmlhttp.responseText;
            if (select == 0) {
            }
            else {
                var select = xmlhttp.responseXML;
                var select2 = select.getElementsByTagName("seguido");
                var seguidos = '';
                var no_seguidos = '';
                for (var i = 0; i < select2.length; i++) {
                    if (select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue == "data: ;base64,") {
                        seguidos += '<div class="col-md-3 grid-margin stretch-card"><div class="card divCategoria"><div class="card-body imatgeArtista aut"><img alt="imagenperfil" src="../img/provarArtista.svg"><h5 class="card-title">' + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + '</h5><div class="media divMedia"><div class="media-body zonaBotonsMusica"><span class="bx bx-user-x" onclick="dejar_de_seguir(' + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + ')"></span></div></div></div></div></div>';
                    }
                    else {
                        seguidos += '<div class="col-md-3 grid-margin stretch-card"><div class="card divCategoria"><div class="card-body imatgeArtista aut"><img alt="imagenperfil" src="' + select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue + select2[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue + '"><h5 class="card-title">' + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + '</h5><div class="media divMedia"><div class="media-body zonaBotonsMusica"><span class="bx bx-user-x" onclick="dejar_de_seguir("' + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + '")"></span></div></div></div></div></div>';
                    }
                }
                var select2 = select.getElementsByTagName("otros");
                for (var i = 0; i < select2.length; i++) {
                    if (select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue == "data: ;base64,") {
                        no_seguidos += '<div class="col-md-3 grid-margin stretch-card"><div class="card divCategoria"><div class="card-body imatgeArtista aut"><img alt="imagenperfil" src="../img/provarArtista.svg"><h5 class="card-title">' + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + '</h5><div class="media divMedia"><div class="media-body zonaBotonsMusica"><span class="bx bx-user-plus" onclick="seguir(' + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + ')"></span></div></div></div></div></div>';
                    }
                    else {
                        no_seguidos += '<div class="col-md-3 grid-margin stretch-card"><div class="card divCategoria"><div class="card-body imatgeArtista aut"><img alt="imagenperfil" src="' + select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue + select2[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue + '"><h5 class="card-title">' + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + '</h5><div class="media divMedia"><div class="media-body zonaBotonsMusica"><span class="bx bx-user-plus" onclick="seguir(' + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + ')"></span></div></div></div></div></div>';
                    }
                }
                (_a = document.getElementById("artistas_seguidos")) === null || _a === void 0 ? void 0 : _a.innerHTML = seguidos;
                (_b = document.getElementById("todos_los_artistas")) === null || _b === void 0 ? void 0 : _b.innerHTML = no_seguidos;
            }
            agafarImatgeUsuari(localStorage.getItem("idUsuariSoundBox"));
        }
    };
    xmlhttp.open("GET", "../php/controlador/artistas_seguidos.php", true);
    xmlhttp.send();
}
function seguir(numeros) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            location.reload();
        }
    };
    xmlhttp.open("POST", "../php/controlador/seguir.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("word=" + numeros);
}
function dejar_de_seguir(numeros) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            location.reload();
        }
    };
    xmlhttp.open("POST", "../php/controlador/dejar_de_seguir.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("word=" + numeros);
}
var xhttp;
function agafarImatgeUsuari(idUsuari) {
    localStorage.setItem("idUsuariSoundBox", idUsuari);
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarImatgeUsuari;
    xhttp.open('POST', '../php/controlador/agafarImatgeU.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idCompte=" + idUsuari);
}
function mostrarImatgeUsuari() {
    var _a;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var rutaImatge = xhttp.responseText.replace(/\s+/g, '');
        var arrOpcions = rutaImatge.split('.');
        if (arrOpcions[0] == 0) {
            document.getElementById("iconaUsuari").src = "../img/defaultUser.svg";
        }
        else {
            document.getElementById("iconaUsuari").src = arrOpcions[0];
            (_a = document.getElementById("iconaUsuari")) === null || _a === void 0 ? void 0 : _a.classList.add("iconaPerfil");
        }
    }
}
