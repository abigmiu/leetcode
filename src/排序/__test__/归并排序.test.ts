import { describe, expect, it } from "vitest";
import { sort } from "../归并排序";

describe('归并排序', () => {
    it('1', () => {
        const ary = [4, 3, 5, 66, 4];
        const res = sort(ary);
        expect(res).toStrictEqual([3, 4, 4, 5, 66]);
    })
})
