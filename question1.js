// String ichidagi unli harflarni o'chiring

const strWithVowels1 = "Salom mening ismim Falonchi"
const strWithVowels2 = "Bugun ko'chada havo judayam yaxshi"
const strWithVowels3 = "Kecha oqshom falakda oy bozarib botganda"

// v1
// function deleteVowels(str) {
//   return str.replace(/a|o|e|u|i/ig, '')
// }

// v2
const deleteVowels = str => str.replace(/a|o|e|u|i/ig, '')

console.log( deleteVowels(strWithVowels1) ) //=> Slm mnng smm Flnch
console.log( deleteVowels(strWithVowels2) ) //=> Bgn k'chd hv jdym yxsh
console.log( deleteVowels(strWithVowels3) ) //=> Kch qshm flkd y bzrb btgnd