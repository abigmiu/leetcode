import { describe, expect, it } from "vitest";
import { findContentChildren } from "../455. 分发饼干";

describe('455. 分发饼干', () => {
    it('1', () => {
        const g = [1, 2, 3]
        const s = [1, 1]

        expect(findContentChildren(g, s)).toBe(1);
    })
    it('2', () => {
        const g = [1, 2]
        const s = [1, 2, 3]

        expect(findContentChildren(g, s)).toBe(2);
    })
})
