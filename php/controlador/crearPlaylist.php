<?php
    session_start();
    include("BBDD.php");  
    $connexio=sql();

    $nomLlista = $_POST["nomP"];
    $descLlista = $_POST["descP"];
    $tipusLlista = $_POST["tipusP"];

    $sql = "INSERT INTO llista (id_usuari, titol, descripcio, privat) VALUES ('".$_SESSION['ses_id']."','".$nomLlista."','".$descLlista."','".$tipusLlista."')";
    mysqli_query($connexio,$sql);
    
    mysqli_close($connexio);
?>