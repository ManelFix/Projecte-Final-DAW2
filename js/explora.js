"use strict";
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
        if (rutaImatge == 0) {
            document.getElementById("iconaUsuari").src = "../img/defaultUser.svg";
        }
        else {
            document.getElementById("iconaUsuari").src = rutaImatge;
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
}
