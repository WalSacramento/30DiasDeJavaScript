// Declare uma matriz vazia ;
const arr = []
console.log(arr)
console.log('\n')

// Declare uma matriz com mais de 5 números de elementos
const arrayNumber = [1, 2, 3, 4, 5, 6, 7]
console.log(arrayNumber)
console.log('\n')

// Encontre o comprimento da sua matriz
console.log(arrayNumber.length)
console.log('\n')

// Obtenha o primeiro item, o item do meio e o último item da matriz
console.log(arrayNumber[0], arrayNumber[2], arrayNumber[5])
console.log('\n')

// Declare uma matriz chamada mixedDataTypes , coloque diferentes tipos de dados na matriz e encontre o comprimento da matriz. O tamanho da matriz deve ser maior que 5
const mixedDataTypes = [1, 'text', true, 100, 'hello', false]
console.log(mixedDataTypes.length)
console.log('\n')

// Declare um nome de variável de matriz itCompanies e atribua valores iniciais Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]

// Imprima a matriz usando console.log()
console.log(itCompanies)

// Imprima o número de empresas no array
console.log(itCompanies.length)

// Imprima a primeira empresa, a empresa intermediária e a última empresa
console.log(itCompanies[0], itCompanies[3], itCompanies[6])

// Imprima cada empresa
let i = 0

for (i = 0; i < 7; i++) {
  console.log(itCompanies[i])
}
console.log('\n')
// Altere o nome de cada empresa para maiúsculas, um por um, e imprima-os
for (i = 0; i < 7; i++) {
  console.log(itCompanies[i].toUpperCase())
}
console.log('\n')

// Imprima a matriz como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI.
console.log(itCompanies.toString(), 'são grandes empresas de TI.')
console.log('\n')

// Verifique se uma determinada empresa existe no array itCompanies. Se existir retorne a empresa caso contrário retorne a empresa não foi encontrada
// O CÓDIGO SÓ FUNCIONA NO CONSOLE DO NAVEGADOR!
// let empresa

// empresa = window.prompt('Digite o nome da empresa:')
// if (itCompanies.includes(empresa)) {
//   console.log(empresa, 'pertence a  itCompanies')
// } else {
//   console.log('A empresa não foi encontrada!')
// }

// Filtre as empresas que possuem mais de um 'o' sem o método de filtro
// for (i = 0; i < 7; i++) {
//   console.log(itCompanies[i].match('o'))
//   // if (itCompanies[i].match('o') >= 0) {
//   //   console.log(itCompanies[i])
//   //   console.log(itCompanies[i].match('o'))
//   // }
// }
// console.log('\n')

// Classifique a matriz usando o método sort()
console.log(itCompanies.sort())
console.log('\n')

// Inverta a matriz usando o método reverse()
console.log(itCompanies.reverse())
console.log('\n')

// Corte as 3 primeiras empresas da matriz
// itCompanies.shift()
// itCompanies.shift()
// itCompanies.shift()
// console.log(itCompanies)
// console.log('\n')

// Corte as últimas 3 empresas da matriz
// itCompanies.pop()
// itCompanies.pop()
// itCompanies.pop()
// console.log(itCompanies)
// console.log('\n')

// Corte a empresa ou empresas intermediárias de TI da matriz
itCompanies.pop(3)
console.log(itCompanies)
console.log('\n')

// Remova a primeira empresa de TI da matriz
itCompanies.shift
console.log(itCompanies)
console.log('\n')

// Remova a empresa ou empresas intermediárias de TI da matriz
itCompanies.pop(3)
console.log(itCompanies)
console.log('\n')

// Remova a última empresa de TI da matriz
itCompanies.pop()
console.log(itCompanies)
console.log('\n')

// Remova todas as empresas de TI
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
console.log(itCompanies)
console.log('\n')
