<?php
session_start();
if(isset($_SESSION['ses_id'])){
    if($_SESSION["ban"]==0){
        ?>
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../css/bootstrap.css">
            <link rel="stylesheet" href="../css/estilo.css">
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
            <link rel="shortcut icon" href="../img/logo.svg" type="image/x-icon">
            <title>SoundBOX</title>
        </head>
        <body>
            <section class="framePrincipal2 extraModNoPremium">
                <div class="divLogo">
                   <img src="../img/logo.svg" alt="logoSoundBOX">
                </div>
                <h1>Afegir cançó</h1>
                <form action="controlador/guardar_archivos.php" method="post" enctype="multipart/form-data">
                    <div class="frameSecundari2 extraModificacionsNoPremium">
                        <div class="divUserBorder">
                            <span class='bx bx-album iconesLoginRegister'></span>
                            <label for="iTitol" class="amagarLabel"></label>
                            <input id="iTitol" type="text" name="titolAfegir" placeholder="Títol" class="css_inputsLogReg">
                        </div>
                        <div class="divUserBorder">
                            <span class='bx bx-radio iconesLoginRegister'></span>
                            <label for="iGenere" class="amagarLabel"></label>
                            <select name="genereAfegir" id="iGenere" class="css_inputsLogReg">
                                <option>Donar funcionalitat</option>
                            </select>
                        </div>
                        <div class="divUserBorder">
                            <span class='bx bx-happy iconesLoginRegister'></span>
                            <label for="iEstatAnim" class="amagarLabel"></label>
                            <input id="iEstatAnim" type="text" name="estatAnimAfegir" placeholder="Estat d'ànim" class="css_inputsLogReg">
                        </div>
                        <div class="divUserBorder">
                            <span class='bx bx-time-five iconesLoginRegister'></span>
                            <label for="iDuracio" class="amagarLabel"></label>
                            <input id="iDuracio" type="text" name="duracioAfegir" placeholder="Duració" class="css_inputsLogReg">
                        </div>
                        <div class="divUserBorder">
                            <span class='bx bx-user-pin iconesLoginRegister'></span>
                            <label for="iArtista" class="amagarLabel"></label>
                            <input id="iArtista" type="text" name="artistaAfegir" placeholder="Artista" class="css_inputsLogReg">
                        </div>
                        <div>
                            <img src="../img/iconaCarpetaMusica.svg" alt="iconaCarpetaMusica" class="iconesLoginRegister iconaImatge">
                            <label for="iFitxer" class="amagarLabel"></label>
                            <input id="iFitxer" type="file" name="fileToUpload" accept="audio/*" class="css_inputsLogReg css_inputFile">
                        </div>
                    </div>
                    <input id="btnRegister" type="submit" value="Afegir" name="ferRegister" class="ibtnEnviar">            
                </form>
            </section>
            <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
            <script src="../js/bootstrap.js" crossorigin="anonymous"></script>
        </body>
        </html>
        <?php
    }else{
        header('Location: .php');
    }
}else{
    header('Location: login.php');
}
?>