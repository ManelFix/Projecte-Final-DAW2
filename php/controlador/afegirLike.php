<?php
    include("BBDD.php");  
    $connexio=sql();

    $idUsuari = $_POST["idU"];
    $idCanço = $_POST["idC"];

    $sql = "INSERT INTO valoracio_canço (id_usuari, id_canço) VALUES ('".$idUsuari."','".$idCanço."')";
    mysqli_query($connexio,$sql);
    
    mysqli_close($connexio);
?>