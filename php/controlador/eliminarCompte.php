<?php
    session_start();
    include("BBDD.php");  
    $connexio=sql();
     
    $sql = "DELETE FROM usuari WHERE id_usuari = '".$_SESSION['ses_id']."'";
    mysqli_query($connexio,$sql);

    $sql2 = "DELETE FROM seguiment_usuari WHERE id_usuari = '".$_SESSION['ses_id']."'";
    mysqli_query($connexio,$sql2);

    $sql3 = "DELETE FROM valoracio_canço WHERE id_usuari = '".$_SESSION['ses_id']."'";
    mysqli_query($connexio,$sql3);

    $sql4 = "DELETE FROM seguiment_usuari WHERE id_seguit = '".$_SESSION['ses_id']."'";
    mysqli_query($connexio,$sql4);

    $sql5 = "DELETE FROM llista WHERE id_usuari = '".$_SESSION['ses_id']."'";
    mysqli_query($connexio,$sql5);

    $sql6 = "DELETE FROM canço WHERE id_usuari = '".$_SESSION['ses_id']."'";
    mysqli_query($connexio,$sql6);

    session_destroy();

    mysqli_close($connexio);
?>