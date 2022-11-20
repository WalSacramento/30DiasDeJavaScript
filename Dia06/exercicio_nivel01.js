// Itere de 0 a 10 usando for loop, faça o mesmo usando while e faça while loop
let i

for (i = 0; i <= 10; i++) {
  console.log(i)
}
console.log('\n')

i = 0
while (i <= 10) {
  console.log(i)
  i++
}
console.log('\n')

i = 0
do {
  console.log(i)
  i++
} while (i <= 10)
console.log('\n')

// Iterar 10 a 0 usando for loop, fazer o mesmo usando while e fazer while loop
for (i = 10; i >= 0; i--) {
  console.log(i)
}
console.log('\n')

i = 10
while (i >= 0) {
  console.log(i)
  i--
}
console.log('\n')

i = 10
do {
  console.log(i)
  i--
} while (i >= 0)
console.log('\n')

// Iterar 0 até n usando o loop for
const n = 5

for (i = 0; i <= n; i++) console.log('\n')

// Escreva um loop que faça o seguinte padrão usando console.log():
const string = '#'

for (i = 0; i <= 7; i++) {
  console.log(string.repeat(i))
}
console.log('\n')

// Use loop to print the following pattern:
for (i = 0; i <= 10; i++) {
  console.log(i, ' X ', i, ' = ', i * i)
}

// Using loop print the following pattern
console.log('i i² i³')
for (i = 0; i <= 10; i++) {
  console.log(i, i * i, i * i * i)
}
