<?php
session_start();

if (isset($_SESSION['ses_id'])) {
  if ($_SESSION["ban"] == 0) {

    if (isset($_FILES["fileToUpload"]["name"])) {
      $uploadOk = 1;
      include("BBDD.php");

      $connexio = sql();
      $nombre = md5(date(DATE_RFC2822) . basename($_FILES["fileToUpload"]["name"]));

      $target_dir = "../../uploads/";
      $ext = explode(".", $_FILES["fileToUpload"]["name"]);
      $extension = end($ext);

      $target_file = $target_dir . $nombre . "." . $extension;

      // Check if file already exists
      if (file_exists($target_file)) {
?>
        <script>
          alert("Error: L'archiu ya existeix")
          location.href = "../login.php";
        </script>
      <?php
      }

      // Check file size
      if ($_FILES["fileToUpload"]["size"] > 20000000) {
      ?>
        <script>
          alert("Error: L'arxiu pesa mes de 20 MB")
          location.href = "../login.php";
        </script>
      <?php
      }

      if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {

        if ($_SESSION["premium"] == 0) {
          $sql = "INSERT INTO canço(id_usuari,nom_canço, nom_guardat, tipus, artista, data, genere, estat_anim, click, click_mens, premium) VALUES 
          ('" . $_SESSION['ses_id'] . "','" . $_POST['titolAfegir'] . "','$nombre','$extension','" . $_POST['artistaAfegir'] . "',CURRENT_DATE,'" . $_POST['genereAfegir'] . "','" . $_POST['estatAnimAfegir'] . "',0,0,0)";
        } else {
          if ($_POST['titolAfegir'] == 0) {
            $sql = "INSERT INTO canço(id_usuari,nom_canço, nom_guardat, tipus, artista, data, genere, estat_anim, click, click_mens, premium) VALUES 
            ('" . $_SESSION['ses_id'] . "','" . $_POST['titolAfegir'] . "','$nombre','$extension','" . $_POST['artistaAfegir'] . "',CURRENT_DATE,'" . $_POST['genereAfegir'] . "','" . $_POST['estatAnimAfegir'] . "',0,0,0)";
          } else {
            $sql = "INSERT INTO canço(id_usuari,nom_canço, nom_guardat, tipus, artista, data, genere, estat_anim, click, click_mens, premium) VALUES 
            ('" . $_SESSION['ses_id'] . "','" . $_POST['titolAfegir'] . "','$nombre','$extension','" . $_POST['artistaAfegir'] . "',CURRENT_DATE,'" . $_POST['genereAfegir'] . "','" . $_POST['estatAnimAfegir'] . "',0,0,1)";
          }
        }

        $res = mysqli_query($connexio, $sql);
      }

      ?>
      <script>
        alert("Archiu pujat correctament")
        location.href = "../login.php";
      </script>
    <?php
    } else {
    ?>
      <script>
        alert("No se ha puesto el archivo")
        location.href = "../login.php";
      </script>
    <?php
    }
  } else {

    //ban
    ?>
    <script>
      location.href = "../planaBanejat.php";
    </script>
  <?php
  }
} else {


  //no entrado
  ?>
  <script>
    location.href = "../login.php";
  </script>
<?php

}
