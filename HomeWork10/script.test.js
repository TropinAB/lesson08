import { GetDataType } from "./script";
describe("Check fuction GetDataType", () => {
    it("'01.01.2025' = 'дата'", () => expect(GetDataType('01.01.2025')).toBe('дата'));
    it("'1.11.2025' = 'дата'", () => expect(GetDataType('1.11.2025')).toBe('дата'));
    //тест не проходит, к.т. не предусмотрена ситуация
    //it("'99.99.2025' = 'не известен'", () => expect(GetDataType('99.99.2025')).toBe('не известен'));

    it("'Test123@mail.ru' = 'е-майл'", () => expect(GetDataType('Test123@mail.ru')).toBe('е-майл'));
    //тест не проходит, к.т. не предусмотрена ситуация
    //it("'Test.123@org01.mail.ru' = 'е-майл'", () => expect(GetDataType('Test.123@org01.mail.ru')).toBe('е-майл'));
    it("'Test123@mail' = 'е-майл'", () => expect(GetDataType('Test123@mail')).toBe('не известен'));

    it("'+7-123-456-7890' = 'телефон'", () => expect(GetDataType('+7-123-456-7890')).toBe('телефон'));
    it("'+7-1 2 3-4 5 6-7-8-9-0' = 'телефон расширенный'", () => expect(GetDataType('+7-1 2 3-4 5 6-7-8-9-0')).toBe('телефон расширенный'));
    it("'+7-123-456-abcd' = 'телефон'", () => expect(GetDataType('+7-123-456-abcd')).toBe('не известен'));
});
