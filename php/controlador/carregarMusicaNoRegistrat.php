<?php
    header("Content-Type: application/xml");    
    include("BBDD.php");  
    $connexio=sql();

    $categoria = $_POST["cat"];

    $sql = "SELECT * FROM canço WHERE genere = '".$categoria."'";
    $r = mysqli_query($connexio,$sql);
    
    while($fila = mysqli_fetch_assoc($r)){
        $elementos_xml[] = "<musica><id_canço>$fila[id_canço]</id_canço><nom_canço>$fila[nom_canço]</nom_canço><nom_guardat>$fila[nom_guardat]</nom_guardat><tipus>$fila[tipus]</tipus><artista>$fila[artista]</artista><click>$fila[click]</click><premium>$fila[premium]</premium></musica>";                                                
    }
    
    $sql2 = "SELECT * FROM canço WHERE genere = '".$categoria."' ORDER BY click DESC LIMIT 4";
    $r2 = mysqli_query($connexio,$sql2);

    while($fila2 = mysqli_fetch_assoc($r2)){
        $elementos_xml[] = "<musica2><id_canço>$fila2[id_canço]</id_canço><nom_canço>$fila2[nom_canço]</nom_canço><nom_guardat>$fila2[nom_guardat]</nom_guardat><tipus>$fila2[tipus]</tipus><artista>$fila2[artista]</artista><click>$fila2[click]</click><premium>$fila2[premium]</premium></musica2>";                                                
    }

    $sql3 = "SELECT * FROM canço WHERE genere = '".$categoria."' ORDER BY click_mens DESC LIMIT 4";
    $r3 = mysqli_query($connexio,$sql3);

    while($fila3 = mysqli_fetch_assoc($r3)){
        $elementos_xml[] = "<musicaTopM><id_canço>$fila3[id_canço]</id_canço><nom_canço>$fila3[nom_canço]</nom_canço><nom_guardat>$fila3[nom_guardat]</nom_guardat><tipus>$fila3[tipus]</tipus><artista>$fila3[artista]</artista><click>$fila3[click]</click><premium>$fila3[premium]</premium></musicaTopM>";                                                
    }
    
    echo "<Cançons>\n".implode("\n", $elementos_xml)."\n</Cançons>";

    mysqli_close($connexio);

?>