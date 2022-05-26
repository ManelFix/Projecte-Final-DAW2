<?php
session_start();
 
if (isset($_SESSION['ses_id'])) {
    if ($_SESSION["ban"] == 0) {
        
        include("BBDD.php");
        $connexio = sql();

        header("Content-Type: application/xml");

        $sql = "SELECT can.id_canço,can.nom_canço, can.nom_guardat,can.tipus,can.artista FROM canço can left join valoracio_canço val ON (can.id_canço = val.id_canço) WHERE val.id_usuari =".$_SESSION['ses_id']."";

        $res = mysqli_query($connexio, $sql);

        while ($fila = mysqli_fetch_assoc($res)) {

            $elementos_xml[] = "<seguido><id_canço>".$fila['id_canço']."</id_canço><nom_canço>".$fila['nom_canço']."</nom_canço><nom_guardat>".$fila['nom_guardat']."</nom_guardat><tipus>".$fila['tipus']."</tipus><artista>".$fila['artista']."</artista></seguido>";

        }

        echo "<canciones>\n" . implode("\n", $elementos_xml) . "</canciones>";

    } else {
        header('Location: .php');
    } 
} else {
    header('Location: ../login.php');
}
