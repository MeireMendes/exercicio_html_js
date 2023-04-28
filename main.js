const form = document.getElementById('form-consulta');

function validanumero(numeroCompleto) {
    const nuemroComoArray = numeroCompleto.split(' ');
    return nuemroComoArray.length > numeroCompleto
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const A = document.getElementById('A').value 
    const B = document.getElementById('B').value

    function comparaNumero(A, B) {
        if (B>A) {
            alert("Formulário enviado com sucesso!");
        } else if (A>B) {
            alert("Erro formulário não enviado!");
        } else {
            alert("O Valor B precisa ser maior que o Valor A!");
        }
    }

    formEvalido = comparaNumero(A, B)
})
