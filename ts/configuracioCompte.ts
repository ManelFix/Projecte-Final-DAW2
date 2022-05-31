var xhttp:any;
var xmlDoc:any;

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      document.getElementById("idImgPerfil").style="display: block;"
      reader.onload = function(e) {
        // Asignamos el atributo src a la tag de imagen
        $('#idImgPerfil').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
    else{
      document.getElementById("idImgPerfil").src= "../img/provarArtista.svg";
    }
  }

$("#btnNouFitxer").change(function() {
    readURL(this);
});

function eliminarCompte(){
    var opcio:any = confirm("Segur que vols eliminar el teu compte?");
    if (opcio == true) {
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = compteEliminada;
        xhttp.open('POST', '../php/controlador/eliminarCompte.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
	}
}

function compteEliminada(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        location.href="login.php";
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
        if(rutaImatge == 0){
            document.getElementById("idImgPerfil").src = "../img/provarArtista.svg";
            document.getElementById("iconaUsuari").src = "../img/defaultUser.svg";
        }
        else{
            document.getElementById("idImgPerfil").src = rutaImatge;
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

            var newLi:any = document.createElement("li");
            newLi.classList.add("nav-item");
            var newA:any = document.createElement("a");
            newA.href = 'playlist.php?idL=' + idLlista;
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