// Print words from a string array that begin with the letter "t".
// First make an array list
// Next make a for statement to loop
// Make an if statement for including only the letter t

var items = ["tears", "teeth", "pick up", "pickle", "leaf", "type writer"];
for (var i = 0; i < items.length; i ++) {
    if (items[i].startsWith("t")) {
      console.log(items[i]);
    }
}