import { describe, expect, it } from "vitest";
import { twoSum } from "../167. 两数之和 II - 输入有序数组";

describe('两数之和 II - 输入有序数组', () => {
    it('1', () => {
        const numbers = [2, 7, 11, 15];
        const target = 9;

        const [a, b] = twoSum(numbers, target);
        expect(a).toBe(1);
        expect(b).toBe(2);
    })
    it('2', () => {
        const numbers = [2, 3, 4];
        const target = 6;

        const [a, b] = twoSum(numbers, target);
        expect(a).toBe(1);
        expect(b).toBe(3);
    })
    it('1', () => {
        const numbers = [-1, 0];
        const target = -1;

        const [a, b] = twoSum(numbers, target);
        expect(a).toBe(1);
        expect(b).toBe(2);
    })
 })
