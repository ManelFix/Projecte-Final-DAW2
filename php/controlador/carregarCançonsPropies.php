<?php
    header("Content-Type: application/xml");    
    include("BBDD.php");  
    $connexio=sql();

    $idUsuari = $_POST["idU"];

    $sql = "SELECT * FROM canço WHERE id_usuari = '".$idUsuari."'";
    $r = mysqli_query($connexio,$sql);
    
    while($fila = mysqli_fetch_assoc($r)){
        $elementos_xml[] = "<musica>\n<id_canço>$fila[id_canço]</id_canço>\n<nom_canço>$fila[nom_canço]</nom_canço>\n<genere>$fila[genere]</genere>\n<estat_anim>$fila[estat_anim]</estat_anim>\n<data>$fila[data]</data>\n<artista>$fila[artista]</artista>\n<nom_guardat>$fila[nom_guardat]</nom_guardat>\n<tipus>$fila[tipus]</tipus>\n</musica>";                                                
    }        
    
    echo "<Cançons>\n".implode("\n", $elementos_xml)."\n</Cançons>";

    mysqli_close($connexio);
?>