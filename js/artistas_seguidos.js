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
                console.log(select);
                var select2 = select.getElementsByTagName("seguido");
                var seguidos = '';
                var no_seguidos = '';
                for (var i = 0; i < select2.length; i++) {
                    if (select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue == "data: ;base64,") {
                        seguidos += '<div class="col-md-3 grid-margin stretch-card"><div class="card divCategoria"><div class="card-body imatgeArtista aut"><img alt="imagenperfil" src="../img/provarArtista.svg"><h5 class="card-title">' + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + '</h5><div class="media divMedia"><div class="media-body zonaBotonsMusica"><span class="bx bx-user-x" onclick="dejar_de_seguir(' + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + ')"></span></div></div></div></div></div>';
                    }
                    else {
                        seguidos += '<div class="col-md-3 grid-margin stretch-card"><div class="card divCategoria"><div class="card-body imatgeArtista aut"><img alt="imagenperfil" src="../img/' + select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue + select2[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue + '"><h5 class="card-title">' + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + '</h5><div class="media divMedia"><div class="media-body zonaBotonsMusica"><span class="bx bx-user-x" onclick="dejar_de_seguir("' + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + '")"></span></div></div></div></div></div>';
                    }
                }
                var select2 = select.getElementsByTagName("otros");
                for (var i = 0; i < select2.length; i++) {
                    if (select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue == "data: ;base64,") {
                        no_seguidos += '<div class="col-md-3 grid-margin stretch-card"><div class="card divCategoria"><div class="card-body imatgeArtista aut"><img alt="imagenperfil" src="../img/provarArtista.svg"><h5 class="card-title">' + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + '</h5><div class="media divMedia"><div class="media-body zonaBotonsMusica"><span class="bx bx-user-plus" onclick="seguir(' + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + ')"></span></div></div></div></div></div>';
                    }
                    else {
                        no_seguidos += '<div class="col-md-3 grid-margin stretch-card"><div class="card divCategoria"><div class="card-body imatgeArtista aut"><img alt="imagenperfil" src="../img/' + select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue + select2[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue + '"><h5 class="card-title">' + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + '</h5><div class="media divMedia"><div class="media-body zonaBotonsMusica"><span class="bx bx-user-plus" onclick="seguir(' + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + ')"></span></div></div></div></div></div>';
                    }
                }
                (_a = document.getElementById("artistas_seguidos")) === null || _a === void 0 ? void 0 : _a.innerHTML = seguidos;
                (_b = document.getElementById("todos_los_artistas")) === null || _b === void 0 ? void 0 : _b.innerHTML = no_seguidos;
            }
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
