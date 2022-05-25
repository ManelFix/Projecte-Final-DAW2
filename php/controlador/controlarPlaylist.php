<?php
    include("BBDD.php");  
    $connexio=sql();

    $idLlista = $_GET["idL"];
    $nomLlista = $_GET["nomL"];
    $idUsuari = $_SESSION["ses_id"];

    $sql = "SELECT * FROM llista WHERE id_llista = '".$idLlista."' AND titol = '".$nomLlista."' AND id_usuari = '".$idUsuari."'";
    $r = mysqli_query($connexio,$sql);
    
    $fila = mysqli_num_rows($r);

    return $fila;

    mysqli_close($connexio);
?>