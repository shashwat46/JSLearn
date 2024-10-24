// console.log(2>1)
// console.log(2>=1)
// console.log(2==void)

console.log("2">1)
console.log("02">1)

console.log(null > 0)
console.log(null == 0)
console.log(null>=0)

console.log(undefined == 0)//false 
console.log(undefined == 0)
console.log(undefined>=0)

/*== and comparisons >.<,>=,<= work differently
Comparisong convert null to a number, treating it as 0.
Hence null>0 is false and
null>= 0 is true
*/

//strict check

console.log("2" == 2)//true
console.log("2" === 2)//false

