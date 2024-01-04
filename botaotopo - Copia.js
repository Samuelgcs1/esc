// Função para rolar suavemente para o topo da página
function topFunction() {
  document.body.scrollTop = 0; // Para navegadores com suporte limitado
  document.documentElement.scrollTop = 0; // Para navegadores modernos
}

// Exibir ou ocultar o botão quando o usuário rolar a página
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var btnTop = document.getElementById('btnTop');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnTop.style.display = 'block';
  } else {
      btnTop.style.display = 'none';
  }
}
// Função para rolar suavemente para o topo da página
function topFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    // Rola suavemente para o topo da página com efeito smooth
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Exibir ou ocultar o botão quando o usuário rolar a página
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var btnTop = document.getElementById('btnTop');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
}

