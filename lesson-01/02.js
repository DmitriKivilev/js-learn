/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial;
let count = 1;
let numberStart = 1;
const numberEnd = 11;
while (numberStart < numberEnd){
  count *= numberStart
  numberStart ++
} ;

factorial = count;
console.log(factorial)