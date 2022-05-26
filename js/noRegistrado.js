"use strict";
var xhttp;
var xmlDoc;
function anarCatalegNoRegistrat() {
    location.href = "php/exploraNoRegistrat.php";
}
function escoltarCanço(num) {
    var _a, _b, _c, _d, _e, _f;
    switch (num) {
        case 1:
            (_a = document.getElementById("nomA")) === null || _a === void 0 ? void 0 : _a.innerHTML = "Brad Sucks";
            (_b = document.getElementById("titolM")) === null || _b === void 0 ? void 0 : _b.innerHTML = "Total Breakdown";
            document.getElementById("audio-1").src = "uploads/provaa1.mp3";
            break;
        case 2:
            (_c = document.getElementById("nomA")) === null || _c === void 0 ? void 0 : _c.innerHTML = "Breathe";
            (_d = document.getElementById("titolM")) === null || _d === void 0 ? void 0 : _d.innerHTML = "George Capon";
            document.getElementById("audio-1").src = "uploads/prova2.mp3";
            break;
        case 3:
            (_e = document.getElementById("nomA")) === null || _e === void 0 ? void 0 : _e.innerHTML = "Kevin MacLeod";
            (_f = document.getElementById("titolM")) === null || _f === void 0 ? void 0 : _f.innerHTML = "Aurea";
            document.getElementById("audio-1").src = "uploads/prova3.mp3";
            break;
    }
}
function carregarMusica(nom) {
    var catMinus = nom.toLowerCase();
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarMusica;
    xhttp.open('POST', '../php/controlador/carregarMusica.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("cat=" + catMinus);
}
function mostrarMusica() {
    var _a;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("musicaIdTot").innerHTML = "";
        document.getElementById("musicaIdPremium").innerHTML = "";
        document.getElementById("musicaIdTop").innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var cançons = xmlDoc.getElementsByTagName("musica");
        var cançons2 = xmlDoc.getElementsByTagName("musica2");
        var divPareTot = document.getElementById("musicaIdTot");
        var divParePremium = document.getElementById("musicaIdPremium");
        var divPareTop = document.getElementById("musicaIdTop");
        var tipusGenere = (_a = document.getElementById("nomCategoria")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        var catAtribut = "";
        switch (tipusGenere) {
            case "Pop":
                catAtribut = "cat1";
                break;
            case "Rock":
                catAtribut = "cat2";
                break;
            case "Ambient":
                catAtribut = "cat3";
                break;
            case "Metal":
                catAtribut = "cat4";
                break;
            case "Punk":
                catAtribut = "cat5";
                break;
            case "Soul":
                catAtribut = "cat6";
                break;
            case "Jazz":
                catAtribut = "cat7";
                break;
            case "Clàssica":
                catAtribut = "cat8";
                break;
            case "Electrònica":
                catAtribut = "cat9";
                break;
            case "Indie":
                catAtribut = "cat10";
                break;
            case "Infantil":
                catAtribut = "cat11";
                break;
        }
        for (var i = 0; i < cançons.length; i++) {
            var idCanço = cançons[i].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço = cançons[i].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var nomGuardat = cançons[i].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipus = cançons[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var tipusCanço = cançons[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
            var artistaCanço = cançons[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var ruta = "../uploads/" + nomGuardat + "." + tipus;
            var newDiv = document.createElement("div");
            newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
            var newDiv2 = document.createElement("div");
            newDiv2.classList.add("card", "divCategoria");
            var newDiv3 = document.createElement("div");
            newDiv3.classList.add("card-body", "imatgeMusica", catAtribut);
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
            newSpan.onclick = function () { reproduirCanço(this, idCanço); };
            var newA = document.createElement("a");
            newA.href = ruta;
            newA.download = nomCanço;
            var newSpan2 = document.createElement("span");
            newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");
            if (tipusCanço == 1) {
                newSpan.style = "pointer-events: none;";
                newA.style = "pointer-events: none;";
            }
            newDiv5.appendChild(newSpan);
            newA.appendChild(newSpan2);
            newDiv5.appendChild(newA);
            newDiv4.appendChild(newDiv5);
            newDiv3.appendChild(newH5);
            newDiv3.appendChild(newDiv4);
            newDiv2.appendChild(newDiv3);
            newDiv.appendChild(newDiv2);
            if (tipusCanço == 0) {
                divPareTot.appendChild(newDiv);
            }
            if (tipusCanço == 1) {
                divParePremium.appendChild(newDiv);
            }
        }
        for (var y = 0; y < cançons2.length; y++) {
            var idCanço = cançons2[y].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço = cançons2[y].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var nomGuardat = cançons2[y].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipus = cançons2[y].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var tipusCanço = cançons2[y].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
            var artistaCanço = cançons2[y].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var ruta = "../uploads/" + nomGuardat + "." + tipus;
            var newDiv = document.createElement("div");
            newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
            var newDiv2 = document.createElement("div");
            newDiv2.classList.add("card", "divCategoria");
            var newDiv3 = document.createElement("div");
            newDiv3.classList.add("card-body", "imatgeMusica", catAtribut);
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
            newSpan.onclick = function () { reproduirCanço(this, idCanço); };
            var newA = document.createElement("a");
            newA.href = ruta;
            newA.download = nomCanço;
            var newSpan2 = document.createElement("span");
            newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");
            if (tipusCanço == 1) {
                newSpan.style = "pointer-events: none;";
                newA.style = "pointer-events: none;";
            }
            newDiv5.appendChild(newSpan);
            newA.appendChild(newSpan2);
            newDiv5.appendChild(newA);
            newDiv4.appendChild(newDiv5);
            newDiv3.appendChild(newH5);
            newDiv3.appendChild(newDiv4);
            newDiv2.appendChild(newDiv3);
            newDiv.appendChild(newDiv2);
            divPareTop.appendChild(newDiv);
        }
    }
}
function reproduirCanço(ruta, idCanço) {
    var _a, _b, _c;
    (_a = document.getElementById("nomA")) === null || _a === void 0 ? void 0 : _a.innerHTML = ruta.alt;
    (_b = document.getElementById("titolM")) === null || _b === void 0 ? void 0 : _b.innerHTML = ruta.required;
    document.getElementById("audio-1").src = ruta.value;
    (_c = document.getElementById("play")) === null || _c === void 0 ? void 0 : _c.click();
    augmentarClicks(idCanço);
}
function augmentarClicks(idCanço) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = carregarMusica;
    xhttp.open('POST', '../php/controlador/augmentarClicks.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idC=" + idCanço);
}
function aplicarFiltre(nom) {
    var estatA = document.getElementById("filtrarPer").value;
    var catMinus = nom.toLowerCase();
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarMusica;
    xhttp.open('POST', '../php/controlador/filtrarEstatAnimNR.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("estatAnim=" + estatA + "&" + "cat=" + catMinus);
}
function buscarNomCanço(nom) {
    var textBuscar = document.getElementById("buscarNom").value;
    var catMinus = nom.toLowerCase();
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarMusica;
    xhttp.open('POST', '../php/controlador/filtrarNomBuscador.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("textB=" + textBuscar + "&" + "cat=" + catMinus);
}
