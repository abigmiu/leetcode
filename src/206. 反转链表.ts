// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
//  

import { createNode } from "./__test__/createNode";

// 示例 1：


// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// 示例 2：


// 输入：head = [1,2]
// 输出：[2,1]
// 示例 3：

// 输入：head = []
// 输出：[]

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/reverse-linked-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.

 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
export function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let leftNode = head;
    let rightNode: ListNode | null = head.next
    leftNode.next = null;
    while (rightNode) {
        const rightNext = rightNode.next;
        rightNode.next = leftNode;
        leftNode = rightNode;
        rightNode = rightNext;
    }


    return leftNode;
};
reverseList(createNode([1, 2, 3, 4, 5]))
