
function iniciar_sesion(usr:any,passwrd:any) {

    var usuario = usr;
    var contrasenya = passwrd;

    var xmlhttp:any;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var select = xmlhttp.responseXML;
            if(select == 0){
                alert("Usuario o contrasenyas incorrectos");
            }else if(select == 1){
                location.href="../php/client.html";
            }
        }
    };
    xmlhttp.open("GET", "../php/controlador/iniciar_sesion.php", true);
    xmlhttp.send();

}

export {iniciar_sesion};