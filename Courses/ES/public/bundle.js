"use strict";

var numbers = [1, 2, 3, 4, 5]; // numbers.forEach ( function ( number, index ) {
//     numbers[index] = number + 1
// } )

var newNumbers = numbers.map(function (number) {
  return number + 1;
});
console.log(newNumbers);
console.log(numbers); // -----------------------------------

var total = numbers.reduce(function (total, nextNumber) {
  /**
   * Total + NextNumber
   * ------------------
   *   0   +   1
   *   1   +   2
   *   2   +   3
   *   3   +   4
   *   4   +   5
   * ------------------
   * Return 15
   */
  return total + nextNumber;
});
console.log(total);
