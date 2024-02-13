function atualizarTempoDecorrido() {
    var publicacoes = document.querySelectorAll('.publicacao');

    publicacoes.forEach(function(publicacao) {
        var dataPublicacaoStr = publicacao.querySelector('.data-publicacao').textContent;
        var dataPublicacao = new Date(dataPublicacaoStr);
        var agora = new Date();

        var diferenca = agora - dataPublicacao;
        var minutosDecorridos = Math.floor(diferenca / (1000 * 60));
        var horasDecorridas = Math.floor(minutosDecorridos / 60);
        var diasDecorridos = Math.floor(horasDecorridas / 24);

        var tempoPassado = "";

        if (diasDecorridos > 0) {
            tempoPassado = " há " + diasDecorridos + " d";
        } else if (horasDecorridas > 0) {
            tempoPassado = " há " + horasDecorridas + " hr";
        } else {
            tempoPassado = "há " + minutosDecorridos + " min";
        }

        publicacao.querySelector('.tempo-passado').textContent = tempoPassado;
    });
}

atualizarTempoDecorrido();
setInterval(atualizarTempoDecorrido, 60000);
