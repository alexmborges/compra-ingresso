// Habilitando a função comprar
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtd =  parseInt(document.getElementById('qtd').value);

if(tipoIngresso.value == 'pista') {
comprarPista(qtd);
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }

}

// Definindo as condicionais de compra de cada setor
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para este setor');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Sua compra foi realizada com sucesso');
    }
}


function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para este setor');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Sua compra foi realizada com sucesso');
    }
}


function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para este setor');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Sua compra foi realizada com sucesso');
    }
}