// Obtenha a entrada do usuário usando prompt(“Digite sua idade:”). Se o usuário tiver 18 anos ou mais, dê feedback: 'Você tem idade suficiente para dirigir', mas se não tiver 18 anos, dê outro feedback informando para esperar o número de anos que ele precisa para completar 18 anos.

let idadeDoUsuario
let idadeParaDirigir = 18
idadeDoUsuario = window.prompt('Digite a sua idade:')

if (idadeDoUsuario >= 18) {
  console.log('Você possui idade suficiente para dirigir!')
} else {
  console.log('Você precisa aguardar ' + (idadeParaDirigir - idadeDoUsuario) + ' anos para dirigir')
}

// Compare os valores de myAge e yourAge usando if … else. Com base na comparação e registre o resultado no console informando quem é mais velho (eu ou você). Use prompt(“Enter your age:”) para obter a idade como entrada.

let myAge
let yourAge

myAge = window.prompt('Digite a minha idade:')
yourAge = window.prompt('Digite a sua idade:')

if (myAge >= yourAge){
  console.log('Eu sou mais velho, possuo ' + (myAge - yourAge) + ' anos de diferença!')
} else {
  console.log('Eu você é mais velho, possui ' + (yourAge - myAge) + ' anos de diferença!')
}

// Se a for maior que b, retorne 'a é maior que b', caso contrário, 'a é menor que b'. Tente implementá-lo de maneiras

// usando if else
let a = 3
let b = 4

if (a >= b){
  console.log(a + ' é maior que ' + b)
} else {
  console.log(b + ' é maior que ' + a)
}

// operador ternário.

a > b
? console.log(a + ' é maior que ' + b)
: console.log(b + ' é maior que ' + a)

// Números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou não usando JavaScript?

let num

num = window.prompt('Digite um número:')

if (num % 2 == 0){
  console.log(num + ' é par!')
} else {
  console.log(num + ' é impar!')
}