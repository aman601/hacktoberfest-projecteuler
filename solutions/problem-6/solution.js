var sum = 0;
var sum2 = 0;
var square = 0;
function sum_squares (n) {
  for (i = 1; i < (n + 1); i++) {
    sum += (i*i);
  }
}
function square_sums (n) {
  for (i = 1; i < (n + 1); i++) {
    sum2 += i;
  }
  square = (sum2*sum2);
}
sum_squares(100);
square_sums(100);
console.log(sum - square);
