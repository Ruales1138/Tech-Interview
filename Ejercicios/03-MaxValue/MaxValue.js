//-------------------------------- Solucion 1 --------------------------------

function MaxValue (shares) {
  // Your code here:
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < shares.length; i++) {
    if(shares[i] < min) min = shares[i]
    if(shares[i] > max) max = shares[i]
  }
  let result = max - min
  return result
}

console.log(MaxValue([4, 3, 2, 5, 11]))
console.log(MaxValue([2, 6, 9, 3, 20]))
console.log(MaxValue([15, 3, 0, 5, 12]))

module.exports = MaxValue