<?php
    include("BBDD.php");  
    $connexio=sql();
 
    $idUsuari = $_POST["idCompte"];

    $sql = "SELECT imatge, tipus FROM usuari WHERE id_usuari = '".$idUsuari."'";
    $r = mysqli_query($connexio,$sql);
    
    while($fila = mysqli_fetch_assoc($r)){
        if($fila["tipus"] == null && $fila["imatge"] == null){
            echo 0;
        }
        else{ 
            echo "data: ".$fila["tipus"].";base64,".base64_encode($fila["imatge"]);
        }
    }    

    mysqli_close($connexio);
?>