// Crie um objeto vazio chamado cachorro
const cachorro1 = {}

// Imprima o objeto cachorro no console
console.log(cachorro)

// Adicione propriedades de nome, pernas, cor, idade e latido para o objeto cachorro. A propriedade bark é um método que retorna woof woof
const cachorro = {
  nome: 'Meggie',
  pernas: 'Longas',
  cor: 'Caramelo',
  idade: 10,
  latido: () => 'wolf, wolf'
}

// Obtenha nome, pernas, cor, idade e valor do latido do objeto cão
console.log(cachorro)

// Defina novas propriedades do objeto cachorro: raça, getDogInfo
cachorro.raça = 'Pastor Alemão'
cachorro.getDogInfo = () => {
  return `Eu sou ${cachorro.nome}, tenho pernas ${cachorro.pernas}, minha cor é ${cachorro.cor}, possuo ${cachorro.idade} anos, meu latido é ${cachorro.latido} e minha raça é ${cachorro.raça}`
}

console.log(cachorro.getDogInfo())
