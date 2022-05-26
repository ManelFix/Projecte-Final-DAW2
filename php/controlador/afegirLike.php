<?php
    session_start();
    include("BBDD.php");  
    $connexio=sql();

    $idCanço = $_POST["idC"];

    $sql = "SELECT * FROM valoracio_canço WHERE id_usuari = '".$_SESSION['ses_id']."' AND id_canço = '".$idCanço."'";
    $r = mysqli_query($connexio,$sql);

    $fila = mysqli_fetch_assoc($r);

    if(empty($fila["id_valoracio"])){
        $sql2 = "INSERT INTO valoracio_canço (id_usuari, id_canço) VALUES ('".$_SESSION['ses_id']."','".$idCanço."')";
        mysqli_query($connexio,$sql2);
        echo $idCanço;
    }
    else{
        $sql2 = "DELETE FROM valoracio_canço WHERE id_usuari = '".$_SESSION['ses_id']."' AND id_canço = '".$idCanço."'";
        mysqli_query($connexio,$sql2);
        echo $idCanço;
        echo ".-1";
    }
    
    mysqli_close($connexio);
?>