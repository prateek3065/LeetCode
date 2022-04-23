/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  function calc(startIndex, sum, tempList, list) {
    if (sum === target) {
      list.push([...tempList]);
      return;
    } else if (sum > target) return;
    for (let i = startIndex; i < candidates.length; i++) {
      if (candidates[i] + sum > target) continue;
      calc(i, candidates[i] + sum, [...tempList, candidates[i]], list);
    }
  }
  let list = [];
  calc(0, 0, [], list);
  return list;
};
