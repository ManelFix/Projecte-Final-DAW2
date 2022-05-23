"use strict";
var xhttp;
var xmlDoc;
function veureSubscripcio(idU) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = introduirSubscripcio;
    xhttp.open('POST', '../php/controlador/veureSubscripcio.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idU=" + idU);
}
function introduirSubscripcio() {
    var _a, _b, _c, _d;
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var tipusSub = xhttp.responseText.replace(/\s+/g, '');
        if (tipusSub == 0) {
            (_a = document.getElementById("tipusSubs")) === null || _a === void 0 ? void 0 : _a.innerHTML = "Gratuïta";
            (_b = document.getElementById("tipusSubs")) === null || _b === void 0 ? void 0 : _b.style.color = "#F7AD19";
            document.getElementById("imgSubscripcio").src = "../img/imgNoPremium.png";
        }
        else {
            (_c = document.getElementById("tipusSubs")) === null || _c === void 0 ? void 0 : _c.innerHTML = "Prèmium";
            (_d = document.getElementById("tipusSubs")) === null || _d === void 0 ? void 0 : _d.style.color = "#429EBD";
            document.getElementById("imgSubscripcio").src = "../img/imgPremium.png";
        }
    }
}
