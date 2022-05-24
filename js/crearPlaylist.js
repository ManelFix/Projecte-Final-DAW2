"use strict";
var xhttp;
var xmlDoc;
function crearPlaylist(idUsuari) {
    var nomP = document.getElementById("nomPlaylist").value;
    var descP = document.getElementById("descripcio").value;
    var tipusP = document.getElementById("iEstatAnim").value;
    if (nomP == "" || descP == "" || tipusP == "null") {
        alert("No poden haver-hi camps buits");
    }
    else {
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = playlistCreada;
        xhttp.open('POST', '../php/controlador/crearPlaylist.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("idU=" + idUsuari + "&" + "nomP=" + nomP + "&" + "descP=" + descP + "&" + "tipusP=" + tipusP);
    }
}
function playlistCreada() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        alert("Llista creada correctament");
        history.go(-1);
    }
}
