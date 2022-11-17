// 1 - Declare uma variável chamada challenge e atribua a ela um valor inicial '30 Days Of JavaScript' .
const challenge = '30 Days Of JavaScript'

// 2 - Imprima a string no console do navegador usando console.log()
console.log(challenge)

// 3 - Imprima o comprimento da string no console do navegador usando console.log()
console.log(challenge.length)

// Altere todos os caracteres da string para letras maiúsculas usando o método toUpperCase()
console.log(challenge.toUpperCase())

// Altere todos os caracteres da string para letras minúsculas usando o método toLowerCase ()
console.log(challenge.toLowerCase())

// Corte (corte) a primeira palavra da string usando o método substr () ou substring()
console.log(challenge.substring(3, 7))

// Corte a frase Days Of JavaScript de 30 Days Of JavaScript .
console.log(challenge.substring(3, 7))

// Verifique se a string contém uma palavra Script usando o método includes()
console.log(challenge.includes('Script'))

// Divida a string em uma matriz usando o método split()
console.log(challenge.split(''))

// Divida a string 30 Days Of JavaScript no espaço usando o método split()
console.log(challenge.split(' '))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide a string na vírgula e a transforma em uma matriz.
const empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(empresas.split(', '))

// Altere 30 Days Of JavaScript para 30 Days Of Python usando o método replace() .
console.log(challenge.replace('JavaScript', 'Python'))

// O que é o caractere no índice 15 na string '30 Days Of JavaScript'? Use o método charAt() .
console.log(challenge.charAt(15))

// Qual é o código de caractere de J na string '30 Days Of JavaScript' usando charCodeAt ()
console.log(challenge.charCodeAt('J'))

// Use indexOf para determinar a posição da primeira ocorrência de a em 30 Days Of JavaScript
console.log(challenge.indexOf('J'))

// Use lastIndexOf para determinar a posição da última ocorrência de a em 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

// Use indexOf para encontrar a posição da primeira ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque porque é uma conjunção'
const frase =
  'Você não pode terminar uma frase com porque porque porque porque é uma conjunção'
console.log(frase.indexOf('porque'))

// Use lastIndexOf para encontrar a posição da última ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque porque é uma conjunção'
console.log(frase.lastIndexOf('porque'))

// Use a pesquisa para encontrar a posição da primeira ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'
console.log(frase.search('porque'))

// Use trim() para remover qualquer espaço em branco à direita no início e no final de uma string. Por exemplo, ' 30 Days Of JavaScript '.
console.log(challenge.trim())

// Use o método startsWith() com a string 30 Days Of JavaScript e torne o resultado verdadeiro
console.log(challenge.startsWith('3'))

// Use o método endsWith() com a string 30 Days Of JavaScript e torne o resultado verdadeiro
console.log(challenge.endsWith('t'))
// Use o método match() para encontrar todos os a em 30 dias de JavaScript
console.log(challenge.match('a'))
// Use concat() e mescle '30 Days of' e 'JavaScript' em uma única string, '30 Days Of JavaScript'

// Use o método repeat () para imprimir 30 dias de JavaScript 2 vezes
console.log(challenge.repeat(10))
