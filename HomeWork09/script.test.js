import { isRightTriangle, CircleLength, CircleArea, SolveQuadraticEquation } from "./script";

describe("Check fuction isRightTriangle", () => {
    it("isRightTriangle(2,3,4) = false", () => expect(isRightTriangle(2,3,4)).toBe(false));
    it("isRightTriangle(3,4,5) = true", () => expect(isRightTriangle(3,4,5)).toBe(true));
    it("isRightTriangle(5,3,4) = true", () => expect(isRightTriangle(5,3,4)).toBe(true));
});

describe("Check fuction CircleLength", () => {
    it("CircleLength(1).toFixed(3) = '6.283'", () => expect(CircleLength(1).toFixed(3)).toBe('6.283'));
    it("CircleLength(-1) = 0", () => expect(CircleLength(-1)).toBe(0));
});

describe("Check fuction CircleArea", () => {
    it("CircleArea(1).toFixed(5) = '3.14159'", () => expect(CircleArea(1).toFixed(3)).toBe('3.14159'));
    it("CircleArea(-1) = 0", () => expect(CircleArea(-1)).toBe(0));
});

describe("Check fuction SolveQuadraticEquation", () => {
    it("SolveQuadraticEquation(1, 2, 1) = [-1, -1]", () => expect(SolveQuadraticEquation(1, 5, 6)).toBe([-1, -1]));
    it("SolveQuadraticEquation(1, 5, 6) = [-1, -4]", () => expect(SolveQuadraticEquation(1, 5, 6)).toBe([-1, -4]));
});
