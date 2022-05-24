<?php
    header("Content-Type: application/xml");
    include("BBDD.php");  
    $connexio=sql();

    $idUsuari = $_POST["idU"];

    $sql = "SELECT * FROM llista WHERE id_usuari = '".$idUsuari."'";
    $r = mysqli_query($connexio,$sql);

    while($fila = mysqli_fetch_assoc($r)){
        $elementos_xml[] = "<llista>\n<id_llista>$fila[id_llista]</id_llista>\n<titol>$fila[titol]</titol>\n<descripcio>$fila[descripcio]</descripcio>\n<privat>$fila[privat]</privat>\n</llista>";                                                
    }        
    
    echo "<Playlist>\n".implode("\n", $elementos_xml)."\n</Playlist>";
    
    mysqli_close($connexio);
?>