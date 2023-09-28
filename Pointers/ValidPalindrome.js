/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.



Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/
let isPalindrome = (s) => {
    const isAlphaNumeric = c => (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') || c >= '0' && c <= '9'

    let left = 0;
    let right = s.length - 1;
    let skipLeft, skipRight, endsEqual = false;

    while (left < right) {
        //Checks if character is alphanumeric, if not, skip it
        skipLeft = !isAlphaNumeric(s.charAt(left))
        if (skipLeft) { left++; continue }

        skipRight = !isAlphaNumeric(s.charAt(right))
        if (skipRight) { right--; continue; }

        //Compares both ends, if not equal, then it is not a palindrome. If yes, continue comparing to the middle
        endsEqual = s.charAt(left).toLowerCase() === s.charAt(right).toLowerCase()
        if (!endsEqual) return false

        left++
        right--
    }
    return true

}