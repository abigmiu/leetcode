import { describe, expect, it } from "vitest";
import { compareAnswer, createNode } from "./createNode";
import { reverseList } from '../206. 反转链表'

describe('18, 删除链表中的节点', () => {
    it('test1', () => {
        const value = 5;
        const linkListArray = [1, 2, 3, 4, 5]
        const linkList = createNode(linkListArray);

        const answerArray = [5, 4, 3, 2, 1]
        const res = reverseList(linkList)
        const isCorrect = compareAnswer(res, answerArray)
        expect(isCorrect).toBe(true);
    })
     it('test2', () => {
        const value = 5;
        const linkListArray = [1]
        const linkList = createNode(linkListArray);

        const answerArray = [1]
        const res = reverseList(linkList)
        const isCorrect = compareAnswer(res, answerArray)
        expect(isCorrect).toBe(true);
    })

})
