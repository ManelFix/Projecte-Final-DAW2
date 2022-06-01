<?php
session_start();

if (isset($_SESSION['ses_id'])) {
  if ($_SESSION["ban"] == 0) {

    $titolC = $_POST["titolAfegir"];
    $genereC = $_POST["genereAfegir"];
    $estatAnimC = $_POST["estatAnimAfegir"];
    $artistaC = $_POST["artistaAfegir"];

    if(empty($titolC) || empty($genereC) || empty($estatAnimC) || empty($artistaC)){
    ?><script>
      alert("Ningún camp pot estar buit");
      <?php
        if($_SESSION["premium"] == 0){
          ?>location.href="../afegirMusicaNoPremium.php";<?php          
        }
        else{
          ?>location.href="../afegirMusicaPremium.php";<?php          
        }
      ?>
    </script>
    <?php
    }
    else{
      if(strlen($titolC) < 4){
        ?><script>alert("El títol de la cançó és massa curt");</script><?php
        if($_SESSION["premium"] == 0){
          ?><script>location.href="../afegirMusicaNoPremium.php";</script><?php          
        }
        else{
          ?><script>location.href="../afegirMusicaPremium.php";</script><?php          
        }
      }
      else{
        if(strlen($artistaC) < 4){
          ?><script>alert("El nom de l'artista és massa curt");</script><?php
          if($_SESSION["premium"] == 0){
            ?><script>location.href="../afegirMusicaNoPremium.php";</script><?php          
          }
          else{
            ?><script>location.href="../afegirMusicaPremium.php";</script><?php          
          }
        }
        else{
          if (!empty($_FILES["fileToUpload"]["name"])) {
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
                alert("Error: L'arxiu ja existeix");
                <?php
                if($_SESSION["premium"] == 0){
                  ?>location.href="../afegirMusicaNoPremium.php";<?php          
                }
                else{
                  ?>location.href="../afegirMusicaPremium.php";<?php        
                }
                ?>
              </script>
            <?php
            }
      
            // Check file size
            if ($_FILES["fileToUpload"]["size"] > 20000000) {
            ?>
              <script>
                alert("Error: L'arxiu pesa més de 20 MB")
                <?php
                if($_SESSION["premium"] == 0){
                  ?>location.href="../afegirMusicaNoPremium.php";<?php          
                }
                else{
                  ?>location.href="../afegirMusicaPremium.php";<?php        
                }
                ?>
              </script>
            <?php
            }
      
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
      
              if ($_SESSION["premium"] == 0) {
                $sql = "INSERT INTO canço(id_usuari,nom_canço, nom_guardat, tipus, artista, data, genere, estat_anim, click, click_mens, premium) VALUES 
                ('" . $_SESSION['ses_id'] . "','" . $_POST['titolAfegir'] . "','$nombre','$extension','" . $_POST['artistaAfegir'] . "',CURRENT_DATE,'" . $_POST['genereAfegir'] . "','" . $_POST['estatAnimAfegir'] . "',0,0,0)";
              } else {
                  $sql = "INSERT INTO canço(id_usuari,nom_canço, nom_guardat, tipus, artista, data, genere, estat_anim, click, click_mens, premium) VALUES 
                  ('" . $_SESSION['ses_id'] . "','" . $_POST['titolAfegir'] . "','$nombre','$extension','" . $_POST['artistaAfegir'] . "',CURRENT_DATE,'" . $_POST['genereAfegir'] . "','" . $_POST['estatAnimAfegir'] . "',0,0,'" . $_POST['premiumAfegir'] . "')";
                }
      
              $res = mysqli_query($connexio, $sql);
            }
      
            ?>
            <script>
              location.href = "../mevaMusica.php";
            </script>

          <?php
          } else {
          ?>
            <script>
              alert("Arxiu no introduït");
              <?php
                if($_SESSION["premium"] == 0){
                  ?>location.href="../afegirMusicaNoPremium.php";<?php          
                }
                else{
                  ?>location.href="../afegirMusicaPremium.php";<?php        
                }
              ?>
            </script>
          <?php
          }
        }

        }
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
