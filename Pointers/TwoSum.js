let twoSum = (nums, target) => {
    // Use pointers to traverse the array and find the two elements at their index positions
    // Array is in increasing order
    let left = 0;
    let right = nums.length - 1;

    while (nums[left] + nums[right] !== target) {
        if (nums[left] + nums[right] > target) {
            right--
        } else {
            left++;
        }
    }
    return [left + 1, right + 1];
}

let nums = [1,2,3,4,8]
console.log(twoSum(nums, 5))