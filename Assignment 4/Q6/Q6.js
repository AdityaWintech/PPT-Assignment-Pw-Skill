//  **Question 6**
// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// Input: nums = [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]





function sortedSquares(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    let left = 0;
    let right = n - 1;
    let index = n - 1;
    
    while (left <= right) {
      const leftSquare = nums[left] ** 2;
      const rightSquare = nums[right] ** 2;
      
      if (leftSquare > rightSquare) {
        result[index] = leftSquare;
        left++;
      } else {
        result[index] = rightSquare;
        right--;
      }
      
      index--;
    }
    
    return result;
  }
  
  // Example usage:
  const nums = [-4, -1, 0, 3, 10];
  const squaredSorted = sortedSquares(nums);
  console.log(squaredSorted);
  