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
        if (A==B) {
            alert("A é igual B!");
        } else if (A>B) {
            alert("A é maior que B!");
        } else {
            alert("A é menor que B!");
        }
    }

    formEvalido = comparaNumero(A, B)
})
