<?php
    header("Content-Type: application/xml");
    include("BBDD.php");  
    $connexio=sql();

    $categoria = $_POST["cat"];
    $textBuscar = $_POST["textB"];

    $sql = "SELECT * FROM canço WHERE genere = '".$categoria."' AND nom_canço LIKE '%$textBuscar%'";
    $r = mysqli_query($connexio,$sql);

    while($fila = mysqli_fetch_assoc($r)){
        $elementos_xml[] = "<musica>\n<id_canço>$fila[id_canço]</id_canço>\n<nom_canço>$fila[nom_canço]</nom_canço>\n<nom_guardat>$fila[nom_guardat]</nom_guardat>\n<tipus>$fila[tipus]</tipus>\n<artista>$fila[artista]</artista>\n<click>$fila[click]</click>\n<premium>$fila[premium]</premium>\n</musica>";                                                
    }
    
    $sql2 = "SELECT * FROM canço WHERE genere = '".$categoria."' AND nom_canço LIKE '%$textBuscar%' ORDER BY click DESC LIMIT 4";
    $r2 = mysqli_query($connexio,$sql2);
    
    while($fila2 = mysqli_fetch_assoc($r2)){
        $elementos_xml[] = "<musica2>\n<id_canço>$fila2[id_canço]</id_canço>\n<nom_canço>$fila2[nom_canço]</nom_canço>\n<nom_guardat>$fila2[nom_guardat]</nom_guardat>\n<tipus>$fila2[tipus]</tipus>\n<artista>$fila2[artista]</artista>\n<click>$fila2[click]</click>\n<premium>$fila2[premium]</premium>\n</musica2>";                                                
    }  
    
    echo "<Cançons>\n".implode("\n", $elementos_xml)."\n</Cançons>";
    
    mysqli_close($connexio);
?>