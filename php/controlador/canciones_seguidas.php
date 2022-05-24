<?php
session_start();
 
if (isset($_SESSION['ses_id'])) {
    if ($_SESSION["ban"] == 0) {
        include("BBDD.php");

        $connexio = sql();

        header("Content-Type: application/xml");

        $sql = "SELECT usr.id_usuari,usr.nom_usuari,usr.imatge,usr.tipus FROM usuari usr left join seguiment_usuari seg ON (usr.id_usuari = seg.id_seguit) WHERE seg.id_usuari = ".$_SESSION['ses_id']."";

        $res = mysqli_query($connexio, $sql);

        while ($fila = mysqli_fetch_assoc($res)) {

            $elementos_xml[] = "<seguido><id_usuari>" . $fila['id_usuari'] . "</id_usuari><nom_usuari>" . $fila['nom_usuari'] . "</nom_usuari><imatge>data: ".$fila['tipus'].";base64,".base64_encode($fila["imatge"])."</imatge><tipus>".$fila['tipus']."</tipus></seguido>";

        }

        $sql = "SELECT usr.id_usuari,usr.nom_usuari,usr.imatge,usr.tipus FROM usuari usr WHERE usr.id_usuari NOT IN ((SELECT usr.id_usuari FROM usuari usr left join seguiment_usuari seg ON (usr.id_usuari = seg.id_seguit) WHERE seg.id_usuari = ".$_SESSION['ses_id']."))";

        $res = mysqli_query($connexio, $sql);

        while ($fila = mysqli_fetch_assoc($res)) {

            $elementos_xml[] = "<otros><id_usuari>" . $fila['id_usuari'] . "</id_usuari><nom_usuari>" . $fila['nom_usuari'] . "</nom_usuari><imatge>data: ".$fila['tipus'].";base64,".base64_encode($fila["imatge"])."</imatge><tipus>".$fila['tipus']."</tipus></otros>";
        
        }

        echo "<usuarios>\n" . implode("\n", $elementos_xml) . "</usuarios>";
    } else {
        header('Location: .php');
    } 
} else {
    header('Location: ../login.php');
}
