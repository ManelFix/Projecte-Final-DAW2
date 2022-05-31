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
    }
}
