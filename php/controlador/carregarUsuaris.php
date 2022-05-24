<?php
    header("Content-Type: application/xml");    
    include("BBDD.php");  
    $connexio=sql();

    $sql = "SELECT * FROM usuari WHERE admin = 0";
    $r = mysqli_query($connexio,$sql);
    
    while($fila = mysqli_fetch_assoc($r)){
        $elementos_xml[] = "<usuari>\n<id_usuari>$fila[id_usuari]</id_usuari>\n<nom_usuari>$fila[nom_usuari]</nom_usuari>\n<email>$fila[email]</email>\n<premium>$fila[premium]</premium>\n<ban>$fila[ban]</ban>\n</usuari>";                                                
    }      
    
    echo "<Usuaris>\n".implode("\n", $elementos_xml)."\n</Usuaris>";

    mysqli_close($connexio);
?>