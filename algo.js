// 1929. Concatenation of Array



// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.





/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    
    let arr = []
    let counter = 0

    while(counter < 2){
        
        for(let i = 0; i < nums.length; i++){
            arr.push(nums[i])
        }
        counter++
    }

    return arr
};