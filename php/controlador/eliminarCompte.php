<?php
    session_start();
    include("BBDD.php");  
    $connexio=sql();
     
    $sql = "DELETE FROM usuari WHERE id_usuari = '".$_SESSION['ses_id']."'";
    mysqli_query($connexio,$sql);

    mysqli_close($connexio);
?>