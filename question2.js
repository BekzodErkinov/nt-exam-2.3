/*
  Stringni ichidagi harflarni o'zgartiring:
  1. a => A;
  2. u, i, o, e => *
  3. Har bir so'zni oxiriga "!!!" qo'ying
*/

let quote1 = "Die with memories, not dreams. – Unknown"
let quote2 = "Everything you can imagine is real. – Pablo Picasso"
let quote3 = "Problems are not stop signs, they are guidelines. – Robert H. Schiuller"

function censorStr(str) {
  let s = str.toUpperCase()
  let replaceA = s.replace(/a/ig, '@')
  let replaceB = replaceA.replace(/u|i|o|e/ig, '*')
  let arr = replaceB.split(' ')
  arr.forEach(w => (w+'!!!'))
  return arr.join('')
}


console.log( censorStr(quote1) ) //=> D**W*THM*M*R**S,N*TDR*@MS.-*NKN*WN
console.log( censorStr(quote2) ) //=> *V*RYTH*NGY**C@N*M@G*N**SR*@L.–P@BL*P*C@SS*
console.log( censorStr(quote3) ) //=> PR*BL*MS@R*N*TST*PS*GNS,TH*Y@R*G**D*L*N*S.–R*B*RTH.SCH**LL*R