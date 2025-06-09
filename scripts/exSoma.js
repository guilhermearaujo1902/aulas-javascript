function calcular() {

    // Mapeando os inputs
    const inputNumA = document.getElementById('numA');
    const inputNumB = document.getElementById('numB');

    // Convertendo texto para número
    const valorA = Number(inputNumA.value);
    const valorB = Number(inputNumB.value);

    // Realizando os calculos
    const soma = valorA + valorB;
    const subtracao = valorA - valorB;
    const divisao = valorA / valorB;
    const multiplicacao = valorA * valorB;

    // Exibir dados
    alert(
        'Resultados dos calculos' +
        '\nSoma: ' + soma +
        '\nSubtração: ' + subtracao +
        '\nDivisão: ' + divisao +
        '\nMultiplicação: ' + multiplicacao
    );
}