/**
 * 我们定义「顺次数」为：每一位上的数字都比前一位上的数字大 1 的整数。

请你返回由 [low, high] 范围内所有顺次数组成的 有序 列表（从小到大排序）。

 

示例 1：

输出：low = 100, high = 300
输出：[123,234]
示例 2：

输出：low = 1000, high = 13000
输出：[1234,2345,3456,4567,5678,6789,12345]


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/sequential-digits
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

export function sequentialDigits(low: number, high: number): number[] {
    const res: number[] = [];
    for (let i = 1; i < 10; i++) {
        let number = i;
        for (let j = i + 1; j < 10; j++) {
            number = number * 10 + j;
            if (number >= low && number <= high) {
                res.push(number)
            }
        }
    }
    return res.sort((a, b) => a - b);
}

