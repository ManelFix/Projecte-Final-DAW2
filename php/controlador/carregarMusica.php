<?php
    session_start();
    if (isset($_SESSION['ses_id'])) {
      if ($_SESSION["ban"] == 0) {
    
    header("Content-Type: application/xml");    
    include("BBDD.php");  
    $connexio=sql();

    $categoria = $_POST["cat"];
    $premium = $_POST["tip"];

    if($premium == 1){
        if($categoria == "prèmium"){
            $sql = "SELECT * FROM canço WHERE premium = 1";
            $r = mysqli_query($connexio,$sql);
        }
        else{
            $sql = "SELECT * FROM canço WHERE genere = '".$categoria."'";
            $r = mysqli_query($connexio,$sql);
        }
    }
    else{
        $sql = "SELECT * FROM canço WHERE genere = '".$categoria."'";
        $r = mysqli_query($connexio,$sql);
    }
    
    while($fila = mysqli_fetch_assoc($r)){
        $elementos_xml[] = "<musica><id_canço>$fila[id_canço]</id_canço><nom_canço>$fila[nom_canço]</nom_canço><nom_guardat>$fila[nom_guardat]</nom_guardat><tipus>$fila[tipus]</tipus><artista>$fila[artista]</artista><click>$fila[click]</click><premium>$fila[premium]</premium></musica>";                                                
    }
    
    if($premium == 1){
        if($categoria == "prèmium"){
            $sql2 = "SELECT * FROM canço WHERE premium = 1 ORDER BY click DESC LIMIT 4";
            $r2 = mysqli_query($connexio,$sql2);
        }
        else{
            $sql2 = "SELECT * FROM canço WHERE genere = '".$categoria."' ORDER BY click DESC LIMIT 4";
            $r2 = mysqli_query($connexio,$sql2);
        }
    }
    else{
        $sql2 = "SELECT * FROM canço WHERE genere = '".$categoria."' ORDER BY click DESC LIMIT 4";
        $r2 = mysqli_query($connexio,$sql2);
    }

    while($fila2 = mysqli_fetch_assoc($r2)){
        $elementos_xml[] = "<musica2><id_canço>$fila2[id_canço]</id_canço><nom_canço>$fila2[nom_canço]</nom_canço><nom_guardat>$fila2[nom_guardat]</nom_guardat><tipus>$fila2[tipus]</tipus><artista>$fila2[artista]</artista><click>$fila2[click]</click><premium>$fila2[premium]</premium></musica2>";                                                
    }
    
    $sql3 = "SELECT * FROM valoracio_canço WHERE id_usuari = '".$_SESSION['ses_id']."'";
    $r3 = mysqli_query($connexio,$sql3);

    while($fila3 = mysqli_fetch_assoc($r3)){
        $elementos_xml[] = "<magrada>\n<id_valoracio>$fila3[id_valoracio]</id_valoracio>\n<id_usuari>$fila3[id_usuari]</id_usuari>\n<id_canço>$fila3[id_canço]</id_canço>\n</magrada>";                                                
    }
    
    echo "<Cançons>\n".implode("\n", $elementos_xml)."\n</Cançons>";

    mysqli_close($connexio);
} else {
    header('Location: .php');
} 
} else {
header('Location: ../login.php');
}

?>