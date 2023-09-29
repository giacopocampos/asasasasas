let notasAlunos = [1, 5, 9, 10, 8, 3]

let listaAlunos = [
    {"nome": "Zezin da Silva", "nota": 7},
    {"nome": "Gustin Rangel", "nota": 4},
    {"nome": "Pedrim Guerra", "nota": 6},
    {"nome": "Betin Siqueira", "nota": 2},
]

const novosAlunos = listaAlunos.filter(
    (a) => a.nota >=6
)

console.log()

const nomes = novosAlunos.forEach(
    (a) => console.log(a.nome)
)


// const media = listaAlunos.reduce(
//     (media, aluno) => {
//         media.nota += (aluno.nota / listaAlunos.length)
//         return media
//     }
// )

// console.log(media)


// const somaTotal = notasAlunos.reduce(
//     (acumulador, numeroAtual, idx, original) => {
//         console.log(acumulador, numeroAtual, idx, original)
//         if (numeroAtual >= 7){
//             return acumulador += numeroAtual
//         }
//         return acumulador += 1

//     }
// )

// console.log(somaTotal)