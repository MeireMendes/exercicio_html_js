const form = document.getElementById("form-consulta");
const message = document.getElementById("message");

function validarNumero(numeroCompleto) {
    const numeros = numeroCompleto.split(" ");
    return numeros.every((n) => !isNaN(Number(n)));
}

function comparaNumero(A, B) {
    if (isNaN(A) || isNaN(B)) {
        alert("Por favor, insira números válidos para os campos A e B!");
    } else if (B > A) {
        message.className = "success-message";
        message.innerText = "B é maior que A";
        alert("Formulário enviado com sucesso!");
    } else {
        message.className = "error-message";
        message.innerText = "O valor de B precisa ser maior do que o valor de A!";
        alert("Erro: formulário não enviado!");
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const A = document.getElementById("A").value;
    const B = document.getElementById("B").value;

    comparaNumero(A, B);
});
