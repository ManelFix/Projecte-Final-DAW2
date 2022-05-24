var xhttp:any;
var xmlDoc:any;

function anarCatalegNoRegistrat(){
    location.href = "php/exploraNoRegistrat.php";
}

function carregarMusica(nom:any){
    var catMinus:any = nom.toLowerCase();

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarMusica;
    xhttp.open('POST', '../php/controlador/carregarMusica.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("cat="+catMinus);
}

function mostrarMusica(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("musicaIdTot").innerHTML = "";
        document.getElementById("musicaIdPremium").innerHTML = "";
        document.getElementById("musicaIdTop").innerHTML = "";
        xmlDoc = xhttp.responseXML;

        var cançons:any = xmlDoc.getElementsByTagName("musica");
        var cançons2:any = xmlDoc.getElementsByTagName("musica2");
        var divPareTot:any = document.getElementById("musicaIdTot");
        var divParePremium:any = document.getElementById("musicaIdPremium");
        var divPareTop:any = document.getElementById("musicaIdTop");
        var tipusGenere:any = document.getElementById("nomCategoria")?.innerHTML;
        var catAtribut:any = "";

        switch(tipusGenere){
            case "Pop":
                catAtribut = "cat1";
            break;
            case "Rock":
                catAtribut = "cat2";
            break;
            case "Ambient":
                catAtribut = "cat3";
            break;
            case "Metal":
                catAtribut = "cat4";
            break;
            case "Punk":
                catAtribut = "cat5";
            break;
            case "Soul":
                catAtribut = "cat6";
            break;
            case "Jazz":
                catAtribut = "cat7";
            break;
            case "Clàssica":
                catAtribut = "cat8";
            break;
            case "Electrònica":
                catAtribut = "cat9";
            break;
            case "Indie":
                catAtribut = "cat10";
            break;
            case "Infantil":
                catAtribut = "cat11";
            break;
        }

        for(var i:number = 0; i < cançons.length; i++){
            var idCanço:any = cançons[i].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço:any = cançons[i].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var nomGuardat:any = cançons[i].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipus:any = cançons[i].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var tipusCanço:any = cançons[i].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
            var artistaCanço:any = cançons[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var ruta:any = "../uploads/" + nomGuardat + "." + tipus;

            var newDiv: any = document.createElement("div")
            newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
            var newDiv2: any = document.createElement("div");
            newDiv2.classList.add("card", "divCategoria");
            var newDiv3: any = document.createElement("div");
            newDiv3.classList.add("card-body", "imatgeMusica", catAtribut);
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
            newSpan.onclick= function(){reproduirCanço(this, idCanço);};
            var newA:any = document.createElement("a");
            newA.href = ruta;
            newA.download = nomCanço;
            var newSpan2: any = document.createElement("span");
            newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");

            if(tipusCanço == 1){
                newSpan.style = "pointer-events: none;";
                newA.style = "pointer-events: none;";
            }

            newDiv5.appendChild(newSpan);
            newA.appendChild(newSpan2)
            newDiv5.appendChild(newA);
            newDiv4.appendChild(newDiv5);
            newDiv3.appendChild(newH5);
            newDiv3.appendChild(newDiv4);
            newDiv2.appendChild(newDiv3);
            newDiv.appendChild(newDiv2);

            if(tipusCanço == 0){
                divPareTot.appendChild(newDiv);
            }
            if(tipusCanço == 1){
                divParePremium.appendChild(newDiv);
            }
        }

        for(var y:number = 0; y < cançons2.length; y++){
            var idCanço:any = cançons2[y].getElementsByTagName("id_canço")[0].childNodes[0].nodeValue;
            var nomCanço:any = cançons2[y].getElementsByTagName("nom_canço")[0].childNodes[0].nodeValue;
            var nomGuardat:any = cançons2[y].getElementsByTagName("nom_guardat")[0].childNodes[0].nodeValue;
            var tipus:any = cançons2[y].getElementsByTagName("tipus")[0].childNodes[0].nodeValue;
            var tipusCanço:any = cançons2[y].getElementsByTagName("premium")[0].childNodes[0].nodeValue;
            var artistaCanço:any = cançons2[y].getElementsByTagName("artista")[0].childNodes[0].nodeValue;
            var ruta:any = "../uploads/" + nomGuardat + "." + tipus;

            var newDiv: any = document.createElement("div")
            newDiv.classList.add("col-md-3", "grid-margin", "stretch-card");
            var newDiv2: any = document.createElement("div");
            newDiv2.classList.add("card", "divCategoria");
            var newDiv3: any = document.createElement("div");
            newDiv3.classList.add("card-body", "imatgeMusica", catAtribut);
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
            newSpan.onclick= function(){reproduirCanço(this, idCanço);};
            var newA:any = document.createElement("a");
            newA.href = ruta;
            newA.download = nomCanço;
            var newSpan2: any = document.createElement("span");
            newSpan2.classList.add("bx", "bxs-download", "iconaDescarrega");

            if(tipusCanço == 1){
                newSpan.style = "pointer-events: none;";
                newA.style = "pointer-events: none;";
            }

            newDiv5.appendChild(newSpan);
            newA.appendChild(newSpan2)
            newDiv5.appendChild(newA);
            newDiv4.appendChild(newDiv5);
            newDiv3.appendChild(newH5);
            newDiv3.appendChild(newDiv4);
            newDiv2.appendChild(newDiv3);
            newDiv.appendChild(newDiv2);

            divPareTop.appendChild(newDiv);
        }
    }
}

function reproduirCanço(ruta:any, idCanço:any){
    document.getElementById("nomA")?.innerHTML = ruta.alt;
    document.getElementById("titolM")?.innerHTML = ruta.required;

    document.getElementById("audio-1").src = ruta.value;
    document.getElementById("play")?.click();
    augmentarClicks(idCanço);
}

function augmentarClicks(idCanço:any){
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = carregarMusica;
    xhttp.open('POST', '../php/controlador/augmentarClicks.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idC="+idCanço);

}

function aplicarFiltre(nom:any){
    var estatA:any = document.getElementById("filtrarPer").value;
    var catMinus:any = nom.toLowerCase();

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarMusica;
    xhttp.open('POST', '../php/controlador/filtrarEstatAnimNR.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("estatAnim="+estatA+"&"+"cat="+catMinus);
}

function buscarNomCanço(nom:any){
    var textBuscar:any = document.getElementById("buscarNom").value;
    var catMinus:any = nom.toLowerCase();

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = mostrarMusica;
    xhttp.open('POST', '../php/controlador/filtrarNomBuscador.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("textB="+textBuscar+"&"+"cat="+catMinus);
}