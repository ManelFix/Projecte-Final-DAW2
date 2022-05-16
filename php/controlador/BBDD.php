<?php

function sql(){
    $servidor="localhost"; 
    $usuari="root"; 
    $clau="";  
    $bbdd="soundbox";
    $connexio=mysqli_connect($servidor, $usuari, $clau,$bbdd);

    return $connexio;
}

?>

