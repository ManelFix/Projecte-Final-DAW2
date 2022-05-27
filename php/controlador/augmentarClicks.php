<?php
    include("BBDD.php");  
    $connexio=sql();

    $idCanço = $_POST["idC"];

    $sql = "UPDATE canço SET click = click+1 WHERE id_canço = '".$idCanço."'";
    mysqli_query($connexio,$sql);

    $sql2 = "UPDATE canço SET click_mens = click_mens+1 WHERE id_canço = '".$idCanço."'";
    mysqli_query($connexio,$sql2);
    
    mysqli_close($connexio);
?>