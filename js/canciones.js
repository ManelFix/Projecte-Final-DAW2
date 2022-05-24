"use strict";
function mostrar_like_canciones(id) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        var _a;
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var select = xmlhttp.responseText;
            if (select == 0) {
            }
            else {
                var select = xmlhttp.responseXML;
                console.log(select);
                var select2 = select.getElementsByTagName("seguido");
                var seguidos = '';
                var no_seguidos = '';
                for (var i = 0; i < select2.length; i++) {
                    seguidos = '<div class="col-md-3 grid-margin stretch-card">
                        < div;
                    var default_1 = /** @class */ (function () {
                        function default_1() {
                        }
                        return default_1;
                    }());
                    "card divCategoria" >
                        /** @class */ (function () {
                            function class_1() {
                            }
                            return class_1;
                        }());
                    "card-body imatgeMusica cat1" >
                        /** @class */ (function () {
                            function class_2() {
                            }
                            return class_2;
                        }());
                    "card-title" > Cançó;
                    1 < /h5>
                        < div;
                    var default_2 = /** @class */ (function () {
                        function default_2() {
                        }
                        return default_2;
                    }());
                    "media divMedia" >
                        /** @class */ (function () {
                            function class_3() {
                            }
                            return class_3;
                        }());
                    "media-body zonaBotonsMusica" >
                        /** @class */ (function () {
                            function class_4() {
                            }
                            return class_4;
                        }());
                    'bx bx-play-circle' > /span>
                        < span;
                    var default_3 = /** @class */ (function () {
                        function default_3() {
                        }
                        return default_3;
                    }());
                    'bx bxs-download botonDescarrega' > /span>
                        < div;
                    var default_4 = /** @class */ (function () {
                        function default_4() {
                        }
                        return default_4;
                    }());
                    "nav-item nav-profile dropdown" >
                        href;
                    "#";
                    data - toggle;
                    "dropdown";
                    id = "profileDropdown" >
                        /** @class */ (function () {
                            function class_5() {
                            }
                            return class_5;
                        }());
                    'bx bx-dots-vertical-rounded iconaExtrMusic' > /span>
                        < /a>
                        < div;
                    var default_5 = /** @class */ (function () {
                        function default_5() {
                        }
                        return default_5;
                    }());
                    "dropdown-menu menuAccio" >
                        /** @class */ (function () {
                            function class_6() {
                            }
                            return class_6;
                        }());
                    "dropdown-item opcioMenuAccio" >
                        /** @class */ (function () {
                            function class_7() {
                            }
                            return class_7;
                        }());
                    'bx bx-dislike text-primary colIcona midaIcones' > /span>
                        < p;
                    var default_6 = /** @class */ (function () {
                        function default_6() {
                        }
                        return default_6;
                    }());
                    "txtOpcionsUser" > No;
                    m;
                    'agrada</p>
                        < /a>
                        < a;
                    var default_7 = /** @class */ (function () {
                        function default_7() {
                        }
                        return default_7;
                    }());
                    "dropdown-item opcioMenuAccio" >
                        /** @class */ (function () {
                            function class_8() {
                            }
                            return class_8;
                        }());
                    'bx bx-add-to-queue text-primary colIcona midaIcones' > /span>
                        < p;
                    var default_8 = /** @class */ (function () {
                        function default_8() {
                        }
                        return default_8;
                    }());
                    "txtOpcionsUser" > Afegir;
                    a;
                    la;
                    playlist < /p>
                        < /a>
                        < /div>
                        < /div>
                        < /div>
                        < /div>
                        < /div>
                        < /div>
                        < /div>';;
                }
                (_a = document.getElementById("artistas_seguidos")) === null || _a === void 0 ? void 0 : _a.innerHTML = seguidos;
            }
        }
    };
    xmlhttp.open("GET", "../php/controlador/artistas_seguidos.php", true);
    xmlhttp.send();
}
function seguir(numeros) {
    var xmlhttp;
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
function dejar_de_seguir(numeros) {
    var xmlhttp;
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
