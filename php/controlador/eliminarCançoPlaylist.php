<?php
    include("BBDD.php");  
    $connexio=sql();

    $idCanço = $_POST["idC"];
    $idLlista = $_POST["idL"];
     
    $sql = "DELETE FROM pertenencia WHERE id_canço = '".$idCanço."' AND id_llista = '".$idLlista."'";
    mysqli_query($connexio,$sql);

    
    mysqli_close($connexio);
?>