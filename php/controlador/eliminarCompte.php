<?php
    include("BBDD.php");  
    $connexio=sql();

    $idCompte = $_POST["idCompte"];
     
    $sql = "DELETE FROM usuari WHERE id_usuari = '".$idCompte."'";
    mysqli_query($connexio,$sql);

    mysqli_close($connexio);
?>