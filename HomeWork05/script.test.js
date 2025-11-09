import { ArraySum, ArrayDouble, ArrayMinMax } from "./script";

const array1 = [11,53,84,24,68,25,75,35,99,44];
describe("Check fuction ArraySum", () => {
    it("ArraySum(array1) = 11", () => expect(ArraySum(array1)).toBe(518));
});

describe("Check fuction ArrayDouble", () => {
    it("ArrayDouble(array1) = 11", () => expect(ArrayDouble(array1)).toEqual([22, 106, 168, 48, 136, 50, 150, 70, 198, 88]));
});

describe("Check fuction ArrayMinMax", () => {
    it("ArrayDouble(array1) = 11", () => expect(ArrayMinMax(array1)).toEqual([11, 99]));
});
