"use strict";
var xhttp;
var xmlDoc;
function tancarSessio() {
    location.href = "login.php";
}
/* Web Admin Usuaris */
function carregarUsuaris() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaUsuaris;
    xhttp.open('POST', '../php/controlador/carregarUsuaris.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function mostrarTaulaUsuaris() {
    var _a;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        (_a = document.getElementById("contingutTaula")) === null || _a === void 0 ? void 0 : _a.innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var usuaris = xmlDoc.getElementsByTagName("usuari");
        var bodyTaula = document.getElementById("contingutTaula");
        var nomPUser = "";
        var usuariBan = "";
        var accioBan = "";
        for (var i = 0; i < usuaris.length; i++) {
            var idUsuari = usuaris[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue;
            var nomUsuari = usuaris[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue;
            var emailUsuari = usuaris[i].getElementsByTagName("email")[0].childNodes[0].nodeValue;
            var tipusUsuari = usuaris[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
            var banUsuari = usuaris[i].getElementsByTagName("ban")[0].childNodes[0].nodeValue;
            var newTr = document.createElement("tr");
            var newTd = document.createElement("td");
            newTd.classList.add("py-1", "font-weight-bold");
            var textTd = document.createTextNode(nomUsuari);
            newTd.appendChild(textTd);
            var newTd2 = document.createElement("td");
            var textTd2 = document.createTextNode(emailUsuari);
            newTd2.appendChild(textTd2);
            var newTd3 = document.createElement("td");
            if (tipusUsuari == 1) {
                nomPUser = "Prèmium";
            }
            else {
                nomPUser = "No Prèmium";
            }
            var textTd3 = document.createTextNode(nomPUser);
            newTd3.appendChild(textTd3);
            var newTd4 = document.createElement("td");
            if (banUsuari == 1) {
                usuariBan = "Banejat";
            }
            else {
                usuariBan = "No banejat";
            }
            var textTd4 = document.createTextNode(usuariBan);
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
            newA2.value = idUsuari;
            var newSpan2 = document.createElement("span");
            if (banUsuari == 0) {
                newSpan2.classList.add("bx", "bxs-shield-x", "text-primary", "colIcona", "midaIcones");
                newA2.onclick = function () { banejarUsuari(this); };
                accioBan = "Banejar";
            }
            else {
                newSpan2.classList.add("bx", "bxs-check-shield", "text-primary", "colIcona", "midaIcones");
                newA2.onclick = function () { desbanejarUsuari(this); };
                accioBan = "Desbanejar";
            }
            var newP = document.createElement("p");
            newP.classList.add("txtOpcionsUser");
            var textP = document.createTextNode(accioBan);
            newP.appendChild(textP);
            newA2.appendChild(newSpan2);
            newA2.appendChild(newP);
            newDiv.appendChild(newA2);
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
    }
}
function banejarUsuari(usuariBan) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = usuariBanejat;
    xhttp.open('POST', '../php/controlador/banejarUsuari.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idU=" + usuariBan.value);
}
function desbanejarUsuari(usuariBan) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = usuariDesbanejat;
    xhttp.open('POST', '../php/controlador/desbanejarUsuari.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idU=" + usuariBan.value);
}
function usuariBanejat() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        carregarUsuaris();
    }
}
function usuariDesbanejat() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        carregarUsuaris();
    }
}
function buscarUsuari() {
    var nom = document.getElementById("iNomU").value;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaUsuaris;
    xhttp.open('POST', '../php/controlador/buscarUsuari.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomUsuari=" + nom);
}
/* Admin Web Música */
function carregarCançons() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/carregarCançons.php', true);
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
            var estatAnimCanço = cançons[i].getElementsByTagName("estat_anim")[0].childNodes[0].nodeValue;
            var dataCanço = cançons[i].getElementsByTagName("data")[0].childNodes[0].nodeValue;
            var artistaCanço = cançons[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var nomConcretCanço = cançons[i].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipusCanço = cançons[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
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
            var textTd5 = document.createTextNode(artistaCanço);
            newTd5.appendChild(textTd5);
            var newTd6 = document.createElement("td");
            newTd6.classList.add("nav-item", "nav-profile", "dropdown");
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
            newA3.value = nomConcretCanço + "." + tipusCanço;
            newA3.alt = artistaCanço;
            newA3.required = nomCanço;
            newA3.onclick = function () { escoltarCanço(this); };
            var newSpan3 = document.createElement("span");
            newSpan3.classList.add("bx", "bx-play-circle", "text-primary", "colIcona", "midaIcones");
            var newP2 = document.createElement("p");
            newP2.classList.add("txtOpcionsUser");
            var textP2 = document.createTextNode("Reproduïr");
            newP2.appendChild(textP2);
            newA3.appendChild(newSpan3);
            newA3.appendChild(newP2);
            newA2.appendChild(newSpan2);
            newA2.appendChild(newP);
            newDiv.appendChild(newA2);
            newDiv.appendChild(newA3);
            newA.appendChild(newSpan);
            newTd6.appendChild(newDiv);
            newTd6.appendChild(newA);
            newTr.appendChild(newTd);
            newTr.appendChild(newTd2);
            newTr.appendChild(newTd3);
            newTr.appendChild(newTd4);
            newTr.appendChild(newTd5);
            newTr.appendChild(newTd6);
            bodyTaula.appendChild(newTr);
        }
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
    xhttp.open('POST', '../php/controlador/buscarCanço.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomCanço=" + nomC);
}
function reiniciarClickM() {
    var opcio = confirm("Segur que vols reiniciar els clics mensuals?");
    if (opcio == true) {
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = clicksReiniciats;
        xhttp.open('POST', '../php/controlador/reiniciarClickM.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
    }
}
function clicksReiniciats() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        alert("Clicks mensuals reiniciats");
    }
}
/* Web Admin Totes les playlist */
function carregarPlaylists() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaPlaylists;
    xhttp.open('POST', '../php/controlador/carregarPlaylists.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function mostrarTaulaPlaylists() {
    var _a;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        (_a = document.getElementById("contingutPlaylists")) === null || _a === void 0 ? void 0 : _a.innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var playlists = xmlDoc.getElementsByTagName("playlist");
        var bodyTaula = document.getElementById("contingutPlaylists");
        var nomTPlaylist = "";
        for (var i = 0; i < playlists.length; i++) {
            var idLlista = playlists[i].getElementsByTagName("id_llista")[0].childNodes[0].nodeValue;
            var nomUsuari = playlists[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue;
            var titolLlista = playlists[i].getElementsByTagName("titol")[0].childNodes[0].nodeValue;
            var descLlista = playlists[i].getElementsByTagName("descripcio")[0].childNodes[0].nodeValue;
            var tipusLlista = playlists[i].getElementsByTagName("privat")[0].childNodes[0].nodeValue;
            var newTr = document.createElement("tr");
            var newTd = document.createElement("td");
            newTd.classList.add("py-1", "font-weight-bold");
            var textTd = document.createTextNode(titolLlista);
            newTd.appendChild(textTd);
            var newTd2 = document.createElement("td");
            var textTd2 = document.createTextNode(descLlista);
            newTd2.appendChild(textTd2);
            var newTd3 = document.createElement("td");
            if (tipusLlista == 1) {
                nomTPlaylist = "Privat";
            }
            else {
                nomTPlaylist = "Públic";
            }
            var textTd3 = document.createTextNode(nomTPlaylist);
            newTd3.appendChild(textTd3);
            var newTd4 = document.createElement("td");
            var textTd4 = document.createTextNode(nomUsuari);
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
            newA2.value = idLlista;
            var newSpan2 = document.createElement("span");
            newSpan2.classList.add("bx", "bxs-trash", "text-primary", "colIcona", "midaIcones");
            newA2.onclick = function () { eliminarPlaylist(this); };
            var newP = document.createElement("p");
            newP.classList.add("txtOpcionsUser");
            var textP = document.createTextNode("Eliminar");
            newP.appendChild(textP);
            var newA3 = document.createElement("a");
            newA3.classList.add("dropdown-item", "opcioMenuAccio");
            newA3.href = "adminPlaylistConcret.php?idP=" + idLlista + "&" + "nomP=" + titolLlista;
            var newSpan3 = document.createElement("span");
            newSpan3.classList.add("bx", "bx-play", "text-primary", "colIcona", "midaIcones");
            var newP2 = document.createElement("p");
            newP2.classList.add("txtOpcionsUser");
            var textP2 = document.createTextNode("Veure playlist");
            newP2.appendChild(textP2);
            newA3.appendChild(newSpan3);
            newA3.appendChild(newP2);
            newA2.appendChild(newSpan2);
            newA2.appendChild(newP);
            newDiv.appendChild(newA2);
            newDiv.appendChild(newA3);
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
    }
}
function eliminarPlaylist(IDLlista) {
    var opcio = confirm("Segur que vols eliminar aquesta playlist?");
    if (opcio == true) {
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = playlistEliminada;
        xhttp.open('POST', '../php/controlador/eliminarPlaylist.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("idP=" + IDLlista.value);
    }
}
function playlistEliminada() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        carregarPlaylists();
    }
}
function buscarPlaylist() {
    var nomP = document.getElementById("iBuscarPlaylist").value;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaPlaylists;
    xhttp.open('POST', '../php/controlador/buscarPlaylist.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomLlista=" + nomP);
}
/* Web Admin Playlist Concret */
function carregarPlaylist(idPlaylist) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/carregarPlaylistConcret.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idP=" + idPlaylist);
}
