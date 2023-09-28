/*Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.



Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

let longestConsecutive = (nums, maxScore = 0) => {
    // Sort the array numerically
    const numSet = new Set(nums);
    for (const num of [...numSet]) {
        const prevNum = num - 1;
        if (numSet.has(prevNum)) {
            continue;
        }
        
        let [currNum, score] = [num , 1];
        const isStreak = () => numSet.has(currNum + 1)
        while (isStreak()) {
            currNum++;
            score++;
        }
        maxScore = Math.max(maxScore, score);
    }
    return maxScore;
}

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]) === 9);
console.log(longestConsecutive([0,3,2,5,4,6,0,1]) === 7);
console.log(longestConsecutive([0,4,6,5,4,6,8]) === 4);