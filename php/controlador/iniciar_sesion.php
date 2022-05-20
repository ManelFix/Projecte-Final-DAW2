<?php

include("BBDD.php");

$connexio=sql();

header("Content-Type: application/xml");

$word = explode(",",$_POST["word"]);

$passwrd = md5($word[1]);


$sql="SELECT COUNT(*) as contador FROM usuari WHERE nom_usuari = '$word[0]' AND contrasenya = '$passwrd'";

$res=mysqli_query($connexio, $sql);

$fila = mysqli_fetch_assoc($res);

if($fila["contador"]==0){
echo 0;
}else if($fila["contador"]==1){
    $sql="SELECT id_usuari,ban,premium, admin FROM usuari WHERE nom_usuari = '$word[0]' AND contrasenya = '$passwrd'";

    $res=mysqli_query($connexio, $sql);

    $fila = mysqli_fetch_assoc($res);
    session_start();

    if($fila["admin"]==1){
        $_SESSION["ses_id"]=$fila["id_usuari"];
        $_SESSION["ban"]=0;
        $_SESSION["admin"]= 1;
        echo 2;
    }else{
        $_SESSION["ses_id"]=$fila["id_usuari"];
        $_SESSION["ban"]=$fila["ban"];
        $_SESSION["premium"]=$fila["premium"];
        echo 1;
    }
}
?>

