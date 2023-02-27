import { describe, expect, it } from "vitest";
import { sequentialDigits } from "../1291.顺次数";

describe('顺次数', () => {
    it('1', () => {
        const low = 100;
        const high = 300;
        const res = sequentialDigits(low, high);
        console.log(res)
        expect(res).toStrictEqual([123, 234])
    })
    it('2', () => {
        const low = 1000;
        const high = 13000;
        const res = sequentialDigits(low, high);
        console.log(res)
        expect(res).toStrictEqual([1234,2345,3456,4567,5678,6789,12345])
    })
})