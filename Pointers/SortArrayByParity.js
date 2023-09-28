let sortArrayByParity = (nums) => {
    let left = 0 
    let right = nums.length-1

    while(left < right){
        while (left < right && nums[left] % 2 === 0)
            left++;
        while (left < right && nums[right] % 2 === 1)
            right--;
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }

    return nums;

}

let nums = [2,3,4,5,6,7,8]
console.log(sortArrayByParity(nums));