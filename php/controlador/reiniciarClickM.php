<?php
    header("Content-Type: application/xml");
    include("BBDD.php");  
    $connexio=sql();

    $sql = "UPDATE canço SET click_mens = 0";
    mysqli_query($connexio,$sql);
    
    mysqli_close($connexio);
?>