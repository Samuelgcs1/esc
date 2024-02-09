<?php
session start()
unset($_SESSION['IDuser']);

header("Location: login.php");

?>