<?php
    include("BBDD.php");  
    $connexio=sql();

    $idPlaylist = $_POST["idP"];
     
    $sql = "DELETE FROM llista WHERE id_llista = '".$idPlaylist."'";
    mysqli_query($connexio,$sql);
    
    mysqli_close($connexio);
?>