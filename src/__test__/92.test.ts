import { describe, expect, it } from "vitest";
import { reverseBetween } from "../92. 反转链表 II";
import { createNode, compareAnswer } from "./createNode";

describe('92. 反转链表', () => {
    it('test 1', () => {
        const left = 2;
        const right = 4;
        const linkListArray = [1, 2, 3, 4, 5];
        const answerArray = [1, 4, 3, 2, 5];
        const linkList = createNode(linkListArray);

        const res = reverseBetween(linkList, left, right);
        const isCorrect = compareAnswer(res, answerArray)
        expect(isCorrect).toBe(true)
    })
})
