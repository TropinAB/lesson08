// 1.Даны длины трёх сторон треугольника. Определить,
// является ли треугольник прямоугольным.
export function isRightTriangle(a, b, c) {
    [a, b, c] = [a, b, c].sort((a,b) => a - b);
    return (a*a + b*b === c*c);
}
// console.log(`${isRightTriangle(5,4,3) ? 'Прямоугольный' : 'НЕ прямоугольный'}`);

// 2.Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и
// площадь круга с радиусом R.
export function CircleLength(r) {
    return r > 0 ? 2*Math.PI*r : 0;
}
export function CircleArea(r) {
    return r > 0 ? Math.PI*r*r : 0;
}
// const R = +prompt('Введите R');
// console.log(`Длина окружности = ${CircleLength(R).toFixed(3)}`);
// console.log(`Площадь круга = ${CircleArea(R).toFixed(3)}`);

// *Пользователь вводит числа a, b и c. Написать
// программу, выводящую корни квадратного
// уравнения с коэффициентами a, b и c.
export function SolveQuadraticEquation(a, b, c) {
    const D = b*b - 4*a*c;
    const x1 = ( -b + Math.sqrt(D) ) / (2 * a);
    const x2 = ( -b - Math.sqrt(D) ) / (2 * a);
    return [x1, x2];
}

// const [a=0, b=0, c=0] = prompt('a b c:').split(' ');
// console.log(SolveQuadraticEquation(a, b, c));
