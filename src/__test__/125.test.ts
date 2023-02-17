import { describe, expect, it } from "vitest";
import { isPalindrome } from "../125. 验证回文串";

describe('125. 验证回文串', () => {
    it('1', () => {
        const str = 'A man, a plan, a canal: Panama';
        expect(isPalindrome(str)).toBe(true);
    })
    it('2', () => {
        const str = 'race a car';
        expect(isPalindrome(str)).toBe(false);
    })
    it('3', () => {
        const str = ' ';
        expect(isPalindrome(str)).toBe(true);
    })
})
