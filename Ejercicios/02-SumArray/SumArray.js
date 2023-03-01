//-------------------------------- Solucion 1 --------------------------------

function SumArray (arr, n) {
  // Your code here:
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(arr[i] + arr[j] === n && i !== j) return true
    }
  }
  return false
}

console.log(SumArray([2,4,5,9], 9))
console.log(SumArray([2,4,5,9], 12))
console.log(SumArray([2,4,5,9], 4))
console.log(SumArray([2,4,5,2], 4))

module.exports = SumArray

//-------------------------------- Solucion 2 --------------------------------

function SumArray2 (arr, n) {
  return false
}

console.log(SumArray2([2,4,5,9], 9))
console.log(SumArray2([2,4,5,9], 12))
console.log(SumArray2([2,4,5,9], 4))
console.log(SumArray2([2,4,5,9], 4))
