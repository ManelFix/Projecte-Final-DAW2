<?php
    include("BBDD.php");  
    $connexio=sql();

    $idUsuari = $_GET["idU"];
    $nomArtista = $_GET["nomA"];
    $tipusUsuari = $_GET["tipU"];
    $idUsuariConectat = $_SESSION["ses_id"];

    $sql = "SELECT * FROM usuari WHERE id_usuari = '".$idUsuari."' AND nom_usuari = '".$nomArtista."' AND premium = '".$tipusUsuari."' AND id_usuari != '".$idUsuariConectat."' AND admin != '1'";
    $r = mysqli_query($connexio,$sql);
    
    $fila = mysqli_num_rows($r);

    return $fila;

    mysqli_close($connexio);
?>