import { addTwoNumbers, ListNode } from '../2. 两数相加';

import { it, describe, expect } from 'vitest';

function createNode(data: Array<number>) {
    let cursor = new ListNode();
    let head = cursor;

    let index = 0;
    while (index < data.length) {
        cursor.next = new ListNode(data[index]);
        index++;
        cursor = cursor.next;
    }

    return head.next;
}

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

describe('两数相加', () => {
    it('test', () => {
        const l1 = [2, 4, 3]
        const l2 = [5, 6, 4]

        const node1 = createNode(l1);
        const node2 = createNode(l2);

        let res = addTwoNumbers(node1, node2)

        const isCorrect = compareAnswer(res, [7, 0, 8]);
        expect(isCorrect).toBe(true);
    })
})
