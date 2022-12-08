/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

示例 1：


输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let newNode = new ListNode()
    let newHead = newNode

    let carry = 0
    while (l1 || l2) {
        const val1 = l1 === null ? 0 : l1.val
        const val2 = l2 === null ? 0 : l2.val
        let sum = val1 + val2 + carry

        carry = Math.floor(sum / 10)
        sum = sum % 10
        newNode.next = new ListNode(sum)

        if (l1 !== null) l1 = l1.next
        if (l2 !== null) l2 = l2.next

        newNode = newNode.next
    }

    if (carry) newNode.next = new ListNode(carry)

    return newHead.next;
};
