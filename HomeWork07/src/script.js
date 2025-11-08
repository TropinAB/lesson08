export function HomeWork07(element) {
    if (!element) return;

    // Сверстать страницу и подключить к ней файл со
    // скриптом. На странице должны быть три текстовых
    // параграфа, поле ввода и кнопка. 
    element.innerHTML = `
        <div class="textContainer">
            <p>Параграф 1</p>
            <p>Параграф 2</p>
            <p>Параграф 3</p>
        </div>
        <input type="text" id="input">
        <button class="button" hidden="true">Кнопка</button>
    `;
    const input = element.querySelector('#input');
    const button = element.querySelector('.button');
    const textContainer = element.querySelector('.textContainer');

    // Напишите скрипт,
    // который будет выполнять следующие условия:
    // 1.Кнопка скрыта, если в поле ввода нет значения.
    input.addEventListener('input', () => {
        button.hidden = event.target.value.length == 0;
    });

    button.addEventListener('click', () => {
        // 2.При клике на кнопку добавляется новый параграф,
        // содержащий текст из поля ввода.
        const newP = document.createElement('p');
        newP.innerText = input.value;
        textContainer.append(newP);

        // 3.*Если параграфов становится больше 5, первый из них удаляется.
        if (textContainer.children.length > 5) 
            textContainer.children[0].remove();

        input.value = '';
        button.hidden = true;
    });
}
