<?php
session_start();
if (isset($_SESSION['ses_id'])) {
?>

    <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/bootstrap.css">
        <link rel="stylesheet" href="../css/estilo.css">
        <script src="../js/iniciar_sesion.js"></script>
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
        <link rel="shortcut icon" href="../img/favicon.png" />
        <title>SoundBOX</title>
        <script src="../js/crearPlaylist.js"></script>
    </head>

    <body>
        <div class="divHome">
            <a class="btn btn-primary" href="mevaMusica.php"><span class='bx bx-home'></span>Tornar enrere</a>
        </div>
        <section class="framePrincipal espaiPlaylist">
            <div class="divLogo">
                <img src="../img/logoForms.PNG" alt="logoSoundBOX">
            </div>
            <h1>Nova Playlist</h1>
            <form method="post">
                <div class="frameSecundari">
                    <div class="divUserBorder">
                        <span class='bx bxs-videos iconesLoginRegister'></span>
                        <label for="nomPlaylist" class="amagarLabel"></label>
                        <input id="nomPlaylist" type="text" name="nomP" placeholder="Nom" class="css_inputsLogReg">
                    </div>
                    <div class="divUserBorder">
                        <span class='bx bx-detail iconesLoginRegister'></span>
                        <label for="descripcio" class="amagarLabel"></label>
                        <input id="descripcio" type="text" name="descP" placeholder="Descripció" class="css_inputsLogReg">
                    </div>
                </div>
                <input id="btnPlaylist" type="button" value="Crear" name="crearPl" class="ibtnEnviar" onclick="crearPlaylist();">
            </form>
        </section>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
        <script src="../js/bootstrap.js" crossorigin="anonymous"></script>
    </body>

    </html>
<?php


} else {
    header('Location: login.php');
}
?>