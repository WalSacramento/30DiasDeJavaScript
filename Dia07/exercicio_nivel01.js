// Declare uma função fullName e imprima seu nome completo.
function fullName() {
  const nome = 'Waldsson'
  const sobrenome = 'Sacramento'
  const space = ' '

  return nome + space + sobrenome
}

console.log(fullName())

// Declare uma função fullName e agora ela recebe firstName, lastName como parâmetro e retorna seu nome completo.
function fullName(nome, sobrenome) {
  const space = ' '

  return nome + space + sobrenome
}

console.log(fullName('teste', 'testado'))

// Declare uma função addNumbers e leva dois dois parâmetros e retorna soma.
const addNumbers = (num1, num2) => num1 + num2

console.log(addNumbers(2, 2))

// A área de um retângulo é calculada da seguinte forma: área = comprimento x largura . Escreva uma função que calcula areaOfRectangle .
const areaOfRectangle = (comprimento, largura) => comprimento * largura

console.log(areaOfRectangle(3, 5))

// O perímetro de um retângulo é calculado da seguinte forma: perímetro= 2x(comprimento + largura) . Escreva uma função que calcula o perímetroOfRectangle .
const perímetroOfRectangle = (comprimento, largura) =>
  2 * (comprimento + largura)

console.log(perímetroOfRectangle(3, 5))

// O volume de um prisma retangular é calculado da seguinte forma: volume = comprimento x largura x altura . Escreva uma função que calcula volumeOfRectPrism .
const volumeOfRectPrism = (comprimento, largura, altura) =>
  comprimento * largura * altura

console.log(volumeOfRectPrism(1, 2, 3))

// A área de um círculo é calculada da seguinte forma: area = π xrxr . Escreva uma função que calcula areaOfCircle
const areaOfCircle = (raio, pi = 3.14) => pi * raio * raio

console.log(areaOfCircle(3))

// A circunferência de um círculo é calculada da seguinte forma: circunferência = 2πr . Escreva uma função que calcula circumOfCircle
const circumOfCircle = (raio, pi = 3.14) => 2 * pi * raio

console.log(areaOfCircle(3))

// A densidade de uma substância é calculada da seguinte forma: densidade = massa/volume . Escreva uma função que calcula a densidade .
const densidade = (massa, volume) => massa / volume

console.log(densidade(10, 5))

// A velocidade é calculada dividindo a distância total percorrida por um objeto em movimento pela quantidade total de tempo gasto. Escreva uma função que calcule a velocidade de um objeto em movimento, velocidade .
const velocidade = (distancia, tempo) => distancia / tempo

console.log(velocidade(10, 5))

// O peso de uma substância é calculado da seguinte forma: peso = massa x gravidade . Escreva uma função que calcule o peso .
const peso = (massa, gravidade = 9.81) => massa * gravidade

console.log(peso(3))

// A temperatura em oC pode ser convertida em oF usando esta fórmula: oF = (oC x 9/5) + 32 . Escreva uma função que converta oC em oF convertCelsiusToFahrenheit .
const convertCelsiusToFahrenheit = celsius => (celsius * 9) / 5 + 32

console.log(convertCelsiusToFahrenheit(34))

// O índice de massa corporal (IMC) é calculado da seguinte forma: IMC = peso em Kg / (altura x altura) em m2 . Escreva uma função que calcule bmi . O IMC é usado para definir amplamente diferentes grupos de peso em adultos de 20 anos ou mais. Verifique se uma pessoa está abaixo do peso, normal, acima do peso ou obesa com base nas informações fornecidas abaixo.
// Os mesmos grupos se aplicam a homens e mulheres.
// Abaixo do peso : o IMC é inferior a 18,5
// Peso normal : o IMC é de 18,5 a 24,9
// Excesso de peso : o IMC é de 25 a 29,9
// Obeso : IMC é 30 ou mais
const bmi = (peso, altura) => {
  imc = peso / (altura * altura)

  if (imc < 18.5) {
    return 'Abaixo do peso'
  } else if (imc >= 18.5 || imc < 24.9) {
    return 'Peso normal'
  } else if (imc >= 25 || imc < 29.9) {
    return 'Excesso de peso'
  } else if (imc >= 30) {
    return 'Obeso'
  }
}

console.log(bmi(80, 1.82))
