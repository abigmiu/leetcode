/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 

示例 1：


输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/remove-nth-node-from-end-of-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.

 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/** 递归 */
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     let count = 0;
//     function inner(head: ListNode | null, n: number) {
//         if (!head) return head;
//         if (head.next) {
//             head.next = inner(head.next, n);
//         }
//         count++;
//         if (n === count) {
//             return head.next
//         } else {
//             return head
//         }
//     }
//     return inner(head, n)
// };

/** 前后指针 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const tempNode = new ListNode(0)
    tempNode.next = head;
    let fastNode: ListNode | null = tempNode;
    let slowNode: ListNode | null = tempNode;
    for (let i = 0; i <= n; i++) {
        fastNode = (fastNode as ListNode).next
    }

    while (fastNode !== null) {
        fastNode = (fastNode as ListNode).next
        slowNode = (slowNode as ListNode).next
    }

    if (slowNode) {
        slowNode.next = slowNode.next?.next || null
    }


    return tempNode.next
 };

let head = new ListNode()
let cursor = head
cursor.next = new ListNode(1)
cursor = cursor.next
cursor.next = new ListNode(2)
cursor = cursor.next
cursor.next = new ListNode(3)
cursor = cursor.next
cursor.next = new ListNode(4)
cursor = cursor.next
cursor.next = new ListNode(5)
cursor = cursor.next

removeNthFromEnd(head.next, 2)
