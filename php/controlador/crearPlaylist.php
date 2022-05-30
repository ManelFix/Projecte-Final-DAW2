<?php
    session_start();
    include("BBDD.php");  
    $connexio=sql();

    $nomLlista = $_POST["nomP"];
    $descLlista = $_POST["descP"];

    $sql = "INSERT INTO llista (id_usuari, titol, descripcio) VALUES ('".$_SESSION['ses_id']."','".$nomLlista."','".$descLlista."')";
    mysqli_query($connexio,$sql);
    
    mysqli_close($connexio);
?>