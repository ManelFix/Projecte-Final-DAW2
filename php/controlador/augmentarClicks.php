<?php
    include("BBDD.php");  
    $connexio=sql();

    $idCanço = $_POST["idC"];

    $sql = "UPDATE canço SET click = click+1 WHERE id_canço = '".$idCanço."'";
    mysqli_query($connexio,$sql);
    
    mysqli_close($connexio);
?>