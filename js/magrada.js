"use strict";
var xhttp;
var xmlDoc;
function mostrar_like_canciones() {
    document.getElementById("filtrarPer").value = "none";
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarCançons;
    xhttp.open("GET", "../php/controlador/canciones_seguidas.php", true);
    xhttp.send();
}
function mostrarCançons() {
    var _a;
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        (_a = document.getElementById("cançons")) === null || _a === void 0 ? void 0 : _a.innerHTML = "";
        var select = xhttp.responseXML;
        var cançons = select.getElementsByTagName("seguido");
        var divPareTot = document.getElementById("cançons");
        for (var i = 0; i < cançons.length; i++) {
            var idCanço = cançons[i].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço = cançons[i].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var nomGuardat = cançons[i].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipus = cançons[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var artistaCanço = cançons[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var ruta = "../uploads/" + nomGuardat + "." + tipus;
            var newDiv = document.createElement("div");
            newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
            var newDiv2 = document.createElement("div");
            newDiv2.classList.add("card", "divCategoria");
            var newDiv3 = document.createElement("div");
            newDiv3.classList.add("card-body", "imatgeMusica", "cat11");
            var newH5 = document.createElement("h5");
            newH5.classList.add("card-title", "modificarTextCanço");
            var textH5 = document.createTextNode(nomCanço);
            newH5.appendChild(textH5);
            var newDiv4 = document.createElement("div");
            newDiv4.classList.add("media", "divMedia");
            var newDiv5 = document.createElement("div");
            newDiv5.classList.add("media-body", "zonaBotonsMusica");
            var newSpan = document.createElement("span");
            newSpan.classList.add("bx", "bx-play-circle");
            newSpan.value = ruta;
            newSpan.alt = artistaCanço;
            newSpan.required = nomCanço;
            newSpan.data = idCanço;
            newSpan.onclick = function () { reproduirCanço(this); };
            var newA = document.createElement("a");
            newA.href = ruta;
            newA.download = nomCanço;
            var newSpan2 = document.createElement("span");
            newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");
            var newDiv6 = document.createElement("div");
            newDiv6.classList.add("nav-item", "nav-profile", "dropdown");
            var newA2 = document.createElement("a");
            newA2.href = "#";
            newA2.setAttribute("data-toggle", "dropdown");
            var newSpan3 = document.createElement("span");
            newSpan3.classList.add("bx", "bx-dots-vertical-rounded", "iconaExtrMusic");
            var newDiv7 = document.createElement("div");
            newDiv7.classList.add("dropdown-menu", "menuAccio");
            var newA3 = document.createElement("a");
            newA3.id = idCanço;
            newA3.classList.add("dropdown-item", "opcioMenuAccio");
            newA3.value = idCanço;
            newA3.onclick = function () { treureLike(this); };
            var newSpan4 = document.createElement("span");
            newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
            var newP3 = document.createElement("p");
            newP3.classList.add("txtOpcionsUser");
            var textP3 = document.createTextNode("No m'agrada");
            newP3.appendChild(textP3);
            var newA4 = document.createElement("a");
            newA4.value = idCanço;
            newA4.setAttribute("data-toggle", "modal");
            newA4.setAttribute("data-target", "#exampleModal");
            newA4.classList.add("dropdown-item", "opcioMenuAccio");
            newA4.onclick = function () { carregarSelectPlaylist(this); };
            var newSpan5 = document.createElement("span");
            newSpan5.classList.add("bx", "bx-add-to-queue", "text-primary", "colIcona", "midaIcones");
            var newP4 = document.createElement("p");
            newP4.classList.add("txtOpcionsUser");
            var textP4 = document.createTextNode("Afegir a la playlist");
            newP4.appendChild(textP4);
            newA4.appendChild(newSpan5);
            newA4.appendChild(newP4);
            newA3.appendChild(newSpan4);
            newA3.appendChild(newP3);
            newDiv7.appendChild(newA3);
            newDiv7.appendChild(newA4);
            newA2.appendChild(newSpan3);
            newDiv6.appendChild(newA2);
            newDiv6.appendChild(newDiv7);
            newDiv5.appendChild(newSpan);
            newA.appendChild(newSpan2);
            newDiv5.appendChild(newA);
            newDiv5.appendChild(newDiv6);
            newDiv4.appendChild(newDiv5);
            newDiv3.appendChild(newH5);
            newDiv3.appendChild(newDiv4);
            newDiv2.appendChild(newDiv3);
            newDiv.appendChild(newDiv2);
            divPareTot.appendChild(newDiv);
        }
        agafarImatgeUsuari();
    }
}
function reproduirCanço(ruta) {
    var _a, _b, _c;
    (_a = document.getElementById("nomA")) === null || _a === void 0 ? void 0 : _a.innerHTML = ruta.alt;
    (_b = document.getElementById("titolM")) === null || _b === void 0 ? void 0 : _b.innerHTML = ruta.required;
    document.getElementById("audio-1").src = ruta.value;
    (_c = document.getElementById("play")) === null || _c === void 0 ? void 0 : _c.click();
    augmentarClicks(ruta.data);
}
function augmentarClicks(idCanço) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = clicksAugmentats;
    xhttp.open('POST', '../php/controlador/augmentarClicks.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idC=" + idCanço);
}
function clicksAugmentats() { }
function treureLike(idCanço) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = noMagrada;
    xhttp.open('POST', '../php/controlador/treureLike.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idC=" + idCanço.value);
}
function noMagrada() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        mostrar_like_canciones();
    }
}
function buscarNomCanço() {
    var nomC = document.getElementById("buscarNom").value;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarCançons;
    xhttp.open('POST', '../php/controlador/buscarCançoPlaylist.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomCanço=" + nomC);
}
function carregarSelectPlaylist(idCanço) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = llistesCarregades;
    xhttp.open('POST', '../php/controlador/carregarTotesPlaylist.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idC=" + idCanço.value);
}
function llistesCarregades() {
    var _a;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        (_a = document.getElementById("llistatPlaylist")) === null || _a === void 0 ? void 0 : _a.innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var divPare = document.getElementById("llistatPlaylist");
        var numP = xmlDoc.getElementsByTagName("playlist");
        for (var i = 0; i < numP.length; i++) {
            var idLlista = numP[i].getElementsByTagName("id_llista")[0].childNodes[0].nodeValue;
            var titolLlista = numP[i].getElementsByTagName("titol")[0].childNodes[0].nodeValue;
            var idCanço = numP[i].getElementsByTagName("idCanço")[0].childNodes[0].nodeValue;
            document.getElementById("idHiddenn").value = idCanço;
            var newOption = document.createElement("option");
            newOption.value = idLlista;
            var textOption = document.createTextNode(titolLlista);
            newOption.appendChild(textOption);
            divPare.appendChild(newOption);
        }
    }
}
function afegirPlaylist() {
    var idLlista = document.getElementById("llistatPlaylist").value;
    var idCançoo = document.getElementById("idHiddenn").value;
    if (idLlista == "") {
        swal("Error", "No tens cap playlist creada", "error");
    }
    else {
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = cançoAfegidaPlaylist;
        xhttp.open('POST', '../php/controlador/afegirCançoAPlaylist.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("idL=" + idLlista + "&" + "idC=" + idCançoo);
    }
}
function cançoAfegidaPlaylist() {
    var _a;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var resultatPlaylist = xhttp.responseText;
        if (resultatPlaylist == -1) {
            swal("Cançó ja guardada", "Aquesta cançó ja està en la playlist", "info");
        }
        else {
            (_a = document.getElementById("btnCerrarModal")) === null || _a === void 0 ? void 0 : _a.click();
        }
    }
}
function aplicarFiltre() {
    var estatA = document.getElementById("filtrarPer").value;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarCançons;
    xhttp.open('POST', '../php/controlador/filtrarEstatAnimMG.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("estatAnim=" + estatA);
}
