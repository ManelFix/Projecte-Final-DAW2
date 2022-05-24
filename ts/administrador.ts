var xhttp:any;
var xmlDoc:any;

function tancarSessio(){
    alert("Sessió tancada");
    location.href="login.php";
}

/* Web Admin Usuaris */

function carregarUsuaris(){
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

function mostrarTaulaUsuaris(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("contingutTaula")?.innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var usuaris:any = xmlDoc.getElementsByTagName("usuari");
        var bodyTaula:any = document.getElementById("contingutTaula");
        var nomPUser:any = "";
        var usuariBan:any = "";
        var accioBan:any = "";

        for(var i:number = 0; i < usuaris.length; i++){
            var idUsuari:any = usuaris[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue;
            var nomUsuari:any = usuaris[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue;
            var emailUsuari:any = usuaris[i].getElementsByTagName("email")[0].childNodes[0].nodeValue;
            var tipusUsuari:any = usuaris[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
            var banUsuari:any = usuaris[i].getElementsByTagName("ban")[0].childNodes[0].nodeValue;

            var newTr:any = document.createElement("tr");
            var newTd:any = document.createElement("td");
            newTd.classList.add("py-1","font-weight-bold");
            var textTd:any = document.createTextNode(nomUsuari);
            newTd.appendChild(textTd);
            var newTd2:any = document.createElement("td");
            var textTd2:any = document.createTextNode(emailUsuari);
            newTd2.appendChild(textTd2);
            var newTd3:any = document.createElement("td");
            if(tipusUsuari == 1){
                nomPUser = "Prèmium";
            }
            else{
                nomPUser = "No Prèmium";
            }
            var textTd3:any = document.createTextNode(nomPUser);
            newTd3.appendChild(textTd3);
            
            var newTd4:any = document.createElement("td");
            if(banUsuari == 1){
                usuariBan = "Banejat";
            }
            else{
                usuariBan = "No banejat";
            }
            var textTd4:any = document.createTextNode(usuariBan);
            newTd4.appendChild(textTd4);

            var newTd5:any = document.createElement("td");
            newTd5.classList.add("nav-item", "nav-profile", "dropdown");
            var newA:any = document.createElement("a");
            newA.href="#";
            newA.setAttribute("data-toggle", "dropdown");
            var newSpan:any = document.createElement("span");
            newSpan.classList.add("bx", "bx-dots-vertical-rounded", "iconaAccio");
            var newDiv:any = document.createElement("div");
            newDiv.classList.add("dropdown-menu", "menuAccio");
            var newA2:any = document.createElement("a");
            newA2.classList.add("dropdown-item", "opcioMenuAccio");
            newA2.value = idUsuari
            var newSpan2:any = document.createElement("span");
            if(banUsuari == 0){
                newSpan2.classList.add("bx", "bxs-shield-x", "text-primary", "colIcona", "midaIcones");
                newA2.onclick= function(){banejarUsuari(this);};
                accioBan = "Banejar"
            }
            else{
                newSpan2.classList.add("bx", "bxs-check-shield", "text-primary", "colIcona", "midaIcones");
                newA2.onclick= function(){desbanejarUsuari(this);};
                accioBan = "Desbanejar";
            }

            var newP:any = document.createElement("p");
            newP.classList.add("txtOpcionsUser");
            var textP:any = document.createTextNode(accioBan);
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

function banejarUsuari(usuariBan:any){
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = usuariBanejat;
    xhttp.open('POST', '../php/controlador/banejarUsuari.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idU="+usuariBan.value);
}

function desbanejarUsuari(usuariBan:any){
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = usuariDesbanejat;
    xhttp.open('POST', '../php/controlador/desbanejarUsuari.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idU="+usuariBan.value);
}

function usuariBanejat(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var usuariN:any = xhttp.responseText.replace(/\s+/g, '');
        alert("Usuari " + usuariN + " banejat");
        carregarUsuaris();
    }
}

function usuariDesbanejat(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var usuariN:any = xhttp.responseText.replace(/\s+/g, '');
        alert("Usuari " + usuariN + " desbanejat");
        carregarUsuaris();
    }
}

function buscarUsuari(){
    var nom:any = document.getElementById("iNomU").value;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaUsuaris;
    xhttp.open('POST', '../php/controlador/buscarUsuari.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomUsuari="+nom);
}

/* Admin Web Música */

function carregarCançons(){
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

function mostrarTaulaCançons(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("contingutTaulaMusica")?.innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var cançons:any = xmlDoc.getElementsByTagName("musica");
        var bodyTaula:any = document.getElementById("contingutTaulaMusica");

        for(var i:number = 0; i < cançons.length; i++){
            var idCanço:any = cançons[i].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço:any = cançons[i].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var genereCanço:any = cançons[i].getElementsByTagName("genere")[0].childNodes[0].nodeValue;
            var estatAnimCanço:any = cançons[i].getElementsByTagName("estat_anim")[0].childNodes[0].nodeValue;
            var dataCanço:any = cançons[i].getElementsByTagName("data")[0].childNodes[0].nodeValue;
            var artistaCanço:any = cançons[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var nomConcretCanço:any = cançons[i].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipusCanço:any = cançons[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;

            var newTr:any = document.createElement("tr");
            var newTd:any = document.createElement("td");
            newTd.classList.add("py-1","font-weight-bold");
            var textTd:any = document.createTextNode(nomCanço);
            newTd.appendChild(textTd);
            var newTd2:any = document.createElement("td");
            var textTd2:any = document.createTextNode(genereCanço);
            newTd2.appendChild(textTd2);
            var newTd3:any = document.createElement("td");
            var textTd3:any = document.createTextNode(estatAnimCanço);
            newTd3.appendChild(textTd3);
            var newTd4:any = document.createElement("td");
            var textTd4:any = document.createTextNode(dataCanço);
            newTd4.appendChild(textTd4);
            var newTd5:any = document.createElement("td");
            var textTd5:any = document.createTextNode(artistaCanço);
            newTd5.appendChild(textTd5);

            var newTd6:any = document.createElement("td");
            newTd6.classList.add("nav-item", "nav-profile", "dropdown");
            var newA:any = document.createElement("a");
            newA.href="#";
            newA.setAttribute("data-toggle", "dropdown");
            var newSpan:any = document.createElement("span");
            newSpan.classList.add("bx", "bx-dots-vertical-rounded", "iconaAccio");
            var newDiv:any = document.createElement("div");
            newDiv.classList.add("dropdown-menu", "menuAccio");
            var newA2:any = document.createElement("a");
            newA2.classList.add("dropdown-item", "opcioMenuAccio");
            newA2.value = idCanço
            newA2.onclick= function(){eliminarCanço(this);};
            var newSpan2:any = document.createElement("span");
            newSpan2.classList.add("bx", "bxs-trash", "text-primary", "colIcona", "midaIcones");
            var newP:any = document.createElement("p");
            newP.classList.add("txtOpcionsUser");
            var textP:any = document.createTextNode("Eliminar");
            newP.appendChild(textP);
            var newA3:any = document.createElement("a");
            newA3.classList.add("dropdown-item", "opcioMenuAccio");
            newA3.value = nomConcretCanço + "." + tipusCanço
            newA3.alt = artistaCanço;
            newA3.required = nomCanço;
            newA3.onclick= function(){escoltarCanço(this);};
            var newSpan3:any = document.createElement("span");
            newSpan3.classList.add("bx", "bx-play-circle", "text-primary", "colIcona", "midaIcones");
            var newP2:any = document.createElement("p");
            newP2.classList.add("txtOpcionsUser");
            var textP2:any = document.createTextNode("Reproduïr");
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

function eliminarCanço(idEliminar:any){
    var opcio:any = confirm("Segur que vols eliminar aquesta cançó?");
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
        xhttp.send("idC="+idEliminar.value);
	}
}

function cançoEliminada(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var nomC:any = xhttp.responseText.replace(/\s+/g, '');
        alert("Cançó " + nomC + " eliminat/da");
        carregarCançons();
    }
}

function escoltarCanço(nomCançoConc:any){
    document.getElementById("nomA")?.innerHTML = nomCançoConc.alt;
    document.getElementById("titolM")?.innerHTML = nomCançoConc.required;

    document.getElementById("audio-1").src = "../uploads/" + nomCançoConc.value;
    document.getElementById("play")?.click();
}

function buscarCanço(){
    var nomC:any = document.getElementById("iCançoTot").value;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/buscarCanço.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomCanço="+nomC);
}

function reiniciarClickM(){
    var opcio:any = confirm("Segur que vols reiniciar els clics mensuals?");
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

function clicksReiniciats(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        alert("Clicks mensuals reiniciats");
    }
}

/* Web Admin Totes les playlist */

function carregarPlaylists(){
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

function mostrarTaulaPlaylists(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("contingutPlaylists")?.innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var playlists:any = xmlDoc.getElementsByTagName("playlist");
        var bodyTaula:any = document.getElementById("contingutPlaylists");
        var nomTPlaylist:any = "";

        for(var i:number = 0; i < playlists.length; i++){
            var idLlista:any = playlists[i].getElementsByTagName("id_llista")[0].childNodes[0].nodeValue;
            var nomUsuari:any = playlists[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue;
            var titolLlista:any = playlists[i].getElementsByTagName("titol")[0].childNodes[0].nodeValue;
            var descLlista:any = playlists[i].getElementsByTagName("descripcio")[0].childNodes[0].nodeValue;
            var tipusLlista:any = playlists[i].getElementsByTagName("privat")[0].childNodes[0].nodeValue;

            var newTr:any = document.createElement("tr");
            var newTd:any = document.createElement("td");
            newTd.classList.add("py-1","font-weight-bold");
            var textTd:any = document.createTextNode(titolLlista);
            newTd.appendChild(textTd);
            var newTd2:any = document.createElement("td");
            var textTd2:any = document.createTextNode(descLlista);
            newTd2.appendChild(textTd2);
            var newTd3:any = document.createElement("td");
            if(tipusLlista == 1){
                nomTPlaylist = "Privat";
            }
            else{
                nomTPlaylist = "Públic";
            }
            var textTd3:any = document.createTextNode(nomTPlaylist);
            newTd3.appendChild(textTd3);
            var newTd4:any = document.createElement("td");
            var textTd4:any = document.createTextNode(nomUsuari);
            newTd4.appendChild(textTd4);

            var newTd5:any = document.createElement("td");
            newTd5.classList.add("nav-item", "nav-profile", "dropdown");
            var newA:any = document.createElement("a");
            newA.href="#";
            newA.setAttribute("data-toggle", "dropdown");
            var newSpan:any = document.createElement("span");
            newSpan.classList.add("bx", "bx-dots-vertical-rounded", "iconaAccio");
            var newDiv:any = document.createElement("div");
            newDiv.classList.add("dropdown-menu", "menuAccio");
            var newA2:any = document.createElement("a");
            newA2.classList.add("dropdown-item", "opcioMenuAccio");
            newA2.value = idLlista
            var newSpan2:any = document.createElement("span");
            newSpan2.classList.add("bx", "bxs-trash", "text-primary", "colIcona", "midaIcones");
            newA2.onclick= function(){eliminarPlaylist(this);};
            var newP:any = document.createElement("p");
            newP.classList.add("txtOpcionsUser");
            var textP:any = document.createTextNode("Eliminar");
            newP.appendChild(textP);
            var newA3:any = document.createElement("a");
            newA3.classList.add("dropdown-item", "opcioMenuAccio");
            newA3.href = "adminPlaylistConcret.php?idP="+idLlista+"&"+"nomP="+titolLlista;
            var newSpan3:any = document.createElement("span");
            newSpan3.classList.add("bx", "bx-play", "text-primary", "colIcona", "midaIcones");
            var newP2:any = document.createElement("p");
            newP2.classList.add("txtOpcionsUser");
            var textP2:any = document.createTextNode("Veure playlist");
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

function eliminarPlaylist(IDLlista:any){
    var opcio:any = confirm("Segur que vols eliminar aquesta playlist?");
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
        xhttp.send("idP="+IDLlista.value);
	}
}

function playlistEliminada(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var nomP:any = xhttp.responseText.replace(/\s+/g, '');
        alert("Playlist " + nomP + " eliminat/da");
        carregarPlaylists();
    }
}

function buscarPlaylist(){
    var nomP:any = document.getElementById("iBuscarPlaylist").value;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaPlaylists;
    xhttp.open('POST', '../php/controlador/buscarPlaylist.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomLlista="+nomP);
}

/* Web Admin Playlist Concret */

function carregarPlaylist(idPlaylist:any){
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/carregarPlaylistConcret.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idP="+idPlaylist);
}