/**
 * @param {number[]} nums
 * @param {number} target = 9
 * @return {number[]}
 */
var twoSum = function(nums, target = 9) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i , j];
            }
        }
    }
    return []; // Handle case where no solution exists
};
