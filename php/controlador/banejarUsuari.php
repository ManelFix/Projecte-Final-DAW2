<?php
    include("BBDD.php");  
    $connexio=sql();

    $idUsuari = $_POST["idU"];

    $sql = "UPDATE usuari SET ban = '1' WHERE id_usuari = '".$idUsuari."'";
    mysqli_query($connexio,$sql); 
    
    mysqli_close($connexio);
?>