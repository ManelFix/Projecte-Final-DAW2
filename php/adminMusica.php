<?php
  //Sessiones, controlar que un usuario se meta aqui.
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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js" integrity="sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="../js/administrador.js"></script>
</head>
<body onload="carregarCançons();">
  <div class="container-scroller">
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row menuFons">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center noFonsColor">
        <a class="navbar-brand brand-logo mr-5"><img src="../img/logo.svg" class="mr-2" alt="logoSoundBOX"/></a>
        <a class="navbar-brand brand-logo-mini"><img src="../img/logo.svg" alt="logoSoundBOX"/></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end noFonsColor">
        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span class="icon-menu colIcona"></span>
        </button>
        <ul class="navbar-nav mr-lg-2">
          <li class="nav-item nav-search d-none d-lg-block">
            <div class="input-group">
              <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span class="input-group-text" id="search">
                  <span class="icon-search colIcona iconaLupa"></span>
                </span>
              </div>
              <input type="text" class="form-control inputBuscar" id="iCançoTot" placeholder="Buscar nom cançó" aria-label="search" aria-describedby="search" onkeyup="buscarCanço();">
            </div>
          </li>
        </ul>
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item nav-profile dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src="../img/defaultUser.svg" class="colIcona" alt="profile"/>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a class="dropdown-item" onclick="tancarSessio();">
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
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link efecteHoverMenu" href="adminUsuaris.php">
              <span class='bx bx-user-circle estilIcones'></span>
              <span class="menu-title textSidebar">Usuaris</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link efecteHoverMenu active" href="adminMusica.php">
            <span class='bx bx-music estilIcones'></span>
              <span class="menu-title textSidebar">Cançons</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link efecteHoverMenu" href="adminPlaylist.php">
              <span class='bx bxs-playlist estilIcones'></span>
              <span class="menu-title textSidebar">Playlists</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="main-panel">
        <div class="content-wrapper mainCFons extraEspai">
          <div class="row">
            <div class="col-md-12 grid-margin">
              <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 class="textIniciClient">Llistat de cançons</h3>
                </div>
                <div class="col-12 col-xl-4">
                 <div class="justify-content-end d-flex">
                  <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <a id="dropdownMenuDate2" class="btn btn-sm btn-light btnAfegirC btnElimP btnEspaiD" onclick="reiniciarClickM();">Reiniciar clics mensuals</a>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Reproductor fixed bottom -->
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div id="divAudio" class="audio-player-container">
              <audio src="" preload="metadata" id="audio-1"></audio>
              <div class="info-canco">
                <p id="nomA" class="artista">Artista</p>
                <span> - </span>
                <p id="titolM" class="titol">Títol</p>
              </div>
              <div class="reproductor">
                <div class="play-button play" id="play" onclick="play(1)">
                    <span class="bar bar-1"></span>
                    <span class="bar bar-2"></span>             
                </div>
                <span id="current-time">0:00</span>
                <input type="range" id="seek-slider" max="100" value="0">
                <span id="duration">0:00</span>
                <input type="range" id="volume-slider" max="100" value="50">
                <button class="mute-button unmuted" id="mute"><span id="iconoAudio" class="fa-solid fa-volume-high mute-icon"></span></button>
              </div>
            </div>
          </div>
          <!-- FIN Reproductor fixed bottom -->
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card divTaulaMusica">
                <div class="card-body">
                  <div class="table-responsive divTaulaMusicaPrin">
                    <table class="table tablaMisCanciones">
                      <thead>
                        <tr>
                          <th>Cançó</th>
                          <th>Gènere</th>
                          <th>Estat d'ànim</th>
                          <th>Data d'incorporació</th>
                          <th>Artista</th>
                          <th>Acció</th>
                        </tr>
                      </thead>
                      <tbody id="contingutTaulaMusica"></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer footerAdminUsuaris">
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
  <script type="text/javascript" src="../js/audioplayer.js" crossorigin="anonymous"></script>
  <script src="../js/client/off-canvas.js"></script>

</body>
</html>

