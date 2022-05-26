<?php
    session_start();
    include("BBDD.php");  
    $connexio=sql();

    $idCanço = $_POST["idC"];

    $sql2 = "DELETE FROM valoracio_canço WHERE id_usuari = '".$_SESSION['ses_id']."' AND id_canço = '".$idCanço."'";
    mysqli_query($connexio,$sql2);
    
    mysqli_close($connexio);
?>