const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
} 

const pessoa = {
<<<<<<< HEAD
    nome: 'Vinicius',
    sobrenome: 'dos Reis Soares',
=======
    nome : 'Vinicius',
    sobrenome : 'Soares',
>>>>>>> parent of d8cef67 (novo)
    idade: 20
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}