import { ListNode, removeNthFromEnd } from '../19. 删除链表的倒数第 N 个结点';
import { describe, expect, it } from 'vitest';

function createNode(data: Array<number>) {
    if (!data.length) return undefined;

    return new ListNode(data[0], createNode(data.slice(1)));
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

describe('删除链表的倒数第 N 个结点', () => {
    it('test', () => {
        const head = createNode([1, 2, 3, 4, 5]);
        let res = removeNthFromEnd(head, 2);

        let resArray: number[] = [];
        while (res) {
            resArray.push(res.val);
            res = res.next;
        }

        const isCorrect = compareAnswer(head, resArray);
        expect(isCorrect).toBe(true)
    })
})
