<?php
    include("BBDD.php");  
    $connexio=sql();

    $idUsuari = $_POST["idU"];

    $sql = "SELECT premium FROM usuari WHERE id_usuari = '".$idUsuari."'";
    $r = mysqli_query($connexio,$sql);
    
    while($fila = mysqli_fetch_assoc($r)){
        echo $fila["premium"];
    }        
    
    mysqli_close($connexio);
?>