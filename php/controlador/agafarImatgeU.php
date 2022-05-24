<?php
    include("BBDD.php");  
    $connexio=sql();
 
    $idUsuari = $_POST["idCompte"];
    if(!empty($_POST["cat"])){
        $categoria = $_POST["cat"];
    }

    $sql = "SELECT imatge, tipus FROM usuari WHERE id_usuari = '".$idUsuari."'";
    $r = mysqli_query($connexio,$sql);
    
    while($fila = mysqli_fetch_assoc($r)){
        if($fila["tipus"] == null && $fila["imatge"] == null){
            echo 0;
            if(!empty($_POST["cat"])){
                echo "\n";
                echo ".".$categoria;
            }
        }
        else{ 
            echo "data: ".$fila["tipus"].";base64,".base64_encode($fila["imatge"]);
            if(!empty($_POST["cat"])){
                echo "\n";
                echo ".".$categoria;
            }

        }
    }    

    mysqli_close($connexio);
?>