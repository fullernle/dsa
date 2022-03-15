// https://leetcode.com/problems/two-sum/ 
/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const visited = {};

	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		const difference = target - currentNum; 

		if (difference in visited) {
			return [visited[difference], i];
		}

		visited[currentNum] = i;
	}

	return null;
};