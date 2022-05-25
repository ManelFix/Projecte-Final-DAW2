<?php
  //Controlar sessió
  session_start();
  $idUsuari = $_SESSION["ses_id"];

?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>SoundBox</title>
  <link rel="stylesheet" href="../recursosAdmin_Client/feather/feather.css">
  <link rel="stylesheet" href="../recursosAdmin_Client/ti-icons/css/themify-icons.css">
  <link rel="stylesheet" href="../recursosAdmin_Client/datatables.net-bs/dataTables.bootstrap.css">
  <link rel="stylesheet" href="../css/vertical-layout-light/style.css">
  <link rel="stylesheet" href="../css/client.css">
  <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
  <link rel="shortcut icon" href="../img/logo.svg" />
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body onload="agafarImatgeUsuari(<?= $idUsuari ?>);">
  <div class="container-scroller">
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row menuFons">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center noFonsColor">
        <a class="navbar-brand brand-logo mr-5"><img src="../img/logoAC.PNG" class="mr-2 logoSoundBox" alt="logoSoundBOX"/></a>
        <a class="navbar-brand brand-logo-mini"><img src="../img/logoMini.PNG" class="logoMiniSoundBox" alt="logoSoundBOX"/></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end noFonsColor">
        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span class="icon-menu colIcona"></span>
        </button>
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item nav-profile dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img id="iconaUsuari" src="../img/defaultUser.svg" class="colIcona" alt="profile"/>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a class="dropdown-item" href="configuracioUser.php">
                <span class='bx bx-cog text-primary colIcona midaIcones'></span>
                <p class="txtOpcionsUser">Configuració del compte</p>
              </a>
              <a class="dropdown-item" href="subscripcio.php">
                <span class='bx bxs-medal text-primary colIcona midaIcones'></span>
                <p class="txtOpcionsUser">Subscripció</p>
              </a>
              <a class="dropdown-item">
                <span class='bx bx-exit text-primary midaIcones'></span>
                <p class="txtOpcionsUser">Tancar sessió</p>
              </a>
            </div>
          </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="icon-menu colIcona"></span>
        </button>
      </div>
    </nav>
    <div class="container-fluid page-body-wrapper">    
      <nav class="sidebar sidebar-offcanvas sidebarColorFons" id="sidebar">
        <ul id="idNav" class="nav">
          <li class="nav-item">
            <a class="nav-link efecteHoverMenu" href="mevaMusica.php">
              <span class='bx bx-music estilIcones'></span>
              <span class="menu-title textSidebar">La meva música</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link efecteHoverMenu" href="explora.php">
              <span class='bx bx-book-open estilIcones iconPers'></span>
              <span class="menu-title textSidebar">Explora</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link efecteHoverMenu" href="magrada.php">
              <span class='bx bx-heart estilIcones iconPers'></span>
              <span class="menu-title textSidebar">M'agrada</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link efecteHoverMenu" href="artistes.php">
              <img src="../img/iconaArtist.svg" class="iconaArtista estilIcones iconPers" alt="iconaArtista">
              <span class="menu-title textSidebar">Usuaris</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link efecteHoverMenu" href="crearPlaylist.php">
              <span class='bx bxs-playlist estilIcones'></span>
              <span class="menu-title textSidebar textNav">Crear playlist</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="main-panel">
        <div class="content-wrapper mainCFons">
          <div class="row">
            <div class="col-md-12 grid-margin">
              <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 class="textIniciClient">Configuració del compte</h3>
                </div>
                <div class="col-12 col-xl-4">
                 <div class="justify-content-end d-flex">
                  <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <a id="dropdownMenuDate2" class="btn btn-sm btn-light btnAfegirC btnElimP" onclick="eliminarCompte(<?= $idUsuari ?>);">Eliminar compte</a>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card divCentrarConfig">
              <div class="card divCategoria divConfig">
                <div class="card-body imatgePerfil">
                  <img id="idImgPerfil" src="../img/provarArtista.svg" alt="imatgePerfil">
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 stretch-card divCentrarConfig">
              <div class="justify-content-end d-flex">
                <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                  <form method="post" enctype="multipart/form-data">
                    <div id="fitxerU" class="contenedor-btn-file bordeado extraClaseFitxer">
                      <p id="textModificar">Selecciona una imatge</p> 
                      <label for="btnNouFitxer"></label>
                      <input type="file" id="btnNouFitxer" name="iImatgeP" accept="image/*">
                    </div>
                    <input type="submit" id="modificarI" name="modImatge" value="Modificar imatge" class="btn btn-sm btn-light btnAfegirC btnPujarImg"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer footerFix">
            <div class="d-sm-flex justify-content-center justify-content-sm-between">
              <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2022. <span>SoundBOX</span> - Tots els drets reservats.</span>
            </div>
          </footer>
        </div>
      </div>
  </div>
  <script src="../recursosAdmin_Client/js/vendor.bundle.base.js"></script>
  <script src="../js/client/template.js"></script>
  <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
  <script src="../js/bootstrap.js" crossorigin="anonymous"></script>
  <script src="../js/client/off-canvas.js"></script>
  <script src="../js/configuracioCompte.js"></script>
</body>
</html>
<?php
  if(!empty($_POST["modImatge"])){
    require("controlador/BBDD.php");
    $connexio=sql();

    $imgN = $_FILES["iImatgeP"]["name"];
    $array = explode('.', $_FILES['iImatgeP']['name']);
    $ext = end($array);

    $imgN = file_get_contents($_FILES["iImatgeP"]["tmp_name"]);
    $imgN = $connexio->real_escape_string($imgN);

    $sql ="update usuari SET imatge = '".$imgN."', tipus = '".$ext."' WHERE id_usuari = '".$idUsuari."'";

    $connexio->query($sql);
 
    echo '<script language="javascript">alert("Imatge actualitzada");</script>';

    $connexio->close();

  }
?>

