"use strict";
var xmlhttp;
function artistas_seguidos() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = carregarArtistes;
    xmlhttp.open("GET", "../php/controlador/artistas_seguidos.php", true);
    xmlhttp.send();
}
function carregarArtistes() {
    var _a, _b, _c, _d, _e, _f;
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        (_a = document.getElementById("artistas_seguidos")) === null || _a === void 0 ? void 0 : _a.innerHTML = "";
        (_b = document.getElementById("todos_los_artistas")) === null || _b === void 0 ? void 0 : _b.innerHTML = "";
        var select = xmlhttp.responseText;
        if (select == 0) {
        }
        else {
            var select = xmlhttp.responseXML;
            console.log(select);
            var select2 = select.getElementsByTagName("seguido");
            for (var i = 0; i < select2.length; i++) {
                console.log(select2.length);
                if (select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue == "data: ;base64,") {
                    var newDiv = document.createElement("div");
                    newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                    var newDiv2 = document.createElement("div");
                    newDiv2.classList.add("card", "divCategoria");
                    var newDiv3 = document.createElement("div");
                    newDiv3.classList.add("card-body", "imatgeArtista", "aut");
                    var newImg = document.createElement("img");
                    newImg.alt = "imatgePerfil";
                    newImg.src = "../img/provarArtista.svg";
                    var newH5 = document.createElement("h5");
                    newH5.classList.add("card-title");
                    var textH5 = document.createTextNode(select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue);
                    newH5.appendChild(textH5);
                    var newDiv4 = document.createElement("div");
                    newDiv4.classList.add("media", "divMedia");
                    var newDiv5 = document.createElement("div");
                    newDiv5.classList.add("media-body", "zonaBotonsMusica");
                    var newA = document.createElement("a");
                    newA.href = "musicaUsuari.php?idU=" + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + "&nomA=" + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + "&tipU=" + select2[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
                    var newSpan = document.createElement("span");
                    newSpan.classList.add("bx", "bx-show", "iconaUll");
                    var newSpan2 = document.createElement("span");
                    newSpan2.classList.add("bx", "bx-user-x");
                    newSpan2.value = select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue;
                    newSpan2.onclick = function () { dejar_de_seguir(this); };
                    newA.appendChild(newSpan);
                    newDiv5.appendChild(newA);
                    newDiv5.appendChild(newSpan2);
                    newDiv4.appendChild(newDiv5);
                    newDiv3.appendChild(newDiv4);
                    newDiv3.appendChild(newH5);
                    newDiv3.appendChild(newImg);
                    newDiv2.appendChild(newDiv3);
                    newDiv.appendChild(newDiv2);
                    (_c = document.getElementById("artistas_seguidos")) === null || _c === void 0 ? void 0 : _c.appendChild(newDiv);
                }
                else {
                    var newDiv = document.createElement("div");
                    newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                    var newDiv2 = document.createElement("div");
                    newDiv2.classList.add("card", "divCategoria");
                    var newDiv3 = document.createElement("div");
                    newDiv3.classList.add("card-body", "imatgeArtista", "aut");
                    var newImg = document.createElement("img");
                    newImg.alt = "imatgePerfil";
                    newImg.src = select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue;
                    var newH5 = document.createElement("h5");
                    newH5.classList.add("card-title");
                    var textH5 = document.createTextNode(select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue);
                    newH5.appendChild(textH5);
                    var newDiv4 = document.createElement("div");
                    newDiv4.classList.add("media", "divMedia");
                    var newDiv5 = document.createElement("div");
                    newDiv5.classList.add("media-body", "zonaBotonsMusica");
                    var newA = document.createElement("a");
                    newA.href = "musicaUsuari.php?idU=" + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + "&nomA=" + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + "&tipU=" + select2[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
                    var newSpan = document.createElement("span");
                    newSpan.classList.add("bx", "bx-show", "iconaUll");
                    var newSpan2 = document.createElement("span");
                    newSpan2.classList.add("bx", "bx-user-x");
                    newSpan2.value = select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue;
                    newSpan2.onclick = function () { dejar_de_seguir(this); };
                    newA.appendChild(newSpan);
                    newDiv5.appendChild(newA);
                    newDiv5.appendChild(newSpan2);
                    newDiv4.appendChild(newDiv5);
                    newDiv3.appendChild(newDiv4);
                    newDiv3.appendChild(newH5);
                    newDiv3.appendChild(newImg);
                    newDiv2.appendChild(newDiv3);
                    newDiv.appendChild(newDiv2);
                    (_d = document.getElementById("artistas_seguidos")) === null || _d === void 0 ? void 0 : _d.appendChild(newDiv);
                }
            }
            var select2 = select.getElementsByTagName("otros");
            for (var i = 0; i < select2.length; i++) {
                if (select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue == "data: ;base64,") {
                    var newDiv = document.createElement("div");
                    newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                    var newDiv2 = document.createElement("div");
                    newDiv2.classList.add("card", "divCategoria");
                    var newDiv3 = document.createElement("div");
                    newDiv3.classList.add("card-body", "imatgeArtista", "aut");
                    var newImg = document.createElement("img");
                    newImg.alt = "imatgePerfil";
                    newImg.src = "../img/provarArtista.svg";
                    var newH5 = document.createElement("h5");
                    newH5.classList.add("card-title");
                    var textH5 = document.createTextNode(select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue);
                    newH5.appendChild(textH5);
                    var newDiv4 = document.createElement("div");
                    newDiv4.classList.add("media", "divMedia");
                    var newDiv5 = document.createElement("div");
                    newDiv5.classList.add("media-body", "zonaBotonsMusica");
                    var newA = document.createElement("a");
                    newA.href = "musicaUsuari.php?idU=" + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + "&nomA=" + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + "&tipU=" + select2[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
                    var newSpan = document.createElement("span");
                    newSpan.classList.add("bx", "bx-show", "iconaUll");
                    var newSpan2 = document.createElement("span");
                    newSpan2.classList.add("bx", "bx-user-plus");
                    newSpan2.value = select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue;
                    newSpan2.onclick = function () { seguir(this); };
                    newA.appendChild(newSpan);
                    newDiv5.appendChild(newA);
                    newDiv5.appendChild(newSpan2);
                    newDiv4.appendChild(newDiv5);
                    newDiv3.appendChild(newDiv4);
                    newDiv3.appendChild(newH5);
                    newDiv3.appendChild(newImg);
                    newDiv2.appendChild(newDiv3);
                    newDiv.appendChild(newDiv2);
                    (_e = document.getElementById("todos_los_artistas")) === null || _e === void 0 ? void 0 : _e.appendChild(newDiv);
                }
                else {
                    var newDiv = document.createElement("div");
                    newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                    var newDiv2 = document.createElement("div");
                    newDiv2.classList.add("card", "divCategoria");
                    var newDiv3 = document.createElement("div");
                    newDiv3.classList.add("card-body", "imatgeArtista", "aut");
                    var newImg = document.createElement("img");
                    newImg.alt = "imatgePerfil";
                    newImg.src = select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue;
                    var newH5 = document.createElement("h5");
                    newH5.classList.add("card-title");
                    var textH5 = document.createTextNode(select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue);
                    newH5.appendChild(textH5);
                    var newDiv4 = document.createElement("div");
                    newDiv4.classList.add("media", "divMedia");
                    var newDiv5 = document.createElement("div");
                    newDiv5.classList.add("media-body", "zonaBotonsMusica");
                    var newA = document.createElement("a");
                    newA.href = "musicaUsuari.php?idU=" + select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue + "&nomA=" + select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue + "&tipU=" + select2[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
                    var newSpan = document.createElement("span");
                    newSpan.classList.add("bx", "bx-show", "iconaUll");
                    var newSpan2 = document.createElement("span");
                    newSpan2.classList.add("bx", "bx-user-plus");
                    newSpan2.value = select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue;
                    newSpan2.onclick = function () { seguir(this); };
                    newA.appendChild(newSpan);
                    newDiv5.appendChild(newA);
                    newDiv5.appendChild(newSpan2);
                    newDiv4.appendChild(newDiv5);
                    newDiv3.appendChild(newDiv4);
                    newDiv3.appendChild(newH5);
                    newDiv3.appendChild(newImg);
                    newDiv2.appendChild(newDiv3);
                    newDiv.appendChild(newDiv2);
                    (_f = document.getElementById("todos_los_artistas")) === null || _f === void 0 ? void 0 : _f.appendChild(newDiv);
                }
            }
        }
    }
}
function seguir(numeros) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            artistas_seguidos();
        }
    };
    xmlhttp.open("POST", "../php/controlador/seguir.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("word=" + numeros.value);
}
function dejar_de_seguir(numeros) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            artistas_seguidos();
        }
    };
    xmlhttp.open("POST", "../php/controlador/dejar_de_seguir.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("word=" + numeros.value);
}
var xhttp;
var xmlDoc;
function agafarImatgeUsuari() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarImatgeUsuari;
    xhttp.open('POST', '../php/controlador/agafarImatgeU.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
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
        carregarLlistesPropies();
    }
}
function carregarLlistesPropies() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarLlistesPropies;
    xhttp.open('POST', '../php/controlador/carregarLlistesP.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function mostrarLlistesPropies() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var resultatLlistes = xhttp.responseText.replace(/\s+/g, '');
        var arrOpcions = resultatLlistes.split('.');
        if (arrOpcions[0] != 0) {
            xmlDoc = xhttp.responseXML;
            var llistes = xmlDoc.getElementsByTagName("llista");
            var navMenu = document.getElementById("idNav");
            for (var i = 0; i < llistes.length; i++) {
                var idLlista = llistes[i].getElementsByTagName("id_llista")[0].childNodes[0].nodeValue;
                var titolLlista = llistes[i].getElementsByTagName("titol")[0].childNodes[0].nodeValue;
                var descLlista = llistes[i].getElementsByTagName("descripcio")[0].childNodes[0].nodeValue;
                var tipusLlista = llistes[i].getElementsByTagName("privat")[0].childNodes[0].nodeValue;
                var newLi = document.createElement("li");
                newLi.classList.add("nav-item");
                var newA = document.createElement("a");
                newA.href = 'playlist.php?idL=' + idLlista + "&nomL=" + titolLlista;
                newA.classList.add("linkPlaylist");
                var newP = document.createElement("p");
                newP.classList.add("textSidebar", "textNav", "textPlaylist");
                var textP = document.createTextNode(titolLlista);
                newP.appendChild(textP);
                newA.appendChild(newP);
                newLi.appendChild(newA);
                navMenu.appendChild(newLi);
            }
        }
        artistas_seguidos();
    }
}
function buscarUsuari() {
    var nomU = document.getElementById("iUsuariTot").value;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = carregarArtistes;
    xmlhttp.open('POST', '../php/controlador/buscarUsuariClient.php', true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("nomUsuari=" + nomU);
}
