function mdArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number') sum += arr[i]
    else sum += mdArraySum(arr[i])
  }
  return sum
}

console.log(mdArraySum([1,2,3,4])) // 10
console.log(mdArraySum([ [2,4] , [1], [4,2,1] ])) // 14
console.log(mdArraySum([ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ])) // 26

module.exports = mdArraySum