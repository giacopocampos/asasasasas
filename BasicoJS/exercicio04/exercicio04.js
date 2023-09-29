
// Função para calcular a média e verificar se o aluno foi aprovado
export function verificarAprovacao(notas) {
    // Verifica se há notas para calcular a média
    if (notas.length === 0) {
        return "Sem notas. Reprovado."; // Retorna reprovado se não houver notas
    }

    // Soma todas as notas
    const soma = notas.reduce((acc, nota) => acc + nota, 0);

    // Calcula a média
    const media = soma / notas.length;

    // Verifica se a média é menor que 60
    if (media < 60) {
        return `Média ${media.toFixed(2)}. Reprovado.`;
    } else {
        return `Média ${media.toFixed(2)}. Aprovado.`;
    }
}

