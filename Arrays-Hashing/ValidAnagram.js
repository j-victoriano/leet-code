/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/
// Check is length is the same?
// Checking the different letters together
// What if you sort the two words, letting you see that the letters are present and the lengths are the same

var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;
    console.log(s.length, t.length);
    console.log(sortString(s));
    console.log(sortString(t));
    return (sortString(s) === sortString(t));
}
const sortString =  (string) => 
    string.split('').sort((a, b) => a.localeCompare(b)).join('');

console.log(isAnagram('abcdd', 'dcbaa'))
