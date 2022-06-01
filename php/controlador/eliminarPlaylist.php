<?php
    include("BBDD.php");  
    $connexio=sql();

    $idPlaylist = $_POST["idP"];
     
    $sql = "DELETE FROM llista WHERE id_llista = '".$idPlaylist."'";
    mysqli_query($connexio,$sql);

    $sql2 = "DELETE FROM pertenencia WHERE id_llista = '".$idPlaylist."'";
    mysqli_query($connexio,$sql2);
    
    mysqli_close($connexio);
?>