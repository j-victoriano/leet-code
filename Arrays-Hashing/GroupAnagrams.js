/*Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

let groupAnagrams = (strs) => {
    let hash = {}
    
    for (let i of strs){
        let key = i.split('').sort().join('')
        if (!hash[key]){
            hash[key] = [i]
        } else {
            hash[key].push(i)
        }
    }
    return (Object.values(hash));
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
