const nested =
  ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]]
// console.log(nested.flat())
// console.log(nested.flat().flat())
// console.log(nested.flat(2))
const techs = ['react', 'angular', 'vue', 'deno and node']
// console.log(techs.map(techs => techs.split(' ')).flat())
console.log(techs.flatMap(techs => techs.split(' '))) // [ 'react', 'angular', 'vue', 'deno', 'and', 'node' ]
