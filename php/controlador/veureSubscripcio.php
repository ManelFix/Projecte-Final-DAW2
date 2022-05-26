<?php
    session_start();
    include("BBDD.php");  
    $connexio=sql();

    $sql = "SELECT premium FROM usuari WHERE id_usuari = '".$_SESSION['ses_id']."'";
    $r = mysqli_query($connexio,$sql);
    
    while($fila = mysqli_fetch_assoc($r)){
        echo $fila["premium"];
    }        
    
    mysqli_close($connexio);
?>