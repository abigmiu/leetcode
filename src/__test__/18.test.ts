import { describe, expect, it } from "vitest";
import { compareAnswer, createNode } from "./createNode";
import { deleteNode } from '../18. 删除链表的节点'

describe('18, 删除链表中的节点', () => {
    it('test1', () => {
        const value = 5;
        const linkListArray = [4, 5, 1, 9]
        const linkList = createNode(linkListArray);

        const answerArray = [4, 1, 9]
        const res = deleteNode(linkList, value)
        const isCorrect = compareAnswer(res, answerArray)
        expect(isCorrect).toBe(true);
    })
     it('test2', () => {
        const value = 1;
        const linkListArray = [4, 5, 1, 9]
        const linkList = createNode(linkListArray);

        const answerArray = [4, 5, 9]
        const res = deleteNode(linkList, value)
        const isCorrect = compareAnswer(res, answerArray)
        expect(isCorrect).toBe(true);
    })
    it('test3', () => {
        const value = 4;
        const linkListArray = [4, 5, 1, 9]
        const linkList = createNode(linkListArray);

        const answerArray = [5, 1, 9]
        const res = deleteNode(linkList, value)
        const isCorrect = compareAnswer(res, answerArray)
        expect(isCorrect).toBe(true);
    })
})
