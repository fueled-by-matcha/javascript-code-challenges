// Write function below
function factorial(number){
  let product = 1;
  for(let i = number; i > 0; i--){
    product *= i;
  }
  return product;
}
console.log(factorial(6));
