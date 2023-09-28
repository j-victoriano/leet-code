/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

I: array, and target number
O: returning the two indexes of the two numbers that would add up to target
*/

// Brute Force
/*let twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log([i, j])
            }
        }
    }
    return nums;
}

console.log(twoSum([2,7,11,15], 18));
*/
let twoSum = (nums, target) => {
    let hash = {};
    for (let i=0; i < nums.length; i++){
        let diff = target - nums[i];
        if (hash[diff] != undefined) {
            console.log([i, hash[diff]]);
            return (hash[diff], i);
        }
        hash[nums[i]] = i;
    }
}
console.log(twoSum([2,7,11,15], 18));

