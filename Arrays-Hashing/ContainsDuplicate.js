//Given an integer arry nums, return true if any value appears at least twice in the array, false otherwise

//Brute Force
/* function containsDuplicate(nums) {
    for (let i= 0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}
let nums1 = [1,2,3,4,5,6,7,8,9,10,11,12,1];
console.log(containsDuplicate(nums1)); */

//Sorting the array using a HashTable
function containsDuplicate2(string) {
    let hashTable = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] in hashTable)
            return true;
        hashTable[string[i]] = 1;
    }
    return false;
}
let string1 = 'abcdefghijklmnop'
console.log(containsDuplicate2(string1));