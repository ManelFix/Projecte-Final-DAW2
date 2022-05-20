<?php
session_start();

if (isset($_SESSION['ses_id'])) {
    if ($_SESSION["ban"] == 0) {
        include("BBDD.php");

        $connexio = sql();

        header("Content-Type: application/xml");

        $sql = "SELECT COUNT(*) FROM seguiment_usuari where id_usuari = ".$_SESSION['ses_id']."";

        $res = mysqli_query($connexio, $sql);

        $fila = mysqli_fetch_assoc($res);

        if($fila > 0){

            $sql = "SELECT usr.id_usuari,usr.nom_usuari,usr.imatge,usr.tipus,usr.nom_normal,seg.id_usuari as usr FROM usuari usr left join seguiment_usuari seg ON (usr.id_usuari = seg.id_seguit)";

            $res = mysqli_query($connexio, $sql);
    
            while ($fila = mysqli_fetch_assoc($res)) {
    
                $elementos_xml[] = "<seguido><id_usuari>".$fila['id_usuari']."</id_usuari><nom_usuari>".$fila['nom_usuari']."</nom_usuari><imatge>".$fila['imatge']."</imatge><tipus>".$fila['tipus']."</tipus><nom_normal>".$fila['nom_normal']."</nom_normal><usr>".$fila['usr']."</usr></seguido>";

            }

            echo "<usuarios>\n" . implode("\n", $elementos_xml) . "</usuarios>";
        }else{
            echo 0;
        }
    } else {
        header('Location: .php');
    }
} else {
    header('Location: ../login.php');
}
