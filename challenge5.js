// Goal: Print alphabetized travel destinations with a sentence saying you want to visit.
// Steps: First make an array of travel destinations.
// Then alphabetize them with a method
// Finally when you print use an interpolation to print destinations.


var travelDestinations = ["Japan", "Iceland", "Amsterdam", "Barcelona"]

for (i = 0; i < travelDestinations.length; i++) {
    var sorted = travelDestinations.sort();
    console.log(`I want to visit ${sorted[i]}`);
}


