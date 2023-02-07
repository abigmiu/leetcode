// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

// 返回删除后的链表的头节点。

// 注意：此题对比原题有改动

// 示例 1:

// 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
// 示例 2:

// 输入: head = [4,5,1,9], val = 1
// 输出: [4,5,9]
// 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
/** 循环 */
// export function deleteNode(head: ListNode | null, val: number): ListNode | null {
//     const dummyNode = new ListNode(0, head);
//     let cursor: ListNode | null = dummyNode;

//     while (cursor) {
//         if (cursor.next && cursor.next.val === val) {
//             cursor.next = cursor.next.next;
//             break;
//         }
//         cursor = cursor.next;
//     }

//     return dummyNode.next;
// };

/** 双指针 */
export function deleteNode(head: ListNode | null, val: number): ListNode | null {
    const dummyNode = new ListNode(0, head);
    let leftNode: ListNode | null = dummyNode;
    let rightNode: ListNode | null = leftNode.next;
    while (rightNode) {
        if (rightNode.val === val) {
            leftNode!.next = rightNode.next;
            break;
        }
        leftNode = leftNode!.next;
        rightNode = rightNode.next;
    }

    return dummyNode.next;
};
