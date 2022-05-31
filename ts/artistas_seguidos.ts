var xmlhttp: any;

function artistas_seguidos() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = carregarArtistes
    xmlhttp.open("GET", "../php/controlador/artistas_seguidos.php", true);
    xmlhttp.send();
} 

function carregarArtistes(){
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        document.getElementById("artistas_seguidos")?.innerHTML = "";
        document.getElementById("todos_los_artistas")?.innerHTML = "";
        var select = xmlhttp.responseText;
        if (select == 0) {

        } else {
            var select = xmlhttp.responseXML;

            var select2 = select.getElementsByTagName("seguido");

            for (var i = 0; i < select2.length; i++) {
                
                if (select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue == "data: ;base64,") {
                    var newDiv:any = document.createElement("div");
                    newDiv.classList.add("col-md-3","grid-margin","stretch-card");
                    var newDiv2:any = document.createElement("div");
                    newDiv2.classList.add("card","divCategoria");
                    var newDiv3:any = document.createElement("div");
                    newDiv3.classList.add("card-body","imatgeArtista","aut");
                    var newImg:any = document.createElement("img");
                    newImg.alt = "imatgePerfil";
                    newImg.src = "../img/provarArtista.svg";
                    var newH5:any = document.createElement("h5");
                    newH5.classList.add("card-title", "textNomUsuari");
                    var textH5:any = document.createTextNode(select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue);
                    newH5.appendChild(textH5);
                    var newDiv4:any = document.createElement("div");
                    newDiv4.classList.add("media", "divMedia");
                    var newDiv5:any = document.createElement("div");
                    newDiv5.classList.add("media-body", "zonaBotonsMusica");
                    var newA:any = document.createElement("a");
                    newA.href = "musicaUsuari.php?idU="+select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue+"&nomA="+select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue+"&tipU="+select2[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
                    var newSpan:any = document.createElement("span");
                    newSpan.classList.add("bx", "bx-show", "iconaUll");
                    newSpan.title = "Veure usuari";
                    var newSpan2:any = document.createElement("span");
                    newSpan2.classList.add("bx", "bx-user-x");
                    newSpan2.title = "Deixar de seguir";
                    newSpan2.value = select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue;
                    newSpan2.onclick = function(){dejar_de_seguir(this)}

                    newA.appendChild(newSpan);
                    newDiv5.appendChild(newA);
                    newDiv5.appendChild(newSpan2);
                    newDiv4.appendChild(newDiv5);
                    newDiv3.appendChild(newDiv4);
                    newDiv3.appendChild(newH5);
                    newDiv3.appendChild(newImg);
                    newDiv2.appendChild(newDiv3);
                    newDiv.appendChild(newDiv2);

                    document.getElementById("artistas_seguidos")?.appendChild(newDiv);

                } else {                    
                    var newDiv:any = document.createElement("div");
                    newDiv.classList.add("col-md-3","grid-margin","stretch-card");
                    var newDiv2:any = document.createElement("div");
                    newDiv2.classList.add("card","divCategoria");
                    var newDiv3:any = document.createElement("div");
                    newDiv3.classList.add("card-body","imatgeArtista","aut");
                    var newImg:any = document.createElement("img");
                    newImg.alt = "imatgePerfil";
                    newImg.src = select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue;
                    var newH5:any = document.createElement("h5");
                    newH5.classList.add("card-title", "textNomUsuari");
                    var textH5:any = document.createTextNode(select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue);
                    newH5.appendChild(textH5);
                    var newDiv4:any = document.createElement("div");
                    newDiv4.classList.add("media", "divMedia");
                    var newDiv5:any = document.createElement("div");
                    newDiv5.classList.add("media-body", "zonaBotonsMusica");
                    var newA:any = document.createElement("a");
                    newA.href = "musicaUsuari.php?idU="+select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue+"&nomA="+select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue+"&tipU="+select2[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
                    var newSpan:any = document.createElement("span");
                    newSpan.classList.add("bx", "bx-show", "iconaUll");
                    newSpan.title = "Veure usuari";
                    var newSpan2:any = document.createElement("span");
                    newSpan2.classList.add("bx", "bx-user-x");
                    newSpan2.title = "Deixar de seguir";
                    newSpan2.value = select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue;
                    newSpan2.onclick = function(){dejar_de_seguir(this)}

                    newA.appendChild(newSpan);
                    newDiv5.appendChild(newA);
                    newDiv5.appendChild(newSpan2);
                    newDiv4.appendChild(newDiv5);
                    newDiv3.appendChild(newDiv4);
                    newDiv3.appendChild(newH5);
                    newDiv3.appendChild(newImg);
                    newDiv2.appendChild(newDiv3);
                    newDiv.appendChild(newDiv2);

                    document.getElementById("artistas_seguidos")?.appendChild(newDiv);

                }
            }

            var select2 = select.getElementsByTagName("otros");

            for (var i = 0; i < select2.length; i++) {
                if (select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue == "data: ;base64,") {                    
                    var newDiv:any = document.createElement("div");
                    newDiv.classList.add("col-md-3","grid-margin","stretch-card");
                    var newDiv2:any = document.createElement("div");
                    newDiv2.classList.add("card","divCategoria");
                    var newDiv3:any = document.createElement("div");
                    newDiv3.classList.add("card-body","imatgeArtista","aut");
                    var newImg:any = document.createElement("img");
                    newImg.alt = "imatgePerfil";
                    newImg.src = "../img/provarArtista.svg";
                    var newH5:any = document.createElement("h5");
                    newH5.classList.add("card-title", "textNomUsuari");
                    var textH5:any = document.createTextNode(select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue);
                    newH5.appendChild(textH5);
                    var newDiv4:any = document.createElement("div");
                    newDiv4.classList.add("media", "divMedia");
                    var newDiv5:any = document.createElement("div");
                    newDiv5.classList.add("media-body", "zonaBotonsMusica");
                    var newA:any = document.createElement("a");
                    newA.href = "musicaUsuari.php?idU="+select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue+"&nomA="+select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue+"&tipU="+select2[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
                    var newSpan:any = document.createElement("span");
                    newSpan.classList.add("bx", "bx-show", "iconaUll");
                    newSpan.title = "Veure usuari";
                    var newSpan2:any = document.createElement("span");
                    newSpan2.classList.add("bx", "bx-user-plus");
                    newSpan2.title = "Seguir usuari";

                    newSpan2.value = select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue;
                    newSpan2.onclick = function(){seguir(this)}

                    newA.appendChild(newSpan);
                    newDiv5.appendChild(newA);
                    newDiv5.appendChild(newSpan2);
                    newDiv4.appendChild(newDiv5);
                    newDiv3.appendChild(newDiv4);
                    newDiv3.appendChild(newH5);
                    newDiv3.appendChild(newImg);
                    newDiv2.appendChild(newDiv3);
                    newDiv.appendChild(newDiv2);

                    document.getElementById("todos_los_artistas")?.appendChild(newDiv);
                
                } else {                    
                    var newDiv:any = document.createElement("div");
                    newDiv.classList.add("col-md-3","grid-margin","stretch-card");
                    var newDiv2:any = document.createElement("div");
                    newDiv2.classList.add("card","divCategoria");
                    var newDiv3:any = document.createElement("div");
                    newDiv3.classList.add("card-body","imatgeArtista","aut");
                    var newImg:any = document.createElement("img");
                    newImg.alt = "imatgePerfil";
                    newImg.src = select2[i].getElementsByTagName("imatge")[0].childNodes[0].nodeValue;
                    var newH5:any = document.createElement("h5");
                    newH5.classList.add("card-title", "textNomUsuari");
                    var textH5:any = document.createTextNode(select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue);
                    newH5.appendChild(textH5);
                    var newDiv4:any = document.createElement("div");
                    newDiv4.classList.add("media", "divMedia");
                    var newDiv5:any = document.createElement("div");
                    newDiv5.classList.add("media-body", "zonaBotonsMusica");
                    var newA:any = document.createElement("a");
                    newA.href = "musicaUsuari.php?idU="+select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue+"&nomA="+select2[i].getElementsByTagName("nom_usuari")[0].childNodes[0].nodeValue+"&tipU="+select2[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
                    var newSpan:any = document.createElement("span");
                    newSpan.classList.add("bx", "bx-show", "iconaUll");
                    newSpan.title = "Veure usuari";
                    var newSpan2:any = document.createElement("span");
                    newSpan2.classList.add("bx", "bx-user-plus");
                    newSpan2.title = "Seguir usuari";
                    newSpan2.value = select2[i].getElementsByTagName("id_usuari")[0].childNodes[0].nodeValue;
                    newSpan2.onclick = function(){seguir(this)}
                    
                    newA.appendChild(newSpan)
                    newDiv5.appendChild(newA);
                    newDiv5.appendChild(newSpan2);
                    newDiv4.appendChild(newDiv5);
                    newDiv3.appendChild(newDiv4);
                    newDiv3.appendChild(newH5);
                    newDiv3.appendChild(newImg);
                    newDiv2.appendChild(newDiv3);
                    newDiv.appendChild(newDiv2);

                    document.getElementById("todos_los_artistas")?.appendChild(newDiv);
                    
                }
            }

        }
    }
}

function seguir(numeros: any) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            artistas_seguidos();
        }
    };
    xmlhttp.open("POST", "../php/controlador/seguir.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("word=" + numeros.value);

}

function dejar_de_seguir(numeros: any) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            artistas_seguidos();
        }
    };

    xmlhttp.open("POST", "../php/controlador/dejar_de_seguir.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("word=" + numeros.value);

}

var xhttp:any;
var xmlDoc:any;

function buscarUsuari(){
    var nomU:any = document.getElementById("iUsuariTot").value;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = carregarArtistes;
    xmlhttp.open('POST', '../php/controlador/buscarUsuariClient.php', true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("nomUsuari="+nomU);
}