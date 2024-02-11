    // Função para adicionar um comentário
    function addComment(comment) {
      // Cria um novo elemento de contêiner de comentário
      var newCommentContainer = document.createElement("div");
      newCommentContainer.classList.add("comment-container");

      // Cria um novo elemento de comentário
      var newCommentDiv = document.createElement("div");
      newCommentDiv.classList.add("comment");
      newCommentDiv.textContent = comment;

      // Adiciona o comentário à div do contêiner de comentário
      newCommentContainer.appendChild(newCommentDiv);

      // Adiciona o contêiner de comentário à área de comentários
      var commentsContainer = document.getElementById("comments-container");
      commentsContainer.appendChild(newCommentContainer);
    }

    // Captura o evento de envio do formulário
    document.getElementById("comment-form").addEventListener("submit", function(event) {
      // Impede o comportamento padrão do formulário (recarregar a página)
      event.preventDefault();
      
      // Obtém o texto do comentário
      var commentInput = document.getElementById("comment-input");
      var commentText = commentInput.value.trim();
      
      // Verifica se o campo de comentário não está vazio
      if (commentText !== "") {
        // Adiciona o comentário
        addComment(commentText);
        
        // Limpa o campo de entrada
        commentInput.value = "";
      }
    });