      function trocarOrdem() {
        var lista = document.getElementById("capitulos-list");
        var itens = lista.getElementsByTagName("li");
        var arrayItens = Array.from(itens);

        arrayItens.reverse();

      
        while (lista.firstChild) {
          lista.removeChild(lista.firstChild);
        }

     
        arrayItens.forEach(function (item) {
          lista.appendChild(item);
        });
      }