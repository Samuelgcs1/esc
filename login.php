<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
    <title>Home</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <link
      rel="shortcut icon"
      href="https://cdn-icons-png.flaticon.com/512/3096/3096991.png"
      type="image/x-icon"
    />
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
</head>
<body>
    <button onclick="topFunction()" class="btn-top" id="btnTop" title="Voltar ao Topo"></button>
    <script src="botaotopo.js"></script>
   
        <div class="navbar">
      <div class="cont">
        <a class="home" href="index.html">
          <img class="logo" src="abanner-removebg-preview.png" alt=""
        /></a>
        <img
          id="mobile-cta"
          class="menubotao"
          src="menu-svgrepo-com (1).svg"
          alt="botaodomenu"
        />
        <nav class="nav1">
          <img
            id="mobile-exit"
            class="botaoclose"
            src="x-close-delete-svgrepo-com.svg"
            alt="botaoclose"
          />
          <ul class="navlist">
            <li><a href="index.html" class="a-header">Home</a></li>
            <li>
              <a href="ultimasNoticias.html" class="a-header">Noticias</a>
            </li>
            <li><a href="recomendados.html" class="a-header">Mangás</a></li>
            <li><a href="#" class="a-header">Comunidade</a></li>
            <li><a href="#" class="a-header">Login</a></li>
          </ul>
        </nav>
      </div>
    </div>
        <main>
            <div class="login-container">
                <img src="account-svgrepo-com.svg" class="login-icon"  alt="">
                <form action="process_login.php" method="POST">
                    <div class="form-group">
                        <label for="username">Email:</label>
                        <input type="text" id="username" name="email" required placeholder="Digite Seu Email"> 
                    </div>
                    <div class="form-group">
                        <label for="password">Senha:</label>
                        <input type="password" id="password" name="senha" required placeholder="Digite Sua Senha">
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Login">
                    </div>
                </form>
                <div class="form-group">
                    <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                </div>
            </div>
            
        </main>
            <footer>
                <p id="textofooter">Feito Por: SamuelGCS</p>
                <p id="textofooter">contato: AnewsSupport@sup.com</p>
                <p id="textofooter">&copy; copyright reserved</p>
            </footer>
        <script>
         const mobileBtn = document.getElementById('mobile-cta'); 
        const nav = document.querySelector('nav');
        const mobileBtnExit = document.getElementById('mobile-exit');

        mobileBtn.addEventListener('click', () => {
            nav.classList.add('menu-btn');
        });

        mobileBtnExit.addEventListener('click', () => {
            nav.classList.remove('menu-btn');
        });
        </script>
        <script type="text/javascript" src=""></script>
        <script>
            function onSignIn(googleUser) {
                var profile = googleUser.getBasicProfile();
                console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
            }
        </script>
        
    
</body>
</html>
