/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。

 

示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：

输入：s = "a"
输出：[["a"]]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/palindrome-partitioning
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function isReserve(s: string) {
    const length = s.length;
    if (length === 1) return true;
    if (length === 2) return s[0] === s[1];

    const middle = Math.floor(length / 2);
    for (let i = 0; i <= middle; i++) {
        if (s[i] !== s[length - i - 1]) {
            return false;
        }
    }
    return true;
}

export function partition(s: string): string[][] {
    if (s.length === 1) return [[s]];
    const res: string[][] = [];

    for (let i = 0; i < s.length; i++) {
        const subStr = s.slice(0, i + 1);

        if (isReserve(subStr)) {
            const restStr = s.slice(i + 1);
            const restPartition = partition(restStr);
            restPartition.forEach((item) => {
                const arr = [subStr, ...item];
                res.push(arr);
            });
            if (!restStr) {
                res.push([subStr]);
            }
        }
    }
    return res;
}
const res = partition('bb');
console.log('🚀 ~ file: 131. 分割回文串.ts:61 ~ res:', res);
