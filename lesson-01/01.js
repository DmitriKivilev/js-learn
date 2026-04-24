// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum
// your code

let sum = 0
const number = 20
let startChar = 1
while (number >= startChar){
    sum += startChar
    startChar ++
}
console.log(`Сумма чисел от 1 до 20 ${sum}`)
