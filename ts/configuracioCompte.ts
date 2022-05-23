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

// El listener va asignado al input
$("#btnNouFitxer").change(function() {
    readURL(this);
});

function eliminarCompte(idEliminar:any){
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
        xhttp.send("idCompte="+idEliminar);
	}
}

function compteEliminada(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        alert("Compte eliminada");
        //Eliminar sessió en el php eliminarCompte.php
        location.href="login.php";
    }
}

function agafarImatgeUsuari(idUsuari:any){
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarImatgeUsuari;
    xhttp.open('POST', '../php/controlador/agafarImatgeU.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idCompte="+idUsuari);
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
            document.getElementById("iconaUsuari").style = "height: auto !important; width: 3.5rem !important;"
        }
    }
}