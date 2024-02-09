    // Variável para controlar o estado atual do bookmark
    var isBookmarked = false;

    // Função para alternar entre os ícones de bookmark
    function toggleBookmark() {
        var emptyBookmark = document.getElementById('bookmark-empty');
        var filledBookmark = document.getElementById('bookmark-filled');

        // Alterna o estado do bookmark
        isBookmarked = !isBookmarked;

        // Alterna a exibição dos ícones de acordo com o estado do bookmark
        emptyBookmark.style.display = isBookmarked ? 'none' : 'inline-block';
        filledBookmark.style.display = isBookmarked ? 'inline-block' : 'none';
    }