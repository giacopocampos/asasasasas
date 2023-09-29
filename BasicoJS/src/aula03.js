// const imc = (peso, altura)=>{
//     return (peso)/(altura*altura)
// }

// const amc = (peso, altura)=>{
//     return (peso)/(altura*altura)
// }

// console.log(imc(92, 1.70))



let notasAlunos = [1, 5, 9, 10, 8, 3]

// console.log(notasAlunos)

// notasAlunos.push(2)

// console.log(notasAlunos)
// console.log(notasAlunos.length)

// for (const nota of notasAlunos){
//     if (nota >6){
//         console.log(nota)
//     }
// }

notasAlunos.forEach((nota)=>{
    if (nota >6){
        console.log(nota)
    }
})

// let notasAprovadas = notasAlunos.filter((nota)=>{
//     return nota >= 6
// })

let notasAprovadas = notasAlunos.filter((nota)=> nota >= 6)

console.log(notasAprovadas)

//Para que serve o Map e o reduce??????
//Como filtrar notas dos alunos acima de 6??? Exibir o nome 
// Objeto - server para guardar mais de uma informação

let aluno = {"nome": "Zezin da Silva",
              "nota": 8  
            }

console.log(aluno)
console.log(aluno.nome)

let listaAlunos = [
    {"nome": "Zezin da Silva", "nota": 8},
    {"nome": "Gustin Rangel", "nota": 4},
    {"nome": "Pedrim Guerra", "nota": 6},
    {"nome": "Betin Siqueira", "nota": 2},
]

console.log(listaAlunos)