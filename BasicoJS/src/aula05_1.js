
const nome = 'Node 2023'

const imc = (peso, altura)=>{
    return peso/(altura*altura)
}

// // CJS (Common JavaScript) -> Mudar no package.json "type": "commonjs",
// module.exports = {nome, imc}


//ESM (EcmaScript Modules)
export {imc, nome}