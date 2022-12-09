import { createNode, ListNode } from "./createNode";
import { swapPairs } from '../24. 两两交换链表中的节点';
import { describe, expect, it } from 'vitest';

function compareAnswer(yourAnswer: ListNode | null, correctAnswer: Array<number>) {
    if (yourAnswer === null && !compareAnswer.length) return true;

    const yourAnswerArray: Array<number> = [];
    let cursor: ListNode | null = yourAnswer;
    while (cursor) {
        yourAnswerArray.push(cursor.val)
        cursor = cursor.next;
    }
    if (yourAnswerArray.length !== correctAnswer.length) return false;

    for (let i = 0; i < correctAnswer.length; i++) {
        if (yourAnswerArray[i] !== correctAnswer[i]) {
            return false;
        }
    }

    return true;
}

describe('两两交换链表中的节点', () => {
    it('test', () => {
        const head = createNode([1, 2, 3, 4])

        const res = swapPairs(head);

        const isCorrect = compareAnswer(res, [2, 1, 4, 3]);
        expect(isCorrect).toBe(true)
    })
})
