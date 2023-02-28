//-------------------------------- Solucion 1 --------------------------------

function FindNeedle (haystack, needle) {
  // Your code here:
  let array = [];
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    if(haystack[i] === needle[j]) {
      j = j + 1
      array.push(i);
    } 
    else {
      j = 0
      array = []
    }
    if(needle.length === array.length) {
      return array[0]
    }
  }
  return -1
}

console.log(FindNeedle('react-redux', 'redux'))
console.log(FindNeedle('react-redux', 'react'))
console.log(FindNeedle('react-redux', 'perro'))

module.exports = FindNeedle

//-------------------------------- Solucion 2 --------------------------------

function FindNeedle2 (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let sliced = haystack.slice(i, needle.length + i)
    if(sliced === needle) return i
  }
  return -1
}

console.log(FindNeedle2('react-redux', 'redux'))
console.log(FindNeedle2('react-redux', 'react'))
console.log(FindNeedle2('react-redux', 'perro'))