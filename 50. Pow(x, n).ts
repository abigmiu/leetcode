/**
 * https://leetcode.cn/problems/powx-n/
 * 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。

 

示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25

 */

function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    if (n === 1) return x;

    let absPow = Math.abs(n);
    let isMinus = absPow !== n;
    let res = absPow % 2 === 0 ? myPow(x * x, absPow / 2) : x * myPow(x, absPow - 1);
    return isMinus ? 1 / res : res;
};
const res = myPow(2.0000, -2)
console.log(res)

/**
 * 这题的第一反应是一步步去用x * x暴力计算，但是这种解法会超时。

所以用一种快速幂计算的方式，也就是把 x 的 n 次方转化为 x * x 的 n / 2 次方。

比如求 2 的 10 次方可以转为 4 的 5 次方，这时候遇到奇数次方了，就转化为 4* (4 的 4 次方)。

然后对于 4 的 4 次方，再进一步转化为 16 的 2 次方，最后转为 256 的 1 次方 * 4，就得出最终解 1024。
 */
