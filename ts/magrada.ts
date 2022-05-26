var xhttp:any;
var xmlDoc:any;

function mostrar_like_canciones() {
    document.getElementById("filtrarPer").value = "none"; 
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarCançons
    xhttp.open("GET", "../php/controlador/canciones_seguidas.php", true);
    xhttp.send();
}

function mostrarCançons(){
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        document.getElementById("cançons")?.innerHTML = "";

        var select:any = xhttp.responseXML;
        var cançons:any = select.getElementsByTagName("seguido");
        var divPareTot:any = document.getElementById("cançons");

            for (var i = 0; i < cançons.length; i++) {
                var idCanço: any = cançons[i].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
                var nomCanço: any = cançons[i].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
                var nomGuardat: any = cançons[i].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
                var tipus: any = cançons[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
                var artistaCanço: any = cançons[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue;

                var ruta: any = "../uploads/" + nomGuardat + "." + tipus;
                var newDiv: any = document.createElement("div");
                newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
                var newDiv2: any = document.createElement("div");
                newDiv2.classList.add("card", "divCategoria");
                var newDiv3: any = document.createElement("div");
                newDiv3.classList.add("card-body", "imatgeMusica", "cat11");
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
                newA3.onclick = function () { treureLike(this); };
                var newSpan4: any = document.createElement("span");
                newSpan4.classList.add("bx", "bx-dislike" ,"text-primary", "colIcona", "midaIcones");
                var newP3: any = document.createElement("p");
                newP3.classList.add("txtOpcionsUser");
                var textP3: any = document.createTextNode("No m'agrada");

                newP3.appendChild(textP3);
                var newA4: any = document.createElement("a");
                newA4.value = idCanço;
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

                divPareTot.appendChild(newDiv);

                function reproduirCanço(ruta: any) {
                    document.getElementById("nomA")?.innerHTML = ruta.alt;
                    document.getElementById("titolM")?.innerHTML = ruta.required;

                    document.getElementById("audio-1").src = ruta.value;
                    document.getElementById("play")?.click();
                }
            }
            agafarImatgeUsuari()
    }
}

function treureLike(idCanço:any){
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = noMagrada;
    xhttp.open('POST', '../php/controlador/treureLike.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idC="+idCanço.value);
}

function noMagrada(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        mostrar_like_canciones();
    }
}

function agafarImatgeUsuari(){
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
    }
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
        mostrar_like_canciones();
    }
}

function buscarNomCanço(){
    var nomC:any = document.getElementById("buscarNom").value;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarCançons;
    xhttp.open('POST', '../php/controlador/buscarCançoPlaylist.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("nomCanço="+nomC);
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

function llistesCarregades(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("llistatPlaylist")?.innerHTML = "";
        xmlDoc = xhttp.responseXML;
        var divPare:any = document.getElementById("llistatPlaylist");
        var numP:any = xmlDoc.getElementsByTagName("playlist");
        for(var i:number = 0; i < numP.length; i++){
            var idLlista:any = numP[i].getElementsByTagName("id_llista")[0].childNodes[0].nodeValue;
            var titolLlista:any = numP[i].getElementsByTagName("titol")[0].childNodes[0].nodeValue;
            var idCanço:any = numP[i].getElementsByTagName("idCanço")[0].childNodes[0].nodeValue;
            document.getElementById("idHiddenn").value = idCanço;
            var newOption:any = document.createElement("option");
            newOption.value = idLlista;
            var textOption:any = document.createTextNode(titolLlista);
            newOption.appendChild(textOption);
            divPare.appendChild(newOption);
            
        }
    }
}

function afegirPlaylist(){
    var idLlista:any = document.getElementById("llistatPlaylist").value;
    var idCançoo:any = document.getElementById("idHiddenn").value;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = cançoAfegidaPlaylist;
    xhttp.open('POST', '../php/controlador/afegirCançoAPlaylist.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idL="+idLlista+"&"+"idC="+idCançoo);
}

function cançoAfegidaPlaylist(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var resultatPlaylist:any = xhttp.responseText;
        if(resultatPlaylist == -1){
            alert("Aquesta cançó ja està en la playlist");
        }
        else{
           document.getElementById("btnCerrarModal")?.click();
        }
    }
}

function aplicarFiltre() {
    var estatA: any = document.getElementById("filtrarPer").value;
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