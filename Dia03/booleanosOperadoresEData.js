// /BOOLEANOS

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3 // true
let falseValue = 4 < 3 // false

console.log(truValue)

// valores verdadeiros
// Todos os números (positivos e negativos) são verdadeiros, exceto zero
// Todas as strings são verdadeiras, exceto uma string vazia ('')
// O booleano verdadeiro

// valores falsos
// 0
// 0n
// nulo
// Indefinido
// NaN
// o booleano falso
// '', "", ``, string vazia

// INDEFINIDOS

// Se declararmos uma variável e não atribuirmos um valor, o valor será indefinido. Além disso, se uma função não estiver retornando o valor, ela ficará indefinida.

let firstName1
console.log(firstName1) //not defined, because it is not assigned to a value yet

// OPERADORES ARITMETICOS
// Se declararmos uma variável e não atribuirmos um valor, o valor será indefinido. Além disso, se uma função não estiver retornando o valor, ela ficará indefinida.

let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet

//DATA JAVASCRIPT

const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

console.log(now.getMonth()) // 0, because the month is January,  month(0-11)
console.log(now.getHours()) // 0, because the time is 00:56:41
