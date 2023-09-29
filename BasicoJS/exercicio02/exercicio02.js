let listaAlunos = [
    {"nome": "Zezin da Silva", "nota": 8},
    {"nome": "Gustin Rangel", "nota": 4},
    {"nome": "Pedrim Guerra", "nota": 6},
    {"nome": "Betin Siqueira", "nota": 2},
];

function filtrarAlunos(lista) {
    
    let alunosAprovados = lista.filter(function(aluno) {
        return aluno.nota >= 6;
    });

    return alunosAprovados;
}

let alunosAprovados = filtrarAlunos(listaAlunos);

console.log(alunosAprovados);
