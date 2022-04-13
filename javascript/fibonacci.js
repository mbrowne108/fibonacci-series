// function fibonacci(num) {
//   let n1 = 0, n2 = 1, temp

//   while (num >= 0) {
//     temp = n1
//     n1 = n1 + n2
//     n2 = temp
//     num--
//   }
//   return n2
// }

function fibonacci(num) {
  let i
  let fib = []
  fib[0] = 0
  fib[1] = 1
  for (i = 2; i < 50; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }
  return fib[num]
}

console.log(fibonacci(28))


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
