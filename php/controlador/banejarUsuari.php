<?php
    include("BBDD.php");  
    $connexio=sql();

    $idUsuari = $_POST["idU"];

    $sql = "UPDATE usuari SET ban = '1' WHERE id_usuari = '".$idUsuari."'";
    mysqli_query($connexio,$sql);

    $sql2 = "SELECT * FROM usuari WHERE id_usuari = '".$idUsuari."'";
    $r = mysqli_query($connexio,$sql2);

    while($fila = mysqli_fetch_assoc($r)){
        echo $fila["nom_usuari"];
    } 
    
    mysqli_close($connexio);
?>