// Um callback é uma função que pode ser passada como parâmetro para outra função. Veja o exemplo abaixo.

// a callback function, the name of the function could be any name
const callback1 = (n) => {
  return n ** 2
}
​
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))

// Um callback é uma função que pode ser passada como parâmetro para outra função. Veja o exemplo abaixo.

// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))