const searchInput = document.getElementById("searchInput");
const listaItens = document
  .getElementById("capitulos-list")
  .getElementsByClassName("capitulo");

searchInput.addEventListener("keyup", function (event) {
  const termo = event.target.value.toLowerCase();

  for (let i = 0; i < listaItens.length; i++) {
    const textoItem = listaItens[i].textContent.toLowerCase();
    if (textoItem.includes(termo)) {
      listaItens[i].style.display = "block";
    } else {
      listaItens[i].style.display = "none";
    }
  }
});