import { DayOfWeek, MinuteOfDay } from "./script";

describe("Check fuction DayOfWeek", () => {
    it("DayOfWeek('4.11.2025') = 'Вторник'", () => expect(DayOfWeek('4.11.2025')).toBe('Вторник'));
    it("DayOfWeek('1.1.2026') = 'Четверг'", () => expect(DayOfWeek('1.1.2026')).toBe('Четверг'));
});

describe("Check fuction MinuteOfDay", () => {
    //Выполнимость теста будет зависеть от времени запуска.
    //Как правильно делать такие проверки?
    it("MinuteOfDay() = minuteOfDay", () => {
        const now = new Date();
        const minuteOfDay = now.getHours() * 60 + now.getMinutes();
        expect(MinuteOfDay()).toBe(minuteOfDay);
    });
});
