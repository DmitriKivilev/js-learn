/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let startNumber = 1;
const endNumber = 21;
while (startNumber < endNumber){
  if(startNumber % 2 == 1){
    sum += startNumber
    startNumber ++
    continue
  }
  else{startNumber ++
    
  }
};
console.log(`Сумма нечетных чисел равна ${sum}`);