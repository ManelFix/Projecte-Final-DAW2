Ban
<?php
session_start();
if (isset($_SESSION['ses_id'])) {
    if ($_SESSION["ban"] == 0) {
?>

<?php

    } else {
        header('Location: planaBanejat.php');
    }
} else {
    header('Location: login.php');
}
?>


Normal
<?php
session_start();
if (isset($_SESSION['ses_id'])) {
?>

<?php
} else {
    header('Location: login.php');
}
?>



Premium
<?php
session_start();
if (isset($_SESSION['ses_id'])) {
?>

<?php


} else {
    header('Location: login.php');
}
?>


Admin
<?php
session_start();
if (isset($_SESSION['ses_id'])) {
    if (isset($_SESSION["admin"])) {
?>

<?php

    } else {
        header('Location: mevaMusica.php');
    }
} else {
    header('Location: login.php');
}
?>

<a class="dropdown-item" href="controlador/cerrarsesion.php">
    <span class='bx bx-exit text-primary midaIcones'></span>
    <p class="txtOpcionsUser">Tancar sessió</p>
</a>