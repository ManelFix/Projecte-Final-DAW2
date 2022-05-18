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
</head>
<body>
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
              <input type="text" class="form-control inputBuscar" id="navbar-search-input" placeholder="Buscar" aria-label="search" aria-describedby="search">
            </div>
          </li>
        </ul>
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item nav-profile dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src="../img/defaultUser.svg" class="colIcona" alt="profile"/>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a class="dropdown-item">
                <span class='bx bx-cog text-primary colIcona midaIcones'></span>
                <p class="txtOpcionsUser">Configuració del compte</p>
              </a>
              <a class="dropdown-item">
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
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link efecteHoverMenu active" href="mevaMusica.php">
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
              <span class="menu-title textSidebar">Artistes</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link efecteHoverMenu" href="crearPlaylist.php">
              <span class='bx bxs-playlist estilIcones'></span>
              <span class="menu-title textSidebar textNav">Crear playlist</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="linkPlaylist">
              <p class="textSidebar textNav textPlaylist">Playlist 1</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="linkPlaylist">
              <p class="textSidebar textNav textPlaylist">Playlist 2</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="linkPlaylist">
              <p class="textSidebar textNav textPlaylist">Playlist 3</p>
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
                  <h3 class="textIniciClient">Les meves cançons</h3>
                </div>
                <div class="col-12 col-xl-4">
                 <div class="justify-content-end d-flex">
                  <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <a id="dropdownMenuDate2" href="afegirMusicaNoPremium.php" class="btn btn-sm btn-light btnAfegirC">Afegir cançó</a>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin transparent">
              <div class="row">
                <div class="col-md-12 mb-12 stretch-card transparent">
                  <div class="card card-tale divPublicitat">
                    <div class="card-body divTextPubli">
                      <p class="fs-30 mb-4 text-center font-weight-bold">PUBLICITAT</p>
                      <p class="mb-2">Vols aparèixer aquí? Envia'ns un correu a ****</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                          <th>Duració</th>
                          <th>Data d'afegiment</th>
                          <th>Acció</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="py-1 font-weight-bold">Enough</td>
                          <td>Pop</td>
                          <td>Dramàtic</td>
                          <td>2:10</td>
                          <td>16/05/2022</td>
                          <td class="nav-item nav-profile dropdown">
                            <a href="#" data-toggle="dropdown" id="profileDropdown">
                              <span class='bx bx-dots-vertical-rounded iconaAccio'></span>
                            </a>
                            <div class="dropdown-menu menuAccio">
                              <a class="dropdown-item opcioMenuAccio">
                                <span class='bx bxs-trash text-primary colIcona midaIcones'></span>
                                <p class="txtOpcionsUser">Eliminar</p>
                              </a>
                              <a class="dropdown-item opcioMenuAccio">
                                <span class='bx bxs-download text-primary colIcona midaIcones'></span>
                                <p class="txtOpcionsUser">Descarregar?</p>
                              </a>
                              <a class="dropdown-item opcioMenuAccio">
                                <span class='bx bx-play-circle text-primary colIcona midaIcones'></span>
                                <p class="txtOpcionsUser">Reproduïr?</p>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="py-1 font-weight-bold">Enough</td>
                          <td>Pop</td>
                          <td>Dramàtic</td>
                          <td>2:10</td>
                          <td>16/05/2022</td>
                          <td class="nav-item nav-profile dropdown">
                            <a href="#" data-toggle="dropdown" id="profileDropdown">
                              <span class='bx bx-dots-vertical-rounded iconaAccio'></span>
                            </a>
                            <div class="dropdown-menu menuAccio">
                              <a class="dropdown-item opcioMenuAccio">
                                <span class='bx bxs-trash text-primary colIcona midaIcones'></span>
                                <p class="txtOpcionsUser">Eliminar</p>
                              </a>
                              <a class="dropdown-item opcioMenuAccio">
                                <span class='bx bxs-download text-primary colIcona midaIcones'></span>
                                <p class="txtOpcionsUser">Descarregar?</p>
                              </a>
                              <a class="dropdown-item opcioMenuAccio">
                                <span class='bx bx-play-circle text-primary colIcona midaIcones'></span>
                                <p class="txtOpcionsUser">Reproduïr?</p>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="py-1 font-weight-bold">Enough</td>
                          <td>Pop</td>
                          <td>Dramàtic</td>
                          <td>2:10</td>
                          <td>16/05/2022</td>
                          <td class="nav-item nav-profile dropdown">
                            <a href="#" data-toggle="dropdown" id="profileDropdown">
                              <span class='bx bx-dots-vertical-rounded iconaAccio'></span>
                            </a>
                            <div class="dropdown-menu menuAccio">
                              <a class="dropdown-item opcioMenuAccio">
                                <span class='bx bxs-trash text-primary colIcona midaIcones'></span>
                                <p class="txtOpcionsUser">Eliminar</p>
                              </a>
                              <a class="dropdown-item opcioMenuAccio">
                                <span class='bx bxs-download text-primary colIcona midaIcones'></span>
                                <p class="txtOpcionsUser">Descarregar?</p>
                              </a>
                              <a class="dropdown-item opcioMenuAccio">
                                <span class='bx bx-play-circle text-primary colIcona midaIcones'></span>
                                <p class="txtOpcionsUser">Reproduïr?</p>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="py-1 font-weight-bold">Enough</td>
                          <td>Pop</td>
                          <td>Dramàtic</td>
                          <td>2:10</td>
                          <td>16/05/2022</td>
                          <td class="nav-item nav-profile dropdown">
                              <a href="#" data-toggle="dropdown" id="profileDropdown">
                                <span class='bx bx-dots-vertical-rounded iconaAccio'></span>
                              </a>
                              <div class="dropdown-menu menuAccio">
                                <a class="dropdown-item opcioMenuAccio">
                                  <span class='bx bxs-trash text-primary colIcona midaIcones'></span>
                                  <p class="txtOpcionsUser">Eliminar</p>
                                </a>
                                <a class="dropdown-item opcioMenuAccio">
                                  <span class='bx bxs-download text-primary colIcona midaIcones'></span>
                                  <p class="txtOpcionsUser">Descarregar?</p>
                                </a>
                                <a class="dropdown-item opcioMenuAccio">
                                  <span class='bx bx-play-circle text-primary colIcona midaIcones'></span>
                                  <p class="txtOpcionsUser">Reproduïr?</p>
                                </a>
                              </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin transparent">
              <div class="row">
                <div class="col-md-12 mb-12 stretch-card transparent">
                  <div class="card card-tale divPublicitat">
                    <div class="card-body divTextPubli">
                      <p class="fs-30 mb-4 text-center font-weight-bold">PUBLICITAT</p>
                      <p class="mb-2">Vols aparèixer aquí? Envia'ns un correu a ****</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer">
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

</body>
</html>

