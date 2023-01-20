## Array + Replace 
## Example 1 

function doubleValues(array) {
    const currentArray = array.map(element => element * 2);
    return currentArray;
}
console.log(doubleValues([1, 2, 3]));
//[ 2, 4, 6 ]

## Example 2 

let fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(fruit, vegetable, food);
// banana cucumber [ 'bread', 'cakes', 'pizza' ]

## Example 3 
myArray[3] = "fourth element";
console.log(myArray);
// [ 1, 2, 3, 'fourth element', 5 ]

## Example 4 
const board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
  }
}
<!-- 1
2
3
quick
brown
fox
jumped
over
lazy
dog
true
false -->


