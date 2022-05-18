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
    <link rel="shortcut icon" href="../img/logo.svg" type="image/x-icon">
    <title>SoundBOX</title>
</head>
<body>
    <div class="divHome">
        <a class="btn btn-primary" href="../index.php"><span class='bx bx-home'></span>Tornar enrere</a>
    </div>
    <section class="framePrincipal">
        <div class="divLogo">
           <img src="../img/logo.svg" alt="logoSoundBOX">
        </div>
        <h1>Inicia Sessió</h1>
        <form method="post">
            <div class="frameSecundari">
                <div class="divUserBorder">
                    <span class='bx bx-user iconesLoginRegister'></span>
                    <label for="usuari" class="amagarLabel"></label>
                    <input id="usuari" type="text" name="usuariL" placeholder="Usuari" class="css_inputsLogReg">
                </div>
                <div>
                    <span class='bx bx-lock-alt iconesLoginRegister'></span>
                    <label for="contrasenya" class="amagarLabel"></label>
                    <input id="contrasenya" type="password" name="passwL" placeholder="Contrasenya" class="css_inputsLogReg">
                </div>
            </div>
            <h2 class="titolNoCompte">No tens un compte creat? <a href="register.php">Registrat</a></h2>
            <input id="btnLogin" type="button" value="Login" name="ferLogin" class="ibtnEnviar" onclick="iniciar_sesion()">       
        </form>
    </section>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
    <script src="../js/bootstrap.js" crossorigin="anonymous"></script>
</body>
</html>