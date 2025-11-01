// Сверстать страницу и подключить к ней файл со
// скриптом. На странице должны быть три текстовых
// параграфа, поле ввода и кнопка. Напишите скрипт,
// который будет выполнять следующие условия:
const input = document.querySelector('#input');
const button = document.querySelector('.button');
const textContainer = document.querySelector('.textContainer');

// 1.Кнопка скрыта, если в поле ввода нет значения.
function updateButtonVisibility(event) {
    button.hidden = event.target.value.length == 0;
}
input.addEventListener('keyup', updateButtonVisibility);
input.addEventListener('change', updateButtonVisibility);

// 2.При клике на кнопку добавляется новый параграф,
// содержащий текст из поля ввода.
function appendParagraph() {
    const newP = document.createElement('p');
    newP.innerText = input.value;
    textContainer.append(newP)

    // 3.*Если параграфов становится больше 5, первый из них удаляется.
    if (textContainer.children.length > 5) 
        textContainer.children[0].remove();

    input.value = '';
    button.hidden = true;
}

button.addEventListener('click', appendParagraph);

