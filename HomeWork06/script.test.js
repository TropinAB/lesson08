import { diff, isWord, pow } from "./script";

describe("Check fuction diff", () => {
    it("diff(2,13) = 11", () => expect(diff(2,13)).toBe(11));
    it("diff(13,5) = 8", () => expect(diff(13,5)).toBe(8));
});

describe("Check fuction isWord", () => {
    it("isWord('abc') = true", () => expect(isWord('abc')).toBe(true));
    it("isWord('abc def') = false", () => expect(isWord('abc def')).toBe(false));
});

describe("Check fuction pow", () => {
    it("pow(2, 2) = 4", () => expect(pow(2, 2)).toBe(4));
    it("pow(2, -2) = 0.25", () => expect(pow(2, -2)).toBe(0.25));
});
