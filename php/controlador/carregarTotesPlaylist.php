<?php
    session_start();
    header("Content-Type: application/xml");    
    include("BBDD.php");  
    $connexio=sql();

    $idCanço = $_POST["idC"];

    $sql = "SELECT * FROM llista WHERE id_usuari = '".$_SESSION['ses_id']."'";
    $r = mysqli_query($connexio,$sql);
    
    while($fila = mysqli_fetch_assoc($r)){
        $elementos_xml[] = "<playlist>\n<id_llista>$fila[id_llista]</id_llista>\n<titol>$fila[titol]</titol>\n<idCanço>$idCanço</idCanço>\n</playlist>";                                                
    }      
    
    echo "<Llistes>\n".implode("\n", $elementos_xml)."\n</Llistes>";

    mysqli_close($connexio);
?>