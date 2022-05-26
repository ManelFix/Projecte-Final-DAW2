
function enterButton(event:any){
    if (event.keyCode == 13) {
        event.returnValue = false;
        document.getElementById("btnLogin")?.click();
    }
}

function iniciar_sesion() {

    var nombre = document.getElementById("usuari").value;
    var contrasenya = document.getElementById("contrasenya").value;

    var user = [nombre,contrasenya];

    if (nombre != "" && contrasenya != "") {

    var xmlhttp:any;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var select = xmlhttp.responseText;
                console.log(select);
                
            if(select == 0){
                alert("Usuari o contrasenyes incorrectes");
            }else if(select == 1){
                alert("Benvingut " + nombre);
                location.href="../php/mevaMusica.php";
            }else if(select == 2){
                alert("Benvingut " + nombre);
                location.href="../php/AdminUsuaris.php";
            }
        }
    };
    xmlhttp.open("POST", "../php/controlador/iniciar_sesion.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("word=" + user);
    } else {
        alert("L'usuari i la contrasenya no poden estar buits");
    }

}
