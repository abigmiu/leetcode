
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function createNode(data: Array<number>): ListNode | null {
    if (!data.length) return null;

    return new ListNode(data[0], createNode(data.slice(1)));
}

export function compareAnswer(yourAnswer: ListNode | null, correctAnswer: Array<number>) {
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
