<?php

include("BBDD.php");

$connexio=sql();

header("Content-Type: application/xml");

$word = explode(",",$_POST["word"]);

$sql="SELECT COUNT(*) as contador FROM usuari WHERE nom_usuari = $word[0] AND contrasenya = $word[1]";

$res=mysqli_query($connexio, $sql);

$fila = mysqli_fetch_assoc($res);

if($fila["contador"]==0){
echo 0;
}else if($fila["contador"]==1){
    $sql="SELECT id_usuari, admin  FROM usuari WHERE nom_usuari = '$word[0]' AND contrasenya = '$word[1]'";

    $res=mysqli_query($connexio, $sql);

    $fila = mysqli_fetch_assoc($res);
    session_start();

    if($_SESSION["admin"]==1){
        $_SESSION["ses_id"]=$fila["id_usuari"];
        $_SESSION["admin"]= 1;
        echo 2;
    }else{
        $_SESSION["ses_id"]=$fila["id_usuari"];
        echo 1;
    }


}
?>

