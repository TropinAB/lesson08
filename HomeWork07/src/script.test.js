import { HomeWork07 } from "./script.js";

describe('Тестирование ДЗ с параграфами, полем ввода и кнопкой добавления текста', () => {
  let element;
  let input;
  let button;
  let textContainer;

  beforeAll(() => {
    console.log('beforeAll - document exists?', !!document);
  });

  beforeEach(() => {
    console.log('beforeEach executed - document.body:', document.body);
    // console.log('window location:', window.location.href);
    element = document.createElement("div");
    HomeWork07(element);
    // console.log('beforeEach executed - element.innerHTML:', element.innerHTML);
    input = element.querySelector("#input");
    // console.log('beforeEach executed - !!input:', !!input);
    // console.log('beforeEach executed - !!input:', input.offsetWidth);
    button = element.querySelector(".button");
    // console.log('beforeEach executed - !!button:', !!button);
    // console.log('beforeEach executed - !!button:', button.offsetWidth);
    textContainer = element.querySelector('.textContainer');
    // console.log('beforeEach executed - !!textContainer:', !!textContainer);
    // console.log('beforeEach executed - textContainer.innerHTML:', textContainer.innerHTML);
    // console.log('beforeEach executed - textContainer.children:', textContainer.children.length);
    // console.log('beforeEach executed - textContainer.children:', Array.from(textContainer.children).map(p => p.innerHTML));
  });

  const getParagraphsText = () => Array.from(textContainer.children).map(p => p.innerHTML);

  const getVisibleCount = (selector) => Array.from(element.querySelectorAll(selector)).filter(i => !i.hidden).length;
  const getEnabledCount = (selector) => Array.from(element.querySelectorAll(selector)).filter(i => !i.disabled).length;

  describe("Проверка исходного состояния страницы", () => {
    it("Кол-во параграфов на странице = 3", () => {
      expect(getParagraphsText()).toHaveLength(3);
    });
    it("Кол-во видимых параграфов на странице = 3", () => {
      expect(getVisibleCount(".textContainer p")).toBe(3);
    });
    it("Кол-во полей ввода = 1", () => {
      expect(element.querySelectorAll("input").length).toBe(1);
    });
    it("Кол-во видимых полей ввода = 1", () => {
      expect(getVisibleCount("input")).toBe(1);
    });
    it("Кол-во активных полей ввода = 1", () => {
      expect(getEnabledCount("input")).toBe(1);
    });
    it("Кол-во кнопок = 1", () => {
      expect(element.querySelectorAll("button").length).toBe(1);
    });
    it("Кол-во видимых кнопок на странице = 0", () => {
      expect(getVisibleCount("button")).toBe(0);
    });
    it("Кол-во активных кнопок на странице = 1", () => {
      expect(getEnabledCount("button")).toBe(1);
    });
    it("Поле ввода: maxLength = -1", () => {
      expect(input.maxLength).toBe(-1);
    });
    it("Кнопка содержит описание = true", () => {
      expect(!!button.innerHTML).toBe(true);
    });
  });

  const fillInputText = (text) => {
    input.value = text;
    input.dispatchEvent(new Event("input"));
  };
  const clickButton = () => button.click();

  describe("Добавление 4го параграфа", () => {
    it("Ввести текст 'текст 001', Кол-во параграфов на странице = 3 (нет автоматического добавления)", () => {
      fillInputText("текст 001");
      expect(getParagraphsText()).toHaveLength(3);
    });
    it("Ввести текст 'текст 001', Кол-во видимых кнопок на странице = 1", () => {
      fillInputText("текст 001");
      expect(getVisibleCount("button")).toBe(1);
    });
    it("Ввести текст 'текст 001', Очистить текст, Кол-во видимых кнопок на странице = 0", () => {
      fillInputText("текст 001");
      fillInputText("");
      expect(getVisibleCount("button")).toBe(0);
    });
    it("Ввести текст 'текст 001', Нажать на кнопку -> кол-во параграфов = 4", () => {
      fillInputText("текст 001");
      clickButton();
      expect(getParagraphsText()).toHaveLength(4);
    });
    it("Ввести текст 'текст 001', Нажать на кнопку -> Текст 4-го параграфа = 'текст 001'", () => {
      fillInputText("текст 001");
      clickButton();
      expect(getParagraphsText()[3]).toBe("текст 001");
    });
    it("Ввести текст 'текст 001', Нажать на кнопку -> Текст в поле ввода = ''", () => {
      fillInputText("текст 001");
      clickButton();
      expect(input.value).toBe("");
    });
    it("Ввести текст 'текст 001', Нажать на кнопку -> Кол-во видимых кнопок на странице = 0", () => {
      fillInputText("текст 001");
      clickButton();
      expect(getVisibleCount("button")).toBe(0);
    });
  });

  describe("Добавление 5го параграфа", () => {
    it("Ввести текст 'текст 001', Нажать на кнопку, Ввести текст 'текст 002', Нажать на кнопку -> кол-во параграфов = 5", () => {
      fillInputText("текст 001");
      clickButton();
      fillInputText("текст 002");
      clickButton();
      expect(getParagraphsText()).toHaveLength(5);
    });
    it("Ввести текст 'текст 001', Нажать на кнопку, Ввести текст 'текст 002', Нажать на кнопку -> Текст 4-го параграфа = 'текст 001'", () => {
      fillInputText("текст 001");
      clickButton();
      fillInputText("текст 002");
      clickButton();
      expect(getParagraphsText()[3]).toBe("текст 001");
    });
    it("Ввести текст 'текст 001', Нажать на кнопку, Ввести текст 'текст 002', Нажать на кнопку -> Текст 5-го параграфа = 'текст 002'", () => {
      fillInputText("текст 001");
      clickButton();
      fillInputText("текст 002");
      clickButton();
      expect(getParagraphsText()[4]).toBe("текст 002");
    });
    it("Ввести текст 'текст 001', Нажать на кнопку, Ввести текст 'текст 002', Нажать на кнопку -> Текст 3 и 4-го параграфов = 'текст 001', 'текст 002'", () => {
      fillInputText("текст 001");
      clickButton();
      fillInputText("текст 002");
      clickButton();
      expect(getParagraphsText()[3]).toBe("текст 001");
      expect(getParagraphsText()[4]).toBe("текст 002");
    });
  });

  describe("Добавление 6-8 параграфа", () => {
    it("Ввести текст 'текст 001','текст 002','текст 003','текст 004','текст 005' и после каждого нажать кнопку -> кол-во параграфов = 5", () => {
      fillInputText("текст 001");
      clickButton();
      fillInputText("текст 002");
      clickButton();
      fillInputText("текст 003");
      clickButton();
      fillInputText("текст 004");
      clickButton();
      fillInputText("текст 005");
      clickButton();
      expect(getParagraphsText()).toHaveLength(5);
    });
    it("Ввести текст 'текст 001','текст 002','текст 003','текст 004','текст 005' и после каждого нажать кнопку -> Текст 1-4 параграфов = 'текст 001','текст 002','текст 003','текст 004','текст 005'", () => {
      fillInputText("текст 001");
      clickButton();
      fillInputText("текст 002");
      clickButton();
      fillInputText("текст 003");
      clickButton();
      fillInputText("текст 004");
      clickButton();
      fillInputText("текст 005");
      clickButton();
      expect(getParagraphsText()[0]).toBe("текст 001");
      expect(getParagraphsText()[1]).toBe("текст 002");
      expect(getParagraphsText()[2]).toBe("текст 003");
      expect(getParagraphsText()[3]).toBe("текст 004");
      expect(getParagraphsText()[4]).toBe("текст 005");
    });
  });

  describe("Экстримальные тесты", () => {
    it("Сгенерировать очень длинный текст в поле ввода, Нажать на кнопку -> Текст 4-го параграфа = сгенерированному тексту", () => {
      const longText = "Это часть очень длинного текста".repeat(10000);
      fillInputText(longText);
      clickButton();
      expect(getParagraphsText()[3]).toBe(longText);
    });
  });
});
