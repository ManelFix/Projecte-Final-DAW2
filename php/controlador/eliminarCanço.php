<?php
    include("BBDD.php");  
    $connexio=sql();

    $idCanço = $_POST["idC"];
    $nomCanço = $_POST["nomC"];
     
    $sql = "DELETE FROM canço WHERE id_canço = '".$idCanço."'";
    mysqli_query($connexio,$sql);

    $ruta = "../../uploads/".$nomCanço;

    unlink($ruta);
    
    mysqli_close($connexio);
?>