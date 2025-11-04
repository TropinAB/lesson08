// 1.Запросите у пользователя дату в формате
// ДД.ММ.ГГГГ. Напишите программу, выводящую день
// недели по введённой дате.
const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
function DayOfWeek(strDate) {
    const [d='01',m='01',y='1970'] = sDate.split('.');
    const date = new Date(`${y}-${m}-${d}`);
    return weekDays[date.getDay()];
}
const sDate = prompt('ДД.ММ.ГГГГ');
console.log(DayOfWeek(sDate));

// 2.Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня.
function MinuteOfDay() {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
}
console.log(MinuteOfDay());

// 3.*В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
// пользователя.
function StrToDate(sDate) {
    const [d='01',m='01',y='1970'] = sDate.split('.');
    return new Date(`${y}-${m}-${d}`);
}
const user1 = {
    name: 'User 1',
    birstDate: '02.10.1975'
};
const user2 = {
    name: 'User 2',
    birstDate: '23.09.1977'
};
console.log( StrToDate(user1.birstDate) > StrToDate(user2.birstDate) 
             ? user1.name : user2.name);
