//check the number is prime or not
function isPrime(n) {
  if (n <= 1)
   return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) 
	return false;
  }
  return true;
}
const n = 10;
console.log(isPrime(n));

//print prime number between 1-100

function PrimeBteweenOneToHundrad(num) {
  if (num <= 1) 
  return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) 
	return false;
  }
  return true;
}

for (let i = 1; i <= 100; i++) {
  if (PrimeBteweenOneToHundrad(i)) {
    console.log(i);
  }
}
