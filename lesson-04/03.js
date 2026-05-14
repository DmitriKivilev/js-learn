/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if ( element === array[i])
            return true
        } 
    return false
    }

function findCommonElements(array_1,array_2){
    let arrayTask = []
   for (let index = 0; index < array_1.length; index++) {
    if (includesElement(array_2, array_1[index])){
        arrayTask.push(array_1[index])
    }
    }
    return arrayTask
}

console.log (findCommonElements([1, 2, 3], [2, 3, 4]))