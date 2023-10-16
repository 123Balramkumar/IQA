//find factorial for any number

function findFactoril(n) {
  let Factorial = 1;
  for (let i = 1; i <= n; i++) {
    Factorial *= i;
  }
  console.log(Factorial);
}
findFactoril(5);// ------------->  120  
