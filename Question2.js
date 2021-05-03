var findMaxConsecutiveOnes = function(nums) {
    var maxCount = 0;
    var count = 0;
    for (var i in nums) {
        count = nums[i] === 1 ? count + 1 : 0;
        if (count > maxCount) {
            maxCount = count;
        }
    }
    return maxCount;
};