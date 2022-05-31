var xhttp:any;
var xmlDoc:any;

window.onload = carregarLlistesPropies();

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
    
                var newLi:any = document.createElement("li");
                newLi.classList.add("nav-item", "bugTransparent");
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
        agafarImatgeUsuari();
    }
}