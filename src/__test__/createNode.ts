
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function createNode(data: Array<number>) {
    if (!data.length) return undefined;

    return new ListNode(data[0], createNode(data.slice(1)));
}
