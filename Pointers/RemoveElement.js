let removeElement = (nums, val) => {
    let left = 0
    let right = nums.length - 1

    while(left<=right) {
        if(nums[left] === val){
            nums[left] = nums[right]
            right--
        } else {
            left++
        }
    }
    return left
}

let nums = [0,1,2,2,3,0,4,2]
console.log(removeElement(nums, 2))