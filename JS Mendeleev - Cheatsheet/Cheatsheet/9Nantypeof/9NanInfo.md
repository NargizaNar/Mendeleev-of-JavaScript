## isNaN()
The global NaN property is a value representing Not-A-Number.
## Example 
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));
// Expected output: "1"

console.log(sanitise('NotANumber'));
// Expected output: NaN

## Other examples: 
console.log(isNaN("hello"));// true 
console.log(isNaN(3)); // false 
console.log(typeof NaN); // number
isNaN(new Date()); // false; Date objects can be converted to a number (timestamp)
isNaN(new Date().toString()); // true; 
console.log(Infinity / Infinity);// NaN
