// Пользователь вводит текстовую строку. Определить с
// помощью регулярного выражения, является ли
// введённая строка:
// 1.Датой.
const patternDate = /\d{1,2}\.\d{1,2}\.\d{4}/;
// 2.Адресом электронной почты.
const patternEMail = /[\w\-\.]+@[\w\-]+\.[a-z]{2,5}/ig;
// 3.*Номером телефона.
const patternPhone = /\+\d{1}[-\s]?\d{3}[-\s]?\d{3}[-\s]?\d{4}/;
const patternPhone2 = /\+\d{1}([\-\s]?\d){10}/;

const input = prompt ('Введите дату/емайл/номер телефона');

if (patternDate.test(input))
    console.log(`${input} - дата`); 
else if (patternEMail.test(input))
    console.log(`${input} - е-майл`);
else if (patternPhone.test(input))
    console.log(`${input} - телефон`);
else if (patternPhone2.test(input))
    console.log(`${input} - телефон расширенный`);
else
    console.log(`${input} - не опознан`);

//На разборе предложены шаблоны:
const reg1 = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/; //Дата
const reg2 = /[\da-z\.]+@[\da-z]+\.[a-z]+/; //е-майл
const reg3 = /\+\d[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0,1}\d{2}/; //телефон

