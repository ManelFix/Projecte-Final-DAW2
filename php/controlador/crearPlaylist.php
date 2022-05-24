<?php
    include("BBDD.php");  
    $connexio=sql();

    $idUsuari = $_POST["idU"];
    $nomLlista = $_POST["nomP"];
    $descLlista = $_POST["descP"];
    $tipusLlista = $_POST["tipusP"];

    $sql = "INSERT INTO llista (id_usuari, titol, descripcio, privat) VALUES ('".$idUsuari."','".$nomLlista."','".$descLlista."','".$tipusLlista."')";
    mysqli_query($connexio,$sql);
    
    mysqli_close($connexio);
?>