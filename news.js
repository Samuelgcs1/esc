document.addEventListener('DOMContentLoaded', () => {
    const noticiasContainer = document.getElementById('noticias-container');

    // Fazer uma solicitação AJAX ou usar a Fetch API para obter notícias do servidor
    fetch('/api/noticias')
        .then(response => response.json())
        .then(noticias => {
            // Atualizar dinamicamente a seção de notícias na página
            noticias.forEach(noticia => {
                const noticiaElement = document.createElement('div');
                noticiaElement.innerHTML = `
                    <h2>${noticia.titulo}</h2>
                    <p>${noticia.conteudo}</p>
                    <hr>
                `;
                noticiasContainer.appendChild(noticiaElement);
            });
        })
        .catch(error => console.error('Erro ao obter notícias:', error));
});
