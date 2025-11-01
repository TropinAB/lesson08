// 1.В переменных a и b хранятся числа. Вывести в
// консоль наибольшее из них.
const a = 5;
const b = 57;
console.log( a>b ? a : b);

// 2.Запросить у пользователя ввод числа от 1 до 12.
// Вывести в консоль название месяца, соответствующее
// этому числу (1 — январь, 2 — февраль и т.д.).
let month = +prompt('Введите номер месяца: ');
switch (month) {
    case 1: month = 'Январь'; break;
    case 2: month = 'Февраль'; break;
    case 3: month = 'Март'; break;
    case 4: month = 'Апрель'; break;
    case 5: month = 'Май'; break;
    case 6: month = 'Июнь'; break;
    case 7: month = 'Июль'; break;
    case 8: month = 'Август'; break;
    case 9: month = 'Сентябрь'; break;
    case 10: month = 'Октябрь'; break;
    case 11: month = 'Ноябрь'; break;
    case 12: month = 'Декабрь'; break;
    default: month = 'Ошибочный ввод'; break;
}
console.log(month);

// *В переменных circle и square хранятся площади круга
// и квадрата соответственно. Написать программу,
// которая определяет, поместится ли круг в квадрат.
const circle = 50;
const square = 55;
// квадрат диаметра сравнить с площадью круга
const d2 = circle * 4 / 3.1415926;
console.log(`Круг ${d2 < square ? '' : 'НЕ '}помещается в квадрат`);