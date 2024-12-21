const {readFileSync, writeFileSync} = require('fs')

console.log("starting the task")

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/result.txt', `here is the result : ${first}, ${second}`)

console.log("done with the task")