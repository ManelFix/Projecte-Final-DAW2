<?php
    session_start();
    header("Content-Type: application/xml");
    include("BBDD.php");  
    $connexio=sql();

    $cançoNom = $_POST["nomCanço"];

    $sql = "SELECT can.id_canço,can.nom_canço, can.nom_guardat,can.tipus,can.artista FROM canço can left join valoracio_canço val ON (can.id_canço = val.id_canço) WHERE val.id_usuari =".$_SESSION['ses_id']." AND can.nom_canço LIKE '%$cançoNom%'";
    $r = mysqli_query($connexio,$sql);

    while($fila = mysqli_fetch_assoc($r)){
        $elementos_xml[] = "<seguido><id_canço>".$fila['id_canço']."</id_canço><nom_canço>".$fila['nom_canço']."</nom_canço><nom_guardat>".$fila['nom_guardat']."</nom_guardat><tipus>".$fila['tipus']."</tipus><artista>".$fila['artista']."</artista></seguido>";
    }        
    
    echo "<canciones>\n" . implode("\n", $elementos_xml) . "</canciones>";
    
    mysqli_close($connexio);
?>