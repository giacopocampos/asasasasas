function aprovado(nota){
    if (nota >= 7){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

console.log(aprovado(8))
console.log(aprovado(2))
console.log(aprovado(9))
console.log(aprovado('abc'))



var nome = 'giácopo'

let idade = 15

const pi = 3.1415

idade = 'abc'

if (pi >= 2){
    console.log('é maior')
} else{
    console.log('é menor')
}

let idx = 0

while (idx <= 10){
    console.log(idx)
    idx++ // idx = idx + 1 -> ++idx != idx++
}

console.log('oi')
console.log(idade)
console.log(nome)
console.log(pi)


//typeScript: javascript tipado