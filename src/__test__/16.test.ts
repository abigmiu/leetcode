import { describe, expect, it } from "vitest";
import { threeSumClosest } from "../16. 最接近的三数之和";


describe('最接近的三数之和', () => {
    it('1', () => {
        const nums = [-1, 2, 1, 4]
        const target = 1;

        const res = threeSumClosest(nums, target);
        expect(res).toBe(2)
    })
    it('2', () => {
        const nums = [0 , 0 , 0];
        const target = 1;
        const res = threeSumClosest(nums, target);
        expect(res).toBe(0)
    })
    it('3', () => {
        const nums = [0 , 1 , 2];
        const target = 3;
        const res = threeSumClosest(nums, target);
        expect(res).toBe(3)
    })
})
