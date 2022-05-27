var xhttp:any;
var xmlDoc:any;

function agafarImatgeUsuari(tipusU:any, idUsuari:any){
    localStorage.setItem("tipusUsuariConcretSoundBox", tipusU);
    localStorage.setItem("idUsuariConcretSoundBox", idUsuari);
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

function mostrarImatgeUsuari(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var rutaImatge:any = xhttp.responseText.replace(/\s+/g, '');
        var arrOpcions:any = rutaImatge.split('.');
        if(arrOpcions[0] == 0){
            document.getElementById("iconaUsuari").src = "../img/defaultUser.svg";
        }
        else{
            document.getElementById("iconaUsuari").src = arrOpcions[0];
            document.getElementById("iconaUsuari")?.classList.add("iconaPerfil");
        }
        carregarLlistesPropies();
    }
}

function carregarCançons(){
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/carregarCançonsUsuari.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idU="+localStorage.getItem("idUsuariConcretSoundBox"));
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
            var artistaCanço:any = cançons[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var estatAnimCanço:any = cançons[i].getElementsByTagName("estat_anim")[0].childNodes[0].nodeValue;
            var dataCanço:any = cançons[i].getElementsByTagName("data")[0].childNodes[0].nodeValue;
            var nomConcretCanço:any = cançons[i].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipusCanço:any = cançons[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var tipusUsuari:any = cançons[i].getElementsByTagName("tipusUsuariC")[0].childNodes[0].nodeValue;
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
            newTd5.classList.add("nav-item", "nav-profile", "dropdown");
            var newA:any = document.createElement("a");
            newA.setAttribute("data-toggle", "dropdown");
            var newSpan:any = document.createElement("span");
            newSpan.classList.add("bx", "bx-dots-vertical-rounded", "iconaAccio");
            var newDiv:any = document.createElement("div");            
            newDiv.classList.add("dropdown-menu", "menuAccio");
            var newSpan2: any = document.createElement("span");
            newSpan2.classList.add("bx", "bxs-trash", "text-primary", "colIcona", "midaIcones");
            var newP: any = document.createElement("p");
            newP.classList.add("txtOpcionsUser");
            var newA3: any = document.createElement("a");
            newA3.classList.add("dropdown-item", "opcioMenuAccio");
            newA3.href = ruta;
            newA3.download = nomCanço;
            var newSpan3: any = document.createElement("span");
            newSpan3.classList.add("bx", "bxs-download", "text-primary", "colIcona", "midaIcones");
            var newP2: any = document.createElement("p");
            newP2.classList.add("txtOpcionsUser");
            var textP2: any = document.createTextNode("Descarregar");
            newP2.appendChild(textP2);
            var newA4: any = document.createElement("a");
            newA4.classList.add("dropdown-item", "opcioMenuAccio");
            newA4.value = nomConcretCanço + "." + tipusCanço
            newA4.alt = artistaCanço;
            newA4.required = nomCanço;
            newA4.data = idCanço;
            newA4.onclick = function () { escoltarCanço(this); };
            var newSpan4: any = document.createElement("span");
            newSpan4.classList.add("bx", "bx-play-circle", "text-primary", "colIcona", "midaIcones");
            var newP3: any = document.createElement("p");
            newP3.classList.add("txtOpcionsUser");
            var textP3: any = document.createTextNode("Reproduïr");
            newP3.appendChild(textP3);

            if(tipusUsuari == 0){
                if(localStorage.getItem("tipusUsuariConcretSoundBox") == 1){
                    newSpan.style = "pointer-events: none;";
                    newA.style = "pointer-events: none;";
                }
            }           

            newA4.appendChild(newSpan4);
            newA4.appendChild(newP3);
            newA3.appendChild(newSpan3);
            newA3.appendChild(newP2);

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

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarTaulaCançons;
    xhttp.open('POST', '../php/controlador/buscarCançoUsuari.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomCanço="+nomC+"&"+"idU="+localStorage.getItem("idUsuariConcretSoundBox"));
}

function carregarLlistesPropies(){
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

function mostrarLlistesPropies(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var resultatLlistes: any = xhttp.responseText.replace(/\s+/g, '');
        var arrOpcions: any = resultatLlistes.split('.');

        if(arrOpcions[0] != 0){
            xmlDoc = xhttp.responseXML;
            var llistes:any = xmlDoc.getElementsByTagName("llista");
            var navMenu:any = document.getElementById("idNav");
    
            for(var i:number = 0; i < llistes.length; i++){
                var idLlista:any = llistes[i].getElementsByTagName("id_llista")[0].childNodes[0].nodeValue;
                var titolLlista:any = llistes[i].getElementsByTagName("titol")[0].childNodes[0].nodeValue;
                var descLlista:any = llistes[i].getElementsByTagName("descripcio")[0].childNodes[0].nodeValue;
                var tipusLlista:any = llistes[i].getElementsByTagName("privat")[0].childNodes[0].nodeValue;
    
                var newLi:any = document.createElement("li");
                newLi.classList.add("nav-item");
                var newA:any = document.createElement("a");
                newA.href = 'playlist.php?idL=' + idLlista + "&nomL=" + titolLlista ;
                newA.classList.add("linkPlaylist");
                var newP:any = document.createElement("p");
                newP.classList.add("textSidebar", "textNav", "textPlaylist");
                var textP:any = document.createTextNode(titolLlista);
                newP.appendChild(textP);
    
                newA.appendChild(newP);
                newLi.appendChild(newA);
                navMenu.appendChild(newLi);
    
            }
        }
        carregarCançons();
    }
}