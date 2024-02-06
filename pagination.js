
        let page = 1; // Página inicial
        let isLoading = false;

        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isLoading) {
                // O usuário chegou ao final da página
                loadMoreImages();
            }
        });

        function loadMoreImages() {
            isLoading = true;
            fetch(`https://example.com/images?page=${page}`)
                .then(response => response.json())
                .then(data => {
                    const imageContainer = document.getElementById('imageContainer');
                    data.forEach(imageUrl => {
                        const img = document.createElement('img');
                        img.src = imageUrl;
                        imageContainer.appendChild(img);
                    });
                    page++; // Avança para a próxima página
                    isLoading = false;
                })
                .catch(error => {
                    console.error('Erro ao carregar imagens:', error);
                    isLoading = false;
                });
        }

        // Carrega as primeiras imagens ao carregar a página
        loadMoreImages();
   