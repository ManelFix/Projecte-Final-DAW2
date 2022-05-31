var xhttp:any;
var xmlDoc:any;

function carregarCançons(idLlista:any){
    localStorage.setItem("IDLlistaSoundBox", idLlista);
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/carregarCançonsPlaylist.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idL="+idLlista);
}

function mostrarTaulaCançons(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("contingutTaulaMusica")?.innerHTML = "";
        xmlDoc = xhttp.responseXML;
        if(xmlDoc.getElementsByTagName("musica") != null){
            var cançons:any = xmlDoc.getElementsByTagName("musica");
        }
        var bodyTaula:any = document.getElementById("contingutTaulaMusica");

        for(var i:number = 0; i < cançons.length; i++){
            var idCanço:any = cançons[i].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço:any = cançons[i].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var genereCanço:any = cançons[i].getElementsByTagName("genere")[0].childNodes[0].nodeValue;
            var artistaCanço:any = cançons[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var estatAnimCanço:any = cançons[i].getElementsByTagName("estat_anim")[0].childNodes[0].nodeValue;
            var dataCanço:any = cançons[i].getElementsByTagName("data")[0].childNodes[0].nodeValue;
            var nomConcretCanço:any = cançons[i].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipusCanço:any = cançons[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var ruta:any = "../uploads/" + nomConcretCanço + "." + tipusCanço;

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
            newTd5.classList.add("css_seccioAccio");

            var newSpan:any = document.createElement("span");
            newSpan.classList.add("bx", "bx-play-circle", "iconaAccio", "iconaMevaMEspai");
            newSpan.title = "Reproduir";
            newSpan.value = nomConcretCanço + "." + tipusCanço;
            newSpan.alt = artistaCanço;
            newSpan.required = nomCanço;
            newSpan.data = idCanço;
            newSpan.onclick= function(){escoltarCanço(this);}

            var newA:any = document.createElement("a");
            newA.href = ruta;
            newA.download = nomCanço;
            var newSpan2:any = document.createElement("span");
            newSpan2.classList.add("bx", "bx-download", "iconaAccio", "iconaMevaMEspai");
            newSpan2.title = "Descarregar";

            var newSpan3:any = document.createElement("span");
            newSpan3.classList.add("bx", "bx-trash", "iconaAccio");
            newSpan3.title = "Eliminar"
            newSpan3.value = idCanço;
            newSpan3.onclick= function(){eliminarCanço(this);};
            
            newA.appendChild(newSpan2);
            newTd5.appendChild(newSpan);
            newTd5.appendChild(newA);
            newTd5.appendChild(newSpan3);

            newTr.appendChild(newTd);
            newTr.appendChild(newTd2);
            newTr.appendChild(newTd3);
            newTr.appendChild(newTd4);
            newTr.appendChild(newTd5);

            bodyTaula.appendChild(newTr);

        }
    }
}

function eliminarCanço(idEliminar:any){
    var opcio:any = confirm("Segur que vols eliminar aquesta cançó de la playlist?");
    if (opcio == true) {
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = cançoEliminada;
        xhttp.open('POST', '../php/controlador/eliminarCançoPlaylist.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("idC="+idEliminar.value+"&"+"idL="+localStorage.getItem("IDLlistaSoundBox"));
	}
}

function cançoEliminada(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        carregarCançons(localStorage.getItem("IDLlistaSoundBox"));
    }
}

function escoltarCanço(nomCançoConc:any){
    document.getElementById("nomA")?.innerHTML = nomCançoConc.alt;
    document.getElementById("titolM")?.innerHTML = nomCançoConc.required;

    document.getElementById("audio-1").src = "../uploads/" + nomCançoConc.value;
    document.getElementById("play")?.click();
    augmentarClicks(nomCançoConc.data);
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

function clicksAugmentats(){}

function buscarCanço(){
    var nomC:any = document.getElementById("iCançoTot").value;
    var idLlista:any = localStorage.getItem("IDLlistaSoundBox");
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/buscarCançoLlista.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomCanço="+nomC+"&idL="+idLlista);
}

function eliminarPlaylist(idLlista:any){
    var opcio:any = confirm("Segur que vols eliminar la playlist?");
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
        xhttp.send("idP="+idLlista);
    }
}

function playlistEliminada(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        history.go(-1);
    }
}