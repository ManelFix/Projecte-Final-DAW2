<?php
include("BBDD.php");

$connexio=sql();

header("Content-Type: application/xml");

$word = explode(",",$_POST["word"]);

$passwrd = md5($word[2]);
$user = md5($word[1]);

$sql="SELECT COUNT(*) as contador FROM usuari WHERE nom_usuari = '$word[0]'";

$res=mysqli_query($connexio, $sql);

$fila = mysqli_fetch_assoc($res);

if($fila["contador"]==0){

    $sql="SELECT COUNT(*) as cont FROM usuari WHERE email = '$word[1]'";

    $res=mysqli_query($connexio, $sql);
    
    $fila = mysqli_fetch_assoc($res);
    if($fila["cont"]==0){

        $img_pred = null;
        $tipus_pred = null;
        $normal_pred = null;
        
        $sql="INSERT INTO usuari (nom_usuari, contrasenya, email, ban, admin) VALUES ('$user','$passwrd','$word[1]',0,0)";

        $res=mysqli_query($connexio, $sql);
        
        echo 0;
    }else{
        echo 2;
    }
}else {
    echo 1;
}
?>

