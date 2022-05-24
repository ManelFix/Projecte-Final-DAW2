
function mostrar_like_canciones(id: number) {

    var xmlhttp: any;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var select = xmlhttp.responseText;

            if (select == 0) {

            } else {
                var select = xmlhttp.responseXML;
                console.log(select);

                var select2 = select.getElementsByTagName("seguido");

                var seguidos = '';
                var no_seguidos = '';

                for (var i = 0; i < select2.length; i++) {
                    seguidos = '<div class="col-md-3 grid-margin stretch-card">
                    <div class="card divCategoria">
                      <div class="card-body imatgeMusica cat1">
                        <h5 class="card-title">Cançó 1</h5>
                        <div class="media divMedia">
                          <div class="media-body zonaBotonsMusica">
                            <span class='bx bx-play-circle'></span>
                            <span class='bx bxs-download botonDescarrega'></span>
                            <div class="nav-item nav-profile dropdown">
                              <a href="#" data-toggle="dropdown" id="profileDropdown">
                                <span class='bx bx-dots-vertical-rounded iconaExtrMusic'></span>
                              </a>
                              <div class="dropdown-menu menuAccio">
                                <a class="dropdown-item opcioMenuAccio">
                                  <span class='bx bx-dislike text-primary colIcona midaIcones'></span>
                                  <p class="txtOpcionsUser">No m'agrada</p>
                                </a>
                                <a class="dropdown-item opcioMenuAccio">
                                  <span class='bx bx-add-to-queue text-primary colIcona midaIcones'></span>
                                  <p class="txtOpcionsUser">Afegir a la playlist</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>';
                }

                document.getElementById("artistas_seguidos")?.innerHTML = seguidos;


            }
        }
    };
    xmlhttp.open("GET", "../php/controlador/artistas_seguidos.php", true);
    xmlhttp.send();
}

function seguir(numeros: any) {

    var xmlhttp: any;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {

            location.reload();

        }
    };
    xmlhttp.open("POST", "../php/controlador/seguir.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("word=" + numeros);

}

function dejar_de_seguir(numeros: any) {

    var xmlhttp: any;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {

            location.reload();

        }
    };

    xmlhttp.open("POST", "../php/controlador/dejar_de_seguir.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("word=" + numeros);

}