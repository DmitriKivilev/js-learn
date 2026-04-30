// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num_1, num_2, num_3) {
    let numMax = num_1
    
    if (num_2 > numMax) {
        numMax = num_2
    } 

    if (num_3 > numMax){
        numMax = num_3
    }
    return numMax
}
console.log(findLargest(7, 3, 10))