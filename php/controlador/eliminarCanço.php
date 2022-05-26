<?php
    include("BBDD.php");  
    $connexio=sql();

    $idCanço = $_POST["idC"];
     
    $sql = "DELETE FROM canço WHERE id_canço = '".$idCanço."'";
    mysqli_query($connexio,$sql);

    
    mysqli_close($connexio);
?>