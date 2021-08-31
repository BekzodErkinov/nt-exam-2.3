// Array'ni sort qiling, oldin tartiblangan sonlar, keyin stringlar kelsin

let testArr1 = [1,6,0, 2, 99, 76, 'Developer', 'Doctor', 'Business']
let testArr2 = [3,66, 'Success', 'Perfect', 'Banana', 17, 11, 48, 'Forty eight']
let testArr3 = ['Yiqilish', 'haydalish', 'dumalash', 'imthon', 'sessiya', 0, '0.1', '0.5']

function arraySorter(arr) {
  const numbers = []
  const strings = []
  const numsAndStrs = []
  let sortArr = arr.sort()

  sortArr.forEach(item => {
    if (typeof item === 'number') {
      numbers.push(item)
    } else {
      strings.push(item)
    }
  })
  numbers.sort((a,b) => a-b)
  numsAndStrs.push(numbers)
  numsAndStrs.push(strings)

  return numsAndStrs
  // return numbers
  // return strings
}

console.log( arraySorter(testArr1) )
console.log( arraySorter(testArr2) )
console.log( arraySorter(testArr3) )