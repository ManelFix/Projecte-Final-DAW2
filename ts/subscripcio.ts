var xhttp:any;
var xmlDoc:any;

function veureSubscripcio(){
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = introduirSubscripcio;
    xhttp.open('POST', '../php/controlador/veureSubscripcio.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

function introduirSubscripcio(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var tipusSub:any = xhttp.responseText.replace(/\s+/g, '');

        if(tipusSub == 0){
            document.getElementById("tipusSubs")?.innerHTML = "Gratuïta";
            document.getElementById("tipusSubs")?.style.color = "#F7AD19";
            document.getElementById("imgSubscripcio").src = "../img/imgNoPremium.png";
        }
        else{
            document.getElementById("tipusSubs")?.innerHTML = "Prèmium";
            document.getElementById("tipusSubs")?.style.color = "#429EBD";
            document.getElementById("imgSubscripcio").src = "../img/imgPremium.png";

        }
        agafarImatgeUsuari();
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
        console.log(xhttp.responseText);
        if(rutaImatge == 0){
            document.getElementById("iconaUsuari").src = "../img/defaultUser.svg";
        }
        else{
            document.getElementById("iconaUsuari").src = rutaImatge;
            document.getElementById("iconaUsuari")?.classList.add("iconaPerfil");
        }
        carregarLlistesPropies();
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
            newA.href = 'playlist.php?idL=' + idLlista + "&nomL=" + titolLlista;
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
}
