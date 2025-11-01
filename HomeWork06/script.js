// 1.Напишите функцию diff, которая получает в качестве
// параметров 2 числа и возвращает разницу между
// наибольшим и наименьшим.
function diff(a, b) {
    return a > b ? a - b : b - a;
}
// 2.Напишите функцию isWord, которая принимает на
// вход текстовую строку. Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких.
function isWord(str) {
    return str.trim().split(' ').length == 1;
}
// *Напишите функцию pow(a, x), которая вернёт
// значение числа a, возведённого в степень x.
function pow(a, x) {
    let res = 1;
    for (let i=0; i<x; i++) res *= a;
    return res;
}

console.log(diff(15, 21));
console.log(isWord('15, 21'));
console.log(isWord('15,21'));
console.log(pow(5, 3));
