"use strict";
var xhttp;
var xmlDoc;
function veureSubscripcio(idU) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = introduirSubscripcio;
    xhttp.open('POST', '../php/controlador/veureSubscripcio.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idU=" + idU);
}
function introduirSubscripcio() {
    var _a, _b, _c, _d;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var tipusSub = xhttp.responseText.replace(/\s+/g, '');
        var arrOpcions = tipusSub.split(',');
        if (arrOpcions[0] == 0) {
            (_a = document.getElementById("tipusSubs")) === null || _a === void 0 ? void 0 : _a.innerHTML = "Gratuïta";
            (_b = document.getElementById("tipusSubs")) === null || _b === void 0 ? void 0 : _b.style.color = "#F7AD19";
            document.getElementById("imgSubscripcio").src = "../img/imgNoPremium.png";
        }
        else {
            (_c = document.getElementById("tipusSubs")) === null || _c === void 0 ? void 0 : _c.innerHTML = "Prèmium";
            (_d = document.getElementById("tipusSubs")) === null || _d === void 0 ? void 0 : _d.style.color = "#429EBD";
            document.getElementById("imgSubscripcio").src = "../img/imgPremium.png";
        }
        agafarImatgeUsuari(arrOpcions[1]);
    }
}
function agafarImatgeUsuari(idUsuari) {
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
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var rutaImatge = xhttp.responseText.replace(/\s+/g, '');
        console.log(xhttp.responseText);
        if (rutaImatge == 0) {
            document.getElementById("iconaUsuari").src = "../img/defaultUser.svg";
        }
        else {
            document.getElementById("iconaUsuari").src = rutaImatge;
            document.getElementById("iconaUsuari").style = "height: auto !important; width: 3.5rem !important;";
        }
        carregarLlistesPropies(localStorage.getItem("idUsuariSoundBox"));
    }
}
function carregarLlistesPropies(idUsuari) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarLlistesPropies;
    xhttp.open('POST', '../php/controlador/carregarLlistesP.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idU=" + idUsuari);
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
            newA.href = 'playlist.php?idL=' + idLlista + "&nomL=" + titolLlista; //Revisar
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
