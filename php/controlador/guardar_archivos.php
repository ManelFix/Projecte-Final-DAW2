<?php
session_start();

if(isset($_SESSION['ses_id'])){
    if($_SESSION["ban"]==0){

      $uploadOk = 1;
      include("BBDD.php");
      
      $connexio=sql();
      $nombre = md5(date(DATE_RFC2822).basename($_FILES["fileToUpload"]["name"]));
      
      $target_dir = "../../uploads/";
      $ext = explode(".", $_FILES["fileToUpload"]["name"]);
      $extension = end($ext);
      
      $target_file = $target_dir . $nombre.".".$extension;
      
      // Check if file already exists
      if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
      }
      
      // Check file size
      if ($_FILES["fileToUpload"]["size"] > 20000000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
      }
      
      // Check if $uploadOk is set to 0 by an error
      if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
      // if everything is ok, try to upload file
      } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
      
          $sql = "INSERT INTO canço(id_usuari,nom_canço, artista, data, durada, genere, estat_anim, click, click_mens, premium) VALUES 
          (".$_SESSION['ses_id'].",".$_POST['titolAfegir'].",".$_POST['artista'].",currentdate,)";
      
      
        } else {
          
        }
      }
    }
}
?>