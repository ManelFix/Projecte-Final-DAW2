<?php
    include("BBDD.php");  
    $connexio=sql();

    $idCanço = $_POST["idC"];
    $idLlista = $_POST["idL"];

    $sql2 = "SELECT * FROM canço WHERE id_canço = '".$idCanço."'";
    $r = mysqli_query($connexio,$sql2);

    while($fila = mysqli_fetch_assoc($r)){
        echo $fila["nom_canço"];
    }
     
    $sql = "UPDATE canço WHERE id_canço = '".$idCanço."'";
    mysqli_query($connexio,$sql);

    
    mysqli_close($connexio);
?>