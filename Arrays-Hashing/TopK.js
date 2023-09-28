/*Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

I: array of numbers
O: return (could be an array of numbers) with k most frequent elements
*/

let topKFrequent = (nums, k) => {
    //check if the number frequencies appear in the array multiple times and log the frequency
    //store the said numbers, adding to a count, if the count is >= k, then add it to the final array output 
    let hashTable = {}
    let output = [];
    for (let i of nums){
        let key = i;
        if (!hashTable[key]){
            hashTable[key] = [i];
        } else {
            hashTable[key].push(i)
        }
    }
    for (let keys in hashTable) {
        let i = keys;
        if (hashTable[i].length >= k){
            output.push(keys)
        }
    }
    return output;
}
console.log(topKFrequent([1,1,1,2,2,3,5,5,5], 3));
console.log(topKFrequent([1,1,1,2,2,3,3,3,3], 4));
console.log(topKFrequent([1,1,1,2,2,3,3,7,7], 2));