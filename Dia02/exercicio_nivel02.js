// Usando console.log() imprima a seguinte declaração:
const John =
  "'There is no exercise better for the heart than reaching down and lifting people up.'"
const help = 'help'
console.log(
  'The quote ' +
    John +
    ' by John Holmes teacher us to ' +
    help +
    ' one another.'
)

// Usando console.log() imprima a seguinte citação de Madre Teresa:
const madre =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log('\n' + madre)

// Verifique se typeof '10' é exatamente igual a 10. Caso contrário, torne-o exatamente igual.
const string10 = '10'
let num10

num10 = parseInt(string10)

console.log('\n')
console.log(typeof num10)

// Verifique se parseFloat('9.8') é igual a 10, caso contrário, torne-o exatamente igual a 10.
console.log('\n')
console.log(parseInt('9.8') + 1)

// Verifique se 'on' é encontrado em 'python and jargon'
const frase = 'python and jargon'

console.log('\n')
console.log(frase.includes('python'))

// Espero que este curso não esteja cheio de jargões . Verifique se o jargão está na frase.
const jargon = 'I hope this course is not full of jargon.'

console.log('\n')
console.log(jargon.includes('jargon'))

// Gere um número aleatório entre 0 e 100 inclusive.
let randomNum = Math.random() // generates 0 to 0.999
let numeroZeroADez = randomNum * 11

//console.log(numeroZeroADez) // this gives: min 0 and max 10.99

let numeroAleatorioArredondado = Math.floor(numeroZeroADez)
console.log(numeroAleatorioArredondado)

// Gere um número aleatório entre 50 e 100 inclusive.
let randomNumero = Math.random() // generates 0 to 0.999
let numero50A100 = randomNum * 11

//console.log(numeroZeroADez) // this gives: min 0 and max 10.99

let numeroAleatorioArredondado1 = Math.floor(numeroZeroADez)
console.log(numeroAleatorioArredondado)

// Gere um número aleatório entre 0 e 255 inclusive.

// Acesse os caracteres da string 'JavaScript' usando um número aleatório.

// Use console.log() e caracteres de escape para imprimir o seguinte padrão.
// Use substr para separar a frase porque porque porque da seguinte frase: 'Você não pode terminar uma frase com porque porque porque porque é uma conjunção'
