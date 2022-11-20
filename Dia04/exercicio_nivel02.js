// Escreva um código que possa dar notas aos alunos de acordo com suas pontuações:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let pontuacao

pontuacao = window.prompt('Insira sua pontuação:')

if (pontuacao >= 90 && pontuacao <= 100) {
  console.log('sua nota é: A')
} else if (pontuacao >= 70 && pontuacao <= 89){
  console.log('sua nota é: B')
}else if (pontuacao >= 60 && pontuacao <= 69){
  console.log('sua nota é: C')
}else if (pontuacao >= 50 && pontuacao <= 59){
  console.log('sua nota é: D')
}else if (pontuacao >= 0 && pontuacao <= 49){
  console.log('sua nota é: F')
}


// Verifique se a estação é outono, inverno, primavera ou verão. Se a entrada do usuário for:
// Setembro, outubro ou novembro, a estação é o outono.
// Dezembro, janeiro ou fevereiro, a estação é o inverno.
// Março, abril ou maio, a estação é a primavera
// Junho, julho ou agosto, a temporada é verão
// Verifique se um dia é dia de fim de semana ou dia útil. Seu script terá day como entrada.

let mes 

mes = window.prompt('Digite o mês: ')

if (mes == 'setembro' || mes == 'outubro' || mes == 'novembro' ){
  console.log ('A estação é outono!')
} else if (mes == 'dezembro' || mes == 'janeiro' || mes == 'fevereiro'){
  console.log ('A estação é inverno!')
} else if (mes == 'março' || mes == 'abril' || mes == 'maio'){
  console.log ('A estação é primavera!')
} else if (mes == 'junho' || mes == 'julho' || mes == 'agosto'){
  console.log ('A estação é verão!')
} else {
  console.log ('você digitou um mês não correspondente!')
}

// Verifique se um dia é dia de fim de semana ou dia útil. Seu script terá day como entrada.

let day
const diaUtil = ('segunda terca quarta quinta sexta')
const finalDeSemana = ('sabado sábado domingo')


day = window.prompt('Informe o dia da semana: ')

if (diaUtil.includes(day)){
  console.log (day + ' é dia útil!')
} else if ( finalDeSemana.includes(day)){
  console.log (day + ' é final de semana!')
} else {
  console.log (day + ' não é um dia válido!')
}