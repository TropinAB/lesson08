// Создайте массив целых чисел из 10 элементов.
const array1 = [11,53,84,24,68,25,75,35,99,44];
// 1.Выведите в консоль сумму всех элементов массива.
export function ArraySum(array) {
    let sum = 0;
    array.forEach(item => sum += item);
    return sum;
}
console.log(ArraySum(array1));

// 2.Создайте новый массив на основе исходного, в
// котором каждый элемент будет вдвое больше
// элемента исходного массива с таким же индексом.
// (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
// массив).
export function ArrayDouble(array) {
    return array.map(item => item * 2);
}
console.log(ArrayDouble(array1));

// 3.*Найдите и выведите в консоль наибольший и
// наименьший элементы исходного массива.
export function ArrayMinMax(array) {
    let min = array[0];
    let max = array[0];
    array.forEach(item => {
        if (item < min) min = item;
        if (item > max) max = item;
    });
    return [min, max];
}
console.log(ArrayMinMax(array1));
