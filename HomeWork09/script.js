// 1.Даны длины трёх сторон треугольника. Определить,
// является ли треугольник прямоугольным.
const [a, b, c] = [3,4,5].sort((a,b) => a - b);
console.log(a,b,c);
if ( a*a + b*b == c*c) 
    console.log('Прямоугольный');
else
    console.log('НЕ прямоугольный');

// 2.Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и
// площадь круга с радиусом R.
const R = +prompt('Введите R');
console.log(`Длина окружности = ${(2*Math.PI*R).toFixed(3)}`);
console.log(`Площадь круга = ${(Math.PI*R*R).toFixed(3)}`);

// *Пользователь вводит числа a, b и c. Написать
// программу, выводящую корни квадратного
// уравнения с коэффициентами a, b и c.
try {
    const [a=0, b=0, c=0] = prompt('a b c:').split(' ');
    const D = b*b - 4*a*c;
    const x1 = ( -b + Math.sqrt(D) ) / (2 * a);
    const x2 = ( -b - Math.sqrt(D) ) / (2 * a);
    console.log(x1, x2);
} catch (error) {
    console.error(error);
}