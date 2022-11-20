// Escreva um programa que informe o número de dias em um mês.
let day
const days31 = 'janeiro marco março maio julho agosto outubro dezembro'
const days30 = 'abril junho setembro novembro'
const days28 = 'fevereiro'

day = window.prompt('Informe o mês:')

if (days30.includes(day)) {
  console.log('O mês ' + day + ' tem 30 dias!')
} else if (days31.includes(day)) {
  console.log('O mês ' + day + ' tem 31 dias!')
} else if (days28.includes(day)) {
  console.log('O mês possui 28 dias, 29 se o ano for bissexto!')
} else {
  console.log(day + ' não é um dia válido!')
}
