<?php
    session_start();
    header("Content-Type: application/xml");
    include("BBDD.php");  
    $connexio=sql();

    $sql = "SELECT * FROM llista WHERE id_usuari = '".$_SESSION['ses_id']."'";
    $r = mysqli_query($connexio,$sql);

    $res = mysqli_num_rows($r);
    
    if($res != 0){
        while($fila = mysqli_fetch_assoc($r)){
            if(!empty($_POST["cat"])){
                $elementos_xml[] = "<llista>\n<id_llista>$fila[id_llista]</id_llista>\n<titol>$fila[titol]</titol>\n<descripcio>$fila[descripcio]</descripcio>\n<privat>$fila[privat]</privat>\n<categoria>$_POST[cat]</categoria>\n</llista>";                                                
            }
            else{
                $elementos_xml[] = "<llista>\n<id_llista>$fila[id_llista]</id_llista>\n<titol>$fila[titol]</titol>\n<descripcio>$fila[descripcio]</descripcio>\n<privat>$fila[privat]</privat>\n</llista>";                                                
            }
        }        
        
        echo "<Playlist>\n".implode("\n", $elementos_xml)."\n</Playlist>";
    }
    else{
        echo 0;
        if(!empty($_POST["cat"])){
            echo ".".$_POST["cat"];
        }
    }

    
    mysqli_close($connexio);
?>