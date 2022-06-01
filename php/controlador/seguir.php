<?php
session_start();

if (isset($_SESSION['ses_id'])) {
    include("BBDD.php");

    $connexio = sql();

    $sql = "INSERT INTO seguiment_usuari (id_usuari, id_seguit) VALUES (".$_SESSION['ses_id'].",".$_POST["word"].")";
    $res = mysqli_query($connexio, $sql);

    echo 1;
} else {
header('Location: ../login.php');
}
