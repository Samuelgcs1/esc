<?php
if(isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['senha']) && !empty($_POST['senha'])) {

    require 'conexao2.php';
    require 'UsuarioClass.php';

    $u = new Usuario();

    $email = addslashes($_POST['email']);
    $senha =  addslashes($_POST['senha']);

    if ($u->login($email, $senha)) {
        if(isset($_SESSION['IDuser'])) {
            header("Location: index.html");
        } else {
            header("Location: login.php");
        }
    } else {
        header("Location: login.php");
    }

} else {
    header("Location: login.php");
}
?>
