
// Função para calcular o IMC
function calcularIMC (peso, altura) {
    // Fórmula do IMC: peso / (altura * altura)
    const imc = peso / (altura * altura);
    return imc;
}

export default calcularIMC;
