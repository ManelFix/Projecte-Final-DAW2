var xhttp: any;
var xmlDoc: any;

function carregarMusica(nom: any, tipusUsuari:any) {
    document.getElementById("filtrarPer").value = "none"; 
    var catMinus: any = nom.toLowerCase();
    localStorage.setItem("categoriaSoundBox", catMinus);
    localStorage.setItem("TipusUsuariSoundBox", tipusUsuari);
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
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("musicaIdTot").innerHTML = "";
        if (localStorage.getItem("categoriaSoundBox") != "prèmium") {
            document.getElementById("musicaIdPremium").innerHTML = "";
        }
        document.getElementById("musicaIdTop").innerHTML = "";
        document.getElementById("musicaIdTopM").innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var cançons: any = xmlDoc.getElementsByTagName("musica");
        var cançons2: any = xmlDoc.getElementsByTagName("musica2");
        var cançonsTopM: any = xmlDoc.getElementsByTagName("musicaTopM");
        var like: any = xmlDoc.getElementsByTagName("magrada");
        var divPareTot: any = document.getElementById("musicaIdTot");
        var divParePremium: any = document.getElementById("musicaIdPremium");
        var divPareTop: any = document.getElementById("musicaIdTop");
        var divPareTopM: any = document.getElementById("musicaIdTopM");
        var tipusGenere: any = document.getElementById("nomCategoria")?.innerHTML;
        var catAtribut: any = "";

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

        for (var i: number = 0; i < cançons.length; i++) {
            var idCanço: any = cançons[i].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço: any = cançons[i].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var nomGuardat: any = cançons[i].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipus: any = cançons[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var tipusCanço: any = cançons[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
            var artistaCanço: any = cançons[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var ruta: any = "../uploads/" + nomGuardat + "." + tipus;
            
            if (tipusCanço == 1) {
                var newDiv: any = document.createElement("div");
                newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                var newDiv2: any = document.createElement("div");
                newDiv2.classList.add("card", "divCategoria");
                var newDiv3: any = document.createElement("div");
                newDiv3.classList.add("card-body", "imatgeMusica", catAtribut);
                var newH5: any = document.createElement("h5");
                newH5.classList.add("card-title", "modificarTextCanço");
                var textH5: any = document.createTextNode(nomCanço);
                newH5.appendChild(textH5);
                var newDiv4: any = document.createElement("div");
                newDiv4.classList.add("media", "divMedia");
                var newDiv5: any = document.createElement("div");
                newDiv5.classList.add("media-body", "zonaBotonsMusica");
                var newSpan: any = document.createElement("span");
                newSpan.classList.add("bx", "bx-play-circle");
                newSpan.value = ruta;
                newSpan.alt = artistaCanço;
                newSpan.required = nomCanço;
                newSpan.data = idCanço;
                newSpan.onclick = function () { reproduirCanço(this); };
                var newA: any = document.createElement("a");
                newA.href = ruta;
                newA.download = nomCanço;
                var newSpan2: any = document.createElement("span");
                newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");

                var newDiv6: any = document.createElement("div");
                newDiv6.classList.add("nav-item", "nav-profile", "dropdown");
                var newA2: any = document.createElement("a");
                newA2.href = "#";
                newA2.setAttribute("data-toggle", "dropdown");
                var newSpan3: any = document.createElement("span");
                newSpan3.classList.add("bx", "bx-dots-vertical-rounded", "iconaExtrMusic");
                var newDiv7: any = document.createElement("div");
                newDiv7.classList.add("dropdown-menu", "menuAccio");
                var newA3: any = document.createElement("a");
                newA3.id = idCanço;
                newA3.classList.add("dropdown-item", "opcioMenuAccio");
                newA3.value = idCanço;
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4: any = document.createElement("span");
                newSpan4.classList.add("bx", "text-primary", "colIcona", "midaIcones");
                var newP3: any = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");
                var likeado = 0;
                for (var z: number = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3: any = document.createTextNode("No m'agrada");
                        z = like.length
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3: any = document.createTextNode("M'agrada");
                    z = like.length

                }
                newP3.appendChild(textP3);
                var newA4: any = document.createElement("a");
                newA4.setAttribute("data-toggle", "modal");
                newA4.setAttribute("data-target", "#exampleModal");
                newA4.classList.add("dropdown-item", "opcioMenuAccio");
                newA4.onclick = function () { carregarSelectPlaylist(this); }
                var newSpan5: any = document.createElement("span");
                newSpan5.classList.add("bx", "bx-add-to-queue", "text-primary", "colIcona", "midaIcones");
                var newP4: any = document.createElement("p");
                newP4.classList.add("txtOpcionsUser");
                var textP4: any = document.createTextNode("Afegir a la playlist");
                newP4.appendChild(textP4);
                var tipusUsuari: any = localStorage.getItem("TipusUsuariSoundBox");
                if (tipusUsuari == 0) {
                    newSpan.style = "pointer-events: none;";
                    newA.style = "pointer-events: none;";
                    newA.href = "";
                    newA2.style = "pointer-events: none;";
                }
            }
            else {
                var newDiv: any = document.createElement("div");
                newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                var newDiv2: any = document.createElement("div");
                newDiv2.classList.add("card", "divCategoria");
                var newDiv3: any = document.createElement("div");
                newDiv3.classList.add("card-body", "imatgeMusica", catAtribut);
                var newH5: any = document.createElement("h5");
                newH5.classList.add("card-title", "modificarTextCanço");
                var textH5: any = document.createTextNode(nomCanço);
                newH5.appendChild(textH5);
                var newDiv4: any = document.createElement("div");
                newDiv4.classList.add("media", "divMedia");
                var newDiv5: any = document.createElement("div");
                newDiv5.classList.add("media-body", "zonaBotonsMusica");
                var newSpan: any = document.createElement("span");
                newSpan.classList.add("bx", "bx-play-circle");
                newSpan.value = ruta;
                newSpan.alt = artistaCanço;
                newSpan.required = nomCanço;
                newSpan.data = idCanço;
                newSpan.onclick = function () { reproduirCanço(this);};
                var newA: any = document.createElement("a");
                newA.href = ruta;
                newA.download = nomCanço;
                var newSpan2: any = document.createElement("span");
                newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");

                var newDiv6: any = document.createElement("div");
                newDiv6.classList.add("nav-item", "nav-profile", "dropdown");
                var newA2: any = document.createElement("a");
                newA2.href = "#";
                newA2.setAttribute("data-toggle", "dropdown");
                var newSpan3: any = document.createElement("span");
                newSpan3.classList.add("bx", "bx-dots-vertical-rounded", "iconaExtrMusic");
                var newDiv7: any = document.createElement("div");
                newDiv7.classList.add("dropdown-menu", "menuAccio");
                var newA3: any = document.createElement("a");
                newA3.id = idCanço;
                newA3.classList.add("dropdown-item", "opcioMenuAccio");
                newA3.value = idCanço;
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4: any = document.createElement("span");
                newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                var newP3: any = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");

                var likeado = 0;
                for (var z: number = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3: any = document.createTextNode("No m'agrada");
                        z = like.length
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3: any = document.createTextNode("M'agrada");
                    z = like.length

                }

                newP3.appendChild(textP3);
                var newA4: any = document.createElement("a");
                newA4.setAttribute("data-toggle", "modal");
                newA4.setAttribute("data-target", "#exampleModal");
                newA4.classList.add("dropdown-item", "opcioMenuAccio");
                newA4.onclick = function () { carregarSelectPlaylist(this); }
                var newSpan5: any = document.createElement("span");
                newSpan5.classList.add("bx", "bx-add-to-queue", "text-primary", "colIcona", "midaIcones");
                var newP4: any = document.createElement("p");
                newP4.classList.add("txtOpcionsUser");
                var textP4: any = document.createTextNode("Afegir a la playlist");
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
            newA.appendChild(newSpan2)
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

        for (var y: number = 0; y < cançons2.length; y++) {
            var idCanço: any = cançons2[y].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço: any = cançons2[y].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var nomGuardat: any = cançons2[y].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipus: any = cançons2[y].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var tipusCanço: any = cançons2[y].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
            var artistaCanço: any = cançons2[y].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var ruta: any = "../uploads/" + nomGuardat + "." + tipus;

            if (tipusCanço == 1) {
                var newDiv: any = document.createElement("div")
                newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                var newDiv2: any = document.createElement("div");
                newDiv2.classList.add("card", "divCategoria");
                var newDiv3: any = document.createElement("div");
                newDiv3.classList.add("card-body", "imatgeMusica", catAtribut);
                var newH5: any = document.createElement("h5");
                newH5.classList.add("card-title", "modificarTextCanço");
                var textH5: any = document.createTextNode(nomCanço);
                newH5.appendChild(textH5);
                var newDiv4: any = document.createElement("div");
                newDiv4.classList.add("media", "divMedia");
                var newDiv5: any = document.createElement("div");
                newDiv5.classList.add("media-body", "zonaBotonsMusica");
                var newSpan: any = document.createElement("span");
                newSpan.classList.add("bx", "bx-play-circle");
                newSpan.value = ruta;
                newSpan.alt = artistaCanço;
                newSpan.required = nomCanço;
                newSpan.data = idCanço;
                newSpan.onclick = function () { reproduirCanço(this); };
                var newA: any = document.createElement("a");
                newA.href = ruta;
                newA.download = nomCanço;
                var newSpan2: any = document.createElement("span");
                newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");

                var newDiv6: any = document.createElement("div");
                newDiv6.classList.add("nav-item", "nav-profile", "dropdown");
                var newA2: any = document.createElement("a");
                newA2.href = "#";
                newA2.setAttribute("data-toggle", "dropdown");
                var newSpan3: any = document.createElement("span");
                newSpan3.classList.add("bx", "bx-dots-vertical-rounded", "iconaExtrMusic");
                var newDiv7: any = document.createElement("div");
                newDiv7.classList.add("dropdown-menu", "menuAccio");
                var newA3: any = document.createElement("a");
                newA3.id = idCanço;
                newA3.classList.add("dropdown-item", "opcioMenuAccio");
                newA3.value = idCanço;
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4: any = document.createElement("span");
                newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                var newP3: any = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");

                var likeado = 0;
                for (var z: number = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3: any = document.createTextNode("No m'agrada");
                        z = like.length
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3: any = document.createTextNode("M'agrada");
                    z = like.length

                }
                newP3.appendChild(textP3);
                var newA4: any = document.createElement("a");
                newA4.setAttribute("data-toggle", "modal");
                newA4.setAttribute("data-target", "#exampleModal");
                newA4.classList.add("dropdown-item", "opcioMenuAccio");
                newA4.onclick = function () { carregarSelectPlaylist(this); }
                var newSpan5: any = document.createElement("span");
                newSpan5.classList.add("bx", "bx-add-to-queue", "text-primary", "colIcona", "midaIcones");
                var newP4: any = document.createElement("p");
                newP4.classList.add("txtOpcionsUser");
                var textP4: any = document.createTextNode("Afegir a la playlist");
                newP4.appendChild(textP4);

                var tipusUsuari: any = localStorage.getItem("TipusUsuariSoundBox");
                if (tipusUsuari == 0) {
                    newSpan.style = "pointer-events: none;";
                    newA.style = "pointer-events: none;";
                    newA.href = "";
                    newA2.style = "pointer-events: none;";
                }
            }
            else {
                var newDiv: any = document.createElement("div")
                newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                var newDiv2: any = document.createElement("div");
                newDiv2.classList.add("card", "divCategoria");
                var newDiv3: any = document.createElement("div");
                newDiv3.classList.add("card-body", "imatgeMusica", catAtribut);
                var newH5: any = document.createElement("h5");
                newH5.classList.add("card-title", "modificarTextCanço");
                var textH5: any = document.createTextNode(nomCanço);
                newH5.appendChild(textH5);
                var newDiv4: any = document.createElement("div");
                newDiv4.classList.add("media", "divMedia");
                var newDiv5: any = document.createElement("div");
                newDiv5.classList.add("media-body", "zonaBotonsMusica");
                var newSpan: any = document.createElement("span");
                newSpan.classList.add("bx", "bx-play-circle");
                newSpan.value = ruta;
                newSpan.alt = artistaCanço;
                newSpan.required = nomCanço;
                newSpan.data = idCanço;
                newSpan.onclick = function () { reproduirCanço(this); };
                var newA: any = document.createElement("a");
                newA.href = ruta;
                newA.download = nomCanço;
                var newSpan2: any = document.createElement("span");
                newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");

                var newDiv6: any = document.createElement("div");
                newDiv6.classList.add("nav-item", "nav-profile", "dropdown");
                var newA2: any = document.createElement("a");
                newA2.href = "#";
                newA2.setAttribute("data-toggle", "dropdown");
                var newSpan3: any = document.createElement("span");
                newSpan3.classList.add("bx", "bx-dots-vertical-rounded", "iconaExtrMusic");
                var newDiv7: any = document.createElement("div");
                newDiv7.classList.add("dropdown-menu", "menuAccio");
                var newA3: any = document.createElement("a");
                newA3.id = idCanço;
                newA3.classList.add("dropdown-item", "opcioMenuAccio");
                newA3.value = idCanço;
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4: any = document.createElement("span");
                newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                var newP3: any = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");

                var likeado = 0;
                for (var z: number = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3: any = document.createTextNode("No m'agrada");
                        z = like.length
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3: any = document.createTextNode("M'agrada");
                    z = like.length

                }

                newP3.appendChild(textP3);
                var newA4: any = document.createElement("a");
                newA4.classList.add("dropdown-item", "opcioMenuAccio");
                newA4.value = idCanço;
                newA4.setAttribute("data-toggle", "modal");
                newA4.setAttribute("data-target", "#exampleModal");
                newA4.onclick = function () { carregarSelectPlaylist(this); }

                var newSpan5: any = document.createElement("span");
                newSpan5.classList.add("bx", "bx-add-to-queue", "text-primary", "colIcona", "midaIcones");
                var newP4: any = document.createElement("p");
                newP4.classList.add("txtOpcionsUser");
                var textP4: any = document.createTextNode("Afegir a la playlist");
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
            newA.appendChild(newSpan2)
            newDiv5.appendChild(newA);
            newDiv5.appendChild(newDiv6);
            newDiv4.appendChild(newDiv5);
            newDiv3.appendChild(newH5);
            newDiv3.appendChild(newDiv4);
            newDiv2.appendChild(newDiv3);
            newDiv.appendChild(newDiv2);

            divPareTop.appendChild(newDiv);
        }

        for (var c: number = 0; c < cançonsTopM.length; c++) {
            var idCanço: any = cançonsTopM[c].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço: any = cançonsTopM[c].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var nomGuardat: any = cançonsTopM[c].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipus: any = cançonsTopM[c].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var tipusCanço: any = cançonsTopM[c].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
            var artistaCanço: any = cançonsTopM[c].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var ruta: any = "../uploads/" + nomGuardat + "." + tipus;

            if (tipusCanço == 1) {
                var newDiv: any = document.createElement("div")
                newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                var newDiv2: any = document.createElement("div");
                newDiv2.classList.add("card", "divCategoria");
                var newDiv3: any = document.createElement("div");
                newDiv3.classList.add("card-body", "imatgeMusica", catAtribut);
                var newH5: any = document.createElement("h5");
                newH5.classList.add("card-title", "modificarTextCanço");
                var textH5: any = document.createTextNode(nomCanço);
                newH5.appendChild(textH5);
                var newDiv4: any = document.createElement("div");
                newDiv4.classList.add("media", "divMedia");
                var newDiv5: any = document.createElement("div");
                newDiv5.classList.add("media-body", "zonaBotonsMusica");
                var newSpan: any = document.createElement("span");
                newSpan.classList.add("bx", "bx-play-circle");
                newSpan.value = ruta;
                newSpan.alt = artistaCanço;
                newSpan.required = nomCanço;
                newSpan.data = idCanço;
                newSpan.onclick = function () { reproduirCanço(this); };
                var newA: any = document.createElement("a");
                newA.href = ruta;
                newA.download = nomCanço;
                var newSpan2: any = document.createElement("span");
                newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");

                var newDiv6: any = document.createElement("div");
                newDiv6.classList.add("nav-item", "nav-profile", "dropdown");
                var newA2: any = document.createElement("a");
                newA2.href = "#";
                newA2.setAttribute("data-toggle", "dropdown");
                var newSpan3: any = document.createElement("span");
                newSpan3.classList.add("bx", "bx-dots-vertical-rounded", "iconaExtrMusic");
                var newDiv7: any = document.createElement("div");
                newDiv7.classList.add("dropdown-menu", "menuAccio");
                var newA3: any = document.createElement("a");
                newA3.id = idCanço;
                newA3.classList.add("dropdown-item", "opcioMenuAccio");
                newA3.value = idCanço;
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4: any = document.createElement("span");
                newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                var newP3: any = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");

                var likeado = 0;
                for (var z: number = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3: any = document.createTextNode("No m'agrada");
                        z = like.length
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3: any = document.createTextNode("M'agrada");
                    z = like.length

                }
                newP3.appendChild(textP3);
                var newA4: any = document.createElement("a");
                newA4.setAttribute("data-toggle", "modal");
                newA4.setAttribute("data-target", "#exampleModal");
                newA4.classList.add("dropdown-item", "opcioMenuAccio");
                newA4.onclick = function () { carregarSelectPlaylist(this); }
                var newSpan5: any = document.createElement("span");
                newSpan5.classList.add("bx", "bx-add-to-queue", "text-primary", "colIcona", "midaIcones");
                var newP4: any = document.createElement("p");
                newP4.classList.add("txtOpcionsUser");
                var textP4: any = document.createTextNode("Afegir a la playlist");
                newP4.appendChild(textP4);

                var tipusUsuari: any = localStorage.getItem("TipusUsuariSoundBox");
                if (tipusUsuari == 0) {
                    newSpan.style = "pointer-events: none;";
                    newA.style = "pointer-events: none;";
                    newA.href = "";
                    newA2.style = "pointer-events: none;";
                }
            }
            else {
                var newDiv: any = document.createElement("div")
                newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                var newDiv2: any = document.createElement("div");
                newDiv2.classList.add("card", "divCategoria");
                var newDiv3: any = document.createElement("div");
                newDiv3.classList.add("card-body", "imatgeMusica", catAtribut);
                var newH5: any = document.createElement("h5");
                newH5.classList.add("card-title", "modificarTextCanço");
                var textH5: any = document.createTextNode(nomCanço);
                newH5.appendChild(textH5);
                var newDiv4: any = document.createElement("div");
                newDiv4.classList.add("media", "divMedia");
                var newDiv5: any = document.createElement("div");
                newDiv5.classList.add("media-body", "zonaBotonsMusica");
                var newSpan: any = document.createElement("span");
                newSpan.classList.add("bx", "bx-play-circle");
                newSpan.value = ruta;
                newSpan.alt = artistaCanço;
                newSpan.required = nomCanço;
                newSpan.data = idCanço;
                newSpan.onclick = function () { reproduirCanço(this); };
                var newA: any = document.createElement("a");
                newA.href = ruta;
                newA.download = nomCanço;
                var newSpan2: any = document.createElement("span");
                newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");

                var newDiv6: any = document.createElement("div");
                newDiv6.classList.add("nav-item", "nav-profile", "dropdown");
                var newA2: any = document.createElement("a");
                newA2.href = "#";
                newA2.setAttribute("data-toggle", "dropdown");
                var newSpan3: any = document.createElement("span");
                newSpan3.classList.add("bx", "bx-dots-vertical-rounded", "iconaExtrMusic");
                var newDiv7: any = document.createElement("div");
                newDiv7.classList.add("dropdown-menu", "menuAccio");
                var newA3: any = document.createElement("a");
                newA3.id = idCanço;
                newA3.classList.add("dropdown-item", "opcioMenuAccio");
                newA3.value = idCanço;
                newA3.onclick = function () { afegirLike(this); };
                var newSpan4: any = document.createElement("span");
                newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                var newP3: any = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");

                var likeado = 0;
                for (var z: number = 0; z < like.length; z++) {
                    if (like[z].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue == idCanço) {
                        if (newSpan4.classList.contains("bx-like")) {
                            newSpan4.classList.remove("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                        }
                        newSpan4.classList.add("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                        var textP3: any = document.createTextNode("No m'agrada");
                        z = like.length
                        likeado++;
                    }
                }
                if (likeado == 0) {
                    if (newSpan4.classList.contains("bx-dislike")) {
                        newSpan4.classList.remove("bx", "bx-dislike", "text-primary", "colIcona", "midaIcones");
                    }
                    newSpan4.classList.add("bx", "bx-like", "text-primary", "colIcona", "midaIcones");
                    var textP3: any = document.createTextNode("M'agrada");
                    z = like.length

                }

                newP3.appendChild(textP3);
                var newA4: any = document.createElement("a");
                newA4.classList.add("dropdown-item", "opcioMenuAccio");
                newA4.value = idCanço;
                newA4.setAttribute("data-toggle", "modal");
                newA4.setAttribute("data-target", "#exampleModal");
                newA4.onclick = function () { carregarSelectPlaylist(this); }

                var newSpan5: any = document.createElement("span");
                newSpan5.classList.add("bx", "bx-add-to-queue", "text-primary", "colIcona", "midaIcones");
                var newP4: any = document.createElement("p");
                newP4.classList.add("txtOpcionsUser");
                var textP4: any = document.createTextNode("Afegir a la playlist");
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
            newA.appendChild(newSpan2)
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

function reproduirCanço(ruta: any) {
    document.getElementById("nomA")?.innerHTML = ruta.alt;
    document.getElementById("titolM")?.innerHTML = ruta.required;

    document.getElementById("audio-1").src = ruta.value;
    document.getElementById("play")?.click();
    augmentarClicks(ruta.data);
}

function augmentarClicks(idCanço: any) {
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

function aplicarFiltre(nom: any) {
    var estatA: any = document.getElementById("filtrarPer").value;
    var catMinus: any = nom.toLowerCase();
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

function afegirLike(idCanço: any) {
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
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var controlarLike: any = xhttp.responseText.replace(/\s+/g, '');
        var arrOpcions: any = controlarLike.split('.');

        if (arrOpcions[1] == "-1") {
            document.getElementById(arrOpcions[0])?.firstChild.classList.remove("bx-dislike");
            document.getElementById(arrOpcions[0])?.firstChild.classList.add("bx-like");
            document.getElementById(arrOpcions[0])?.lastChild.innerHTML = "M'agrada";
        }
        else {
            document.getElementById(arrOpcions[0])?.firstChild.classList.remove("bx-like");
            document.getElementById(arrOpcions[0])?.firstChild.classList.add("bx-dislike");
            document.getElementById(arrOpcions[0])?.lastChild.innerHTML = "No m'agrada";
        }
    }
}

function carregarSelectPlaylist(idCanço:any){
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = llistesCarregades;
    xhttp.open('POST', '../php/controlador/carregarTotesPlaylist.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idC="+idCanço.value);
}

function llistesCarregades() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("llistatPlaylist")?.innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var divPare: any = document.getElementById("llistatPlaylist");
        var numP: any = xmlDoc.getElementsByTagName("playlist");
        for (var i: number = 0; i < numP.length; i++) {
            var idLlista: any = numP[i].getElementsByTagName("id_llista")[0].childNodes[0].nodeValue;
            var titolLlista: any = numP[i].getElementsByTagName("titol")[0].childNodes[0].nodeValue;
            var idCanço: any = numP[i].getElementsByTagName("idCanço")[0].childNodes[0].nodeValue;
            document.getElementById("idHidden").value = idCanço;
            var newOption: any = document.createElement("option");
            newOption.value = idLlista;
            var textOption: any = document.createTextNode(titolLlista);
            newOption.appendChild(textOption);
            divPare.appendChild(newOption);

        }
    }
}

function afegirPlaylist() {
    var idLlista: any = document.getElementById("llistatPlaylist").value;
    var idCançoo: any = document.getElementById("idHidden").value;

    if(idLlista == ""){
        swal("Error", "No tens cap playlist creada", "error");
    }
    else{
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
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var resultatPlaylist: any = xhttp.responseText;
        if (resultatPlaylist == -1) {
            swal("Cançó ja guardada", "Aquesta cançó ja està en la playlist", "info");
        }
        else{
            document.getElementById("btnCerrarModal")?.click();
        }
    }
}

function buscarNomCanço(nom: any) {
    var textBuscar: any = document.getElementById("buscarNom").value;
    var catMinus: any = nom.toLowerCase();

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
