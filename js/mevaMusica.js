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
        var arrOpcions = rutaImatge.split('.');
        if (arrOpcions[0] == 0) {
            document.getElementById("iconaUsuari").src = "../img/defaultUser.svg";
        }
        else {
            document.getElementById("iconaUsuari").src = arrOpcions[0];
            (_a = document.getElementById("iconaUsuari")) === null || _a === void 0 ? void 0 : _a.classList.add("iconaPerfil");
        }
        carregarCançons();
    }
}
function carregarCançons() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/carregarCançonsPropies.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function mostrarTaulaCançons() {
    var _a;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        (_a = document.getElementById("contingutTaulaMusica")) === null || _a === void 0 ? void 0 : _a.innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var cançons = xmlDoc.getElementsByTagName("musica");
        var bodyTaula = document.getElementById("contingutTaulaMusica");
        for (var i = 0; i < cançons.length; i++) {
            var idCanço = cançons[i].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço = cançons[i].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var genereCanço = cançons[i].getElementsByTagName("genere")[0].childNodes[0].nodeValue;
            var artistaCanço = cançons[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var estatAnimCanço = cançons[i].getElementsByTagName("estat_anim")[0].childNodes[0].nodeValue;
            var dataCanço = cançons[i].getElementsByTagName("data")[0].childNodes[0].nodeValue;
            var nomConcretCanço = cançons[i].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipusCanço = cançons[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var ruta = "../uploads/" + nomConcretCanço + "." + tipusCanço;
            var newTr = document.createElement("tr");
            var newTd = document.createElement("td");
            newTd.classList.add("py-1", "font-weight-bold");
            var textTd = document.createTextNode(nomCanço);
            newTd.appendChild(textTd);
            var newTd2 = document.createElement("td");
            var textTd2 = document.createTextNode(genereCanço);
            newTd2.appendChild(textTd2);
            var newTd3 = document.createElement("td");
            var textTd3 = document.createTextNode(estatAnimCanço);
            newTd3.appendChild(textTd3);
            var newTd4 = document.createElement("td");
            var textTd4 = document.createTextNode(dataCanço);
            newTd4.appendChild(textTd4);
            var newTd5 = document.createElement("td");
            newTd5.classList.add("nav-item", "nav-profile", "dropdown");
            var newA = document.createElement("a");
            newA.href = "#";
            newA.setAttribute("data-toggle", "dropdown");
            var newSpan = document.createElement("span");
            newSpan.classList.add("bx", "bx-dots-vertical-rounded", "iconaAccio");
            var newDiv = document.createElement("div");
            newDiv.classList.add("dropdown-menu", "menuAccio");
            var newA2 = document.createElement("a");
            newA2.classList.add("dropdown-item", "opcioMenuAccio");
            newA2.value = idCanço;
            newA2.onclick = function () { eliminarCanço(this); };
            var newSpan2 = document.createElement("span");
            newSpan2.classList.add("bx", "bxs-trash", "text-primary", "colIcona", "midaIcones");
            var newP = document.createElement("p");
            newP.classList.add("txtOpcionsUser");
            var textP = document.createTextNode("Eliminar");
            newP.appendChild(textP);
            var newA3 = document.createElement("a");
            newA3.classList.add("dropdown-item", "opcioMenuAccio");
            newA3.href = ruta;
            newA3.download = nomCanço;
            var newSpan3 = document.createElement("span");
            newSpan3.classList.add("bx", "bxs-download", "text-primary", "colIcona", "midaIcones");
            var newP2 = document.createElement("p");
            newP2.classList.add("txtOpcionsUser");
            var textP2 = document.createTextNode("Descarregar");
            newP2.appendChild(textP2);
            var newA4 = document.createElement("a");
            newA4.classList.add("dropdown-item", "opcioMenuAccio");
            newA4.value = nomConcretCanço + "." + tipusCanço;
            newA4.alt = artistaCanço;
            newA4.required = nomCanço;
            newA4.onclick = function () { escoltarCanço(this); };
            var newSpan4 = document.createElement("span");
            newSpan4.classList.add("bx", "bx-play-circle", "text-primary", "colIcona", "midaIcones");
            var newP3 = document.createElement("p");
            newP3.classList.add("txtOpcionsUser");
            var textP3 = document.createTextNode("Reproduïr");
            newP3.appendChild(textP3);
            newA4.appendChild(newSpan4);
            newA4.appendChild(newP3);
            newA3.appendChild(newSpan3);
            newA3.appendChild(newP2);
            newA2.appendChild(newSpan2);
            newA2.appendChild(newP);
            newDiv.appendChild(newA2);
            newDiv.appendChild(newA3);
            newDiv.appendChild(newA4);
            newA.appendChild(newSpan);
            newTd5.appendChild(newDiv);
            newTd5.appendChild(newA);
            newTr.appendChild(newTd);
            newTr.appendChild(newTd2);
            newTr.appendChild(newTd3);
            newTr.appendChild(newTd4);
            newTr.appendChild(newTd5);
            bodyTaula.appendChild(newTr);
        }
        carregarLlistesPropies();
    }
}
function eliminarCanço(idEliminar) {
    var opcio = confirm("Segur que vols eliminar aquesta cançó?");
    if (opcio == true) {
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = cançoEliminada;
        xhttp.open('POST', '../php/controlador/eliminarCanço.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("idC=" + idEliminar.value);
    }
}
function cançoEliminada() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        carregarCançons();
    }
}
function escoltarCanço(nomCançoConc) {
    var _a, _b, _c;
    (_a = document.getElementById("nomA")) === null || _a === void 0 ? void 0 : _a.innerHTML = nomCançoConc.alt;
    (_b = document.getElementById("titolM")) === null || _b === void 0 ? void 0 : _b.innerHTML = nomCançoConc.required;
    document.getElementById("audio-1").src = "../uploads/" + nomCançoConc.value;
    (_c = document.getElementById("play")) === null || _c === void 0 ? void 0 : _c.click();
}
function buscarCanço() {
    var nomC = document.getElementById("iCançoTot").value;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/buscarCançoPropia.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomCanço=" + nomC);
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
