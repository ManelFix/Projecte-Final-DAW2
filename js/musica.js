"use strict";
var xhttp;
var xmlDoc;
function carregarMusica(nom) {
    document.getElementById("filtrarPer").value = "none";
    var tipusUsuari = localStorage.getItem("TipusUsuariSoundBox");
    var catMinus = nom.toLowerCase();
    localStorage.setItem("categoriaSoundBox", catMinus);
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarMusica;
    xhttp.open('POST', '../php/controlador/carregarMusica.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("cat=" + catMinus + "&" + "tip=" + tipusUsuari);
}
function mostrarMusica() {
    var _a;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("musicaIdTot").innerHTML = "";
        if (localStorage.getItem("categoriaSoundBox") != "prèmium") {
            document.getElementById("musicaIdPremium").innerHTML = "";
        }
        document.getElementById("musicaIdTop").innerHTML = "";
        document.getElementById("musicaIdTopM").innerHTML = "";
        console.log(xhttp.responseText);
        xmlDoc = xhttp.responseXML;
        var cançons = xmlDoc.getElementsByTagName("musica");
        var cançons2 = xmlDoc.getElementsByTagName("musica2");
        var cançonsTopM = xmlDoc.getElementsByTagName("musicaTopM");
        var like = xmlDoc.getElementsByTagName("magrada");
        var divPareTot = document.getElementById("musicaIdTot");
        var divParePremium = document.getElementById("musicaIdPremium");
        var divPareTop = document.getElementById("musicaIdTop");
        var divPareTopM = document.getElementById("musicaIdTopM");
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
            case "Prèmium":
                catAtribut = "cat12";
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
            if (tipusCanço == 1) {
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
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4 = document.createElement("span");
                newSpan4.classList.add("bx", "text-primary", "colIcona", "midaIcones");
                var newP3 = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");
                var likeado = 0;
                for (var z = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3 = document.createTextNode("No m'agrada");
                        z = like.length;
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3 = document.createTextNode("M'agrada");
                    z = like.length;
                }
                newP3.appendChild(textP3);
                var newA4 = document.createElement("a");
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
                var tipusUsuari = localStorage.getItem("TipusUsuariSoundBox");
                if (tipusUsuari == 0) {
                    newSpan.style = "pointer-events: none;";
                    newA.style = "pointer-events: none;";
                    newA2.style = "pointer-events: none;";
                }
            }
            else {
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
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4 = document.createElement("span");
                newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                var newP3 = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");
                var likeado = 0;
                for (var z = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3 = document.createTextNode("No m'agrada");
                        z = like.length;
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3 = document.createTextNode("M'agrada");
                    z = like.length;
                }
                newP3.appendChild(textP3);
                var newA4 = document.createElement("a");
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
            }
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
            if (localStorage.getItem("categoriaSoundBox") == "prèmium") {
                divPareTot.appendChild(newDiv);
            }
            if (tipusCanço == 0) {
                divPareTot.appendChild(newDiv);
            }
            if (tipusCanço == 1) {
                if (localStorage.getItem("categoriaSoundBox") != "prèmium") {
                    divParePremium.appendChild(newDiv);
                }
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
            if (tipusCanço == 1) {
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
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4 = document.createElement("span");
                newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                var newP3 = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");
                var likeado = 0;
                for (var z = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3 = document.createTextNode("No m'agrada");
                        z = like.length;
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3 = document.createTextNode("M'agrada");
                    z = like.length;
                }
                newP3.appendChild(textP3);
                var newA4 = document.createElement("a");
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
                var tipusUsuari = localStorage.getItem("TipusUsuariSoundBox");
                if (tipusUsuari == 0) {
                    newSpan.style = "pointer-events: none;";
                    newA.style = "pointer-events: none;";
                    newA2.style = "pointer-events: none;";
                }
            }
            else {
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
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4 = document.createElement("span");
                newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                var newP3 = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");
                var likeado = 0;
                for (var z = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3 = document.createTextNode("No m'agrada");
                        z = like.length;
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3 = document.createTextNode("M'agrada");
                    z = like.length;
                }
                newP3.appendChild(textP3);
                var newA4 = document.createElement("a");
                newA4.classList.add("dropdown-item", "opcioMenuAccio");
                newA4.value = idCanço;
                newA4.setAttribute("data-toggle", "modal");
                newA4.setAttribute("data-target", "#exampleModal");
                newA4.onclick = function () { carregarSelectPlaylist(this); };
                var newSpan5 = document.createElement("span");
                newSpan5.classList.add("bx", "bx-add-to-queue", "text-primary", "colIcona", "midaIcones");
                var newP4 = document.createElement("p");
                newP4.classList.add("txtOpcionsUser");
                var textP4 = document.createTextNode("Afegir a la playlist");
                newP4.appendChild(textP4);
            }
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
            divPareTop.appendChild(newDiv);
        }
        for (var c = 0; c < cançonsTopM.length; c++) {
            var idCanço = cançonsTopM[c].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço = cançonsTopM[c].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var nomGuardat = cançonsTopM[c].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipus = cançonsTopM[c].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var tipusCanço = cançonsTopM[c].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
            var artistaCanço = cançonsTopM[c].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var ruta = "../uploads/" + nomGuardat + "." + tipus;
            if (tipusCanço == 1) {
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
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4 = document.createElement("span");
                newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                var newP3 = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");
                var likeado = 0;
                for (var z = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3 = document.createTextNode("No m'agrada");
                        z = like.length;
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3 = document.createTextNode("M'agrada");
                    z = like.length;
                }
                newP3.appendChild(textP3);
                var newA4 = document.createElement("a");
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
                var tipusUsuari = localStorage.getItem("TipusUsuariSoundBox");
                if (tipusUsuari == 0) {
                    newSpan.style = "pointer-events: none;";
                    newA.style = "pointer-events: none;";
                    newA2.style = "pointer-events: none;";
                }
            }
            else {
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
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4 = document.createElement("span");
                newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                var newP3 = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");
                var likeado = 0;
                for (var z = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3 = document.createTextNode("No m'agrada");
                        z = like.length;
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3 = document.createTextNode("M'agrada");
                    z = like.length;
                }
                newP3.appendChild(textP3);
                var newA4 = document.createElement("a");
                newA4.classList.add("dropdown-item", "opcioMenuAccio");
                newA4.value = idCanço;
                newA4.setAttribute("data-toggle", "modal");
                newA4.setAttribute("data-target", "#exampleModal");
                newA4.onclick = function () { carregarSelectPlaylist(this); };
                var newSpan5 = document.createElement("span");
                newSpan5.classList.add("bx", "bx-add-to-queue", "text-primary", "colIcona", "midaIcones");
                var newP4 = document.createElement("p");
                newP4.classList.add("txtOpcionsUser");
                var textP4 = document.createTextNode("Afegir a la playlist");
                newP4.appendChild(textP4);
            }
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
            divPareTopM.appendChild(newDiv);
        }
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
function afegirLike(idCanço) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = tincLike;
    xhttp.open('POST', '../php/controlador/afegirLike.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idC=" + idCanço.value);
}
function tincLike() {
    var _a, _b, _c, _d, _e, _f;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var controlarLike = xhttp.responseText.replace(/\s+/g, '');
        var arrOpcions = controlarLike.split('.');
        if (arrOpcions[1] == "-1") {
            (_a = document.getElementById(arrOpcions[0])) === null || _a === void 0 ? void 0 : _a.firstChild.classList.remove("bx-dislike");
            (_b = document.getElementById(arrOpcions[0])) === null || _b === void 0 ? void 0 : _b.firstChild.classList.add("bx-like");
            (_c = document.getElementById(arrOpcions[0])) === null || _c === void 0 ? void 0 : _c.lastChild.innerHTML = "M'agrada";
        }
        else {
            (_d = document.getElementById(arrOpcions[0])) === null || _d === void 0 ? void 0 : _d.firstChild.classList.remove("bx-like");
            (_e = document.getElementById(arrOpcions[0])) === null || _e === void 0 ? void 0 : _e.firstChild.classList.add("bx-dislike");
            (_f = document.getElementById(arrOpcions[0])) === null || _f === void 0 ? void 0 : _f.lastChild.innerHTML = "No m'agrada";
        }
    }
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
            document.getElementById("idHidden").value = idCanço;
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
    var idCançoo = document.getElementById("idHidden").value;
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
function cançoAfegidaPlaylist() {
    var _a;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var resultatPlaylist = xhttp.responseText;
        if (resultatPlaylist == -1) {
            alert("Aquesta cançó ja està en la playlist");
        }
        else {
            (_a = document.getElementById("btnCerrarModal")) === null || _a === void 0 ? void 0 : _a.click();
        }
    }
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
function agafarImatgeUsuari(tipusCat, premium) {
    localStorage.setItem("TipusUsuariSoundBox", premium);
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarImatgeUsuari;
    xhttp.open('POST', '../php/controlador/agafarImatgeU.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("cat=" + tipusCat);
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
        carregarLlistesPropies(arrOpcions[1]);
    }
}
function carregarLlistesPropies(cat) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarLlistesPropies;
    xhttp.open('POST', '../php/controlador/carregarLlistesP.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("cat=" + cat);
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
                var categoria = llistes[i].getElementsByTagName("categoria")[0].childNodes[0].nodeValue;
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
            carregarMusica(categoria);
        }
        else {
            carregarMusica(arrOpcions[1]);
        }
    }
}
