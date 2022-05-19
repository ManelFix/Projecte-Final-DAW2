<?php
//en cada error se tendria que poner una web normal que informase que ha pasado
session_start();

if (isset($_SESSION['ses_id'])) {
  if ($_SESSION["ban"] == 0) {

    $uploadOk = 1;
    include("BBDD.php");

    $connexio = sql();
    $nombre = md5(date(DATE_RFC2822) . basename($_FILES["fileToUpload"]["name"]));

    $target_dir = "../../uploads/";
    $ext = explode(".", $_FILES["fileToUpload"]["name"]);
    $extension = end($ext);

    $target_file = $target_dir . $nombre . "." . $extension;

    // Check file size
    if ($_FILES["fileToUpload"]["size"] > 20000000) {
      //error de tamaño
      $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
      //error
      // if everything is ok, try to upload file
    } else {
      if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
//informar todo bien
        $sql = "INSERT INTO canço(id_usuari,nom_canço,nom_guardat,tipus, artista, data, durada, genere, estat_anim, click, click_mens, premium) VALUES 
          (" . $_SESSION['ses_id'] . ",'" . $_POST['titolAfegir'] . "','$nombre','$extension','" . $_POST['artistaAfegir'] . "',CURRENT_DATE," . $_POST['duracioAfegir'] . ",'" . $_POST['genereAfegir'] . "','" . $_POST['estatAnimAfegir'] . "',0,0,0)";

        $res = mysqli_query($connexio, $sql);

        header('Location: ../afegirMusicaNoPremium.php');

      } else {
        //error general
        header('Location: ../afegirMusicaNoPremium.php');
      }
    }
  } else {
    header('Location: .php');
}
} else {
header('Location: ../login.php');
}



?>