// Goal to pring only strings 4 characters.
// Data uses an array. Likely need a for statement to run through the array given
// we want to run the code through a group of strings
// We will also need an if statement for the 4 characters.
// First create an array list.
// Next create a for statement code block just running all the words.
// Next make the if statement for 4 characters

var favoriteFoods = ["corn", "pizza", "pie", "taco", "wings"];
for (var i = 0; i < favoriteFoods.length; i++) {
  if (favoriteFoods[i].length === 4) {
    console.log(favoriteFoods[i])
  }
}