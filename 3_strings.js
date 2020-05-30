const start = '        Hello You   '
const end = 'This is new JS features         '
// console.log(start.trimStart() + end.trimEnd())
// console.log(start.trim() + end.trim())
// console.log((start + end).trim())
// console.log('vk'.padStart(6, 'www.')) // www.vk
// console.log('vk'.padEnd(6, '.com')) // vk.com
// ===
function tag (strings, name, age) {
  const [s1, s2, s3] = strings
  const ageSts = age > 42 ? 'older' : 'younger'
  console.log(name, age)
  return `${s1}${name}${s2}${ageSts}${s3}`
}

const person = {
  name: 'Max',
  age: 30,
}
const output = tag`pesons name ${person.name} is ${person.age} in the family!`
console.log(output)
