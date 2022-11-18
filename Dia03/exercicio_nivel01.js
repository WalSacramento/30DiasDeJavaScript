// Declare firstName, lastName, country, city, age, isMarried, variável de ano e atribua valor a ela e use o operador typeof para verificar diferentes tipos de dados.
const firstName = 'Waldsson'
const lastName = 'Sacramento'
const country = 'Brasil'
const city = 'Penedo'
const age = 21
const isMarried = false
const now = new Date()
const ano = now.getFullYear()

console.log(
  typeof firstName +
    ' ' +
    typeof lastName +
    ' ' +
    typeof country +
    ' ' +
    typeof city +
    ' ' +
    typeof age +
    ' ' +
    typeof isMarried +
    ' ' +
    typeof ano
)

// Verifique se o tipo de '10' é igual a 10
const tipo = '10' == 10
console.log(tipo)

// Verifique se parseInt('9.8') é igual a 10
const type = '9.8' == 10
console.log(type)

// O valor booleano é verdadeiro ou falso.
const valorBooleano = true || false

console.log(valorBooleano)

// Escreva três instruções JavaScript que forneçam valor verdadeiro.
const inst1 = 1 == 1
const inst2 = 22 > 2
const inst3 = 3 != 1

console.log(inst1 + ' ' + inst2 + ' ' + inst3)

// Escreva três instruções JavaScript que forneçam valor falso.
const instFalse1 = 1 != 1
const instFalse2 = 22 < 2
const instFalse3 = 3 == 1

console.log(instFalse1 + ' ' + instFalse2 + ' ' + instFalse3)

// Descubra primeiro o resultado da seguinte expressão de comparação sem usar console.log(). Depois de decidir o resultado, confirme-o usando console.log()

// 4 > 3 true
// 4 >= 3 true
// 4 < 3 false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 false
// 4 != '4' false
// 4 == '4' true
// 4 === '4' true

// Encontre o comprimento de python e jargão e faça uma declaração de comparação falsa.
// Descubra primeiro o resultado das seguintes expressões sem usar console.log(). Depois de decidir o resultado, confirme-o usando console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 <3)
// !(falso)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// Não há 'on' em dragão e python
// Use o objeto Date para fazer as seguintes atividades

// Que ano é hoje?
// Qual é o mês hoje como um número?
// Qual é a data hoje?
// Qual é o dia de hoje como um número?
// Que horas são agora?
// Quais são os minutos agora?
// Descubra o número de segundos decorridos de 1º de janeiro de 1970 até agora.
