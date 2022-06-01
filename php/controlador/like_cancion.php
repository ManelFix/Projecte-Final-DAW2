<?php
session_start();

if (isset($_SESSION['ses_id'])) {

    include("BBDD.php");

    $connexio = sql();

    $sql = "INSERT INTO valoració_canço(id_usuari, id_canço) VALUES (".$_SESSION['ses_id'].",".$_POST["word"].")";

    $res = mysqli_query($connexio, $sql);

    echo 1;
} else {
header('Location: ../login.php');
}
