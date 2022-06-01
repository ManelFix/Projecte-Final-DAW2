"use strict";
var xhttp;
var xmlDoc;
function carregarCançons(premium, idU) {
    localStorage.setItem("tipusUsuariConcretSoundBox", premium);
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/carregarCançonsUsuari.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idU=" + idU);
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
            var tipusUsuari = cançons[i].getElementsByTagName("tipusUsuariC")[0].childNodes[0].nodeValue;
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
            newTd5.classList.add("css_seccioAccio");
            var newSpan = document.createElement("span");
            newSpan.classList.add("bx", "bx-play-circle", "iconaAccio", "iconaMevaMEspai");
            newSpan.title = "Reproduir";
            newSpan.value = nomConcretCanço + "." + tipusCanço;
            newSpan.alt = artistaCanço;
            newSpan.required = nomCanço;
            newSpan.data = idCanço;
            newSpan.onclick = function () { escoltarCanço(this); };
            var newA = document.createElement("a");
            newA.href = ruta;
            newA.download = nomCanço;
            var newSpan2 = document.createElement("span");
            newSpan2.classList.add("bx", "bx-download", "iconaAccio", "iconaMevaMEspai");
            newSpan2.title = "Descarregar";
            if (tipusUsuari == 0) {
                if (localStorage.getItem("tipusUsuariConcretSoundBox") == 1) {
                    newSpan.style = "pointer-events: none;";
                    newA.style = "pointer-events: none;";
                    newA.href = "";
                }
            }
            newA.appendChild(newSpan2);
            newTd5.appendChild(newSpan);
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
function escoltarCanço(nomCançoConc) {
    var _a, _b, _c;
    (_a = document.getElementById("nomA")) === null || _a === void 0 ? void 0 : _a.innerHTML = nomCançoConc.alt;
    (_b = document.getElementById("titolM")) === null || _b === void 0 ? void 0 : _b.innerHTML = nomCançoConc.required;
    document.getElementById("audio-1").src = "../uploads/" + nomCançoConc.value;
    (_c = document.getElementById("play")) === null || _c === void 0 ? void 0 : _c.click();
    augmentarClicks(nomCançoConc.data);
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
function buscarCanço(idU) {
    var nomC = document.getElementById("iCançoTot").value;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/buscarCançoUsuari.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomCanço=" + nomC + "&" + "idU=" + idU);
}
