<?php
    header("Content-Type: application/xml");    
    include("BBDD.php");  
    $connexio=sql();

    $sql = "SELECT l.id_llista, l.titol, l.descripcio, l.privat, u.nom_usuari FROM llista l JOIN usuari u ON (l.id_usuari = u.id_usuari)";
    $r = mysqli_query($connexio,$sql);
    
    while($fila = mysqli_fetch_assoc($r)){
        $elementos_xml[] = "<playlist>\n<id_llista>$fila[id_llista]</id_llista>\n<titol>$fila[titol]</titol>\n<descripcio>$fila[descripcio]</descripcio>\n<privat>$fila[privat]</privat>\n<nom_usuari>$fila[nom_usuari]</nom_usuari>\n</playlist>";                                                
    }      
    
    echo "<Llistes>\n".implode("\n", $elementos_xml)."\n</Llistes>";

    mysqli_close($connexio);
?>