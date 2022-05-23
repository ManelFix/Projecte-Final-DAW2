<?php
    include("BBDD.php");  
    $connexio=sql();

    $idPlaylist = $_POST["idP"];

    $sql2 = "SELECT * FROM llista WHERE id_llista = '".$idPlaylist."'";
    $r = mysqli_query($connexio,$sql2);

    while($fila = mysqli_fetch_assoc($r)){
        echo $fila["titol"];
    }
     
    $sql = "DELETE FROM llista WHERE id_llista = '".$idPlaylist."'";
    mysqli_query($connexio,$sql);
    
    mysqli_close($connexio);
?>