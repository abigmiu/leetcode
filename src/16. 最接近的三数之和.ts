// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

//  

// 示例 1：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
// 示例 2：

// 输入：nums = [0,0,0], target = 1
// 输出：0


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/3sum-closest
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// ***

// 暴力枚举O(n3)
export function threeSumClosest(nums: number[], target: number): number {
    const sortedNums = nums.sort((a, b) => a - b)

    let answer = sortedNums[0] + sortedNums[1] + sortedNums[2];

    for (let i = 0; i < nums.length; i++) {
        let startIndex = i + 1;
        let endIndex = nums.length - 1;
        while (startIndex < endIndex) {
            const sum = sortedNums[startIndex] + sortedNums[i] + sortedNums[endIndex];

            if (Math.abs(target - sum) < Math.abs(target - answer)) {
                answer = sum;
            }
            if (sum > target) {
                endIndex--;
            } else if (sum < target) {
                startIndex++;
            } else {
                return answer
            }
        }
    }


    return answer;
};
