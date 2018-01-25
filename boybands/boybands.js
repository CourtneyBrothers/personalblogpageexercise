var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
//var loopCount = 5;

function listOfBands (arrayBand) {
    var bandList = document.createElement('ul') //create unordered List
    for (var i = 0; i < arrayBand.length; i++) {
        var currentBand = document.createElement('li');
        currentBand.appendChild(document.createTextNode(arrayBand[i])); //create node of list items from array and append to UL
        bandList.appendChild(currentBand);
    }
    return bandList

}
document.getElementById('boy-bands').appendChild(listOfBands(bands));

function listOfVegetables (arrayVegetables) {
    var veggieList = document.createElement('ul') //create unordered List
    for (var i = 0; i < arrayVegetables.length; i++) {
        var currentVegetable = document.createElement('li');
        currentVegetable.appendChild(document.createTextNode(arrayVegetables[i])); //create node of list items from array and append to UL
        veggieList.appendChild(currentVegetable);
    }
    return veggieList

}
document.getElementById('vegetables').appendChild(listOfVegetables(vegetables));
//
// Keep track of which band we're on in the loop
//var currentBand = document.createElement('li');

// Keep track of which veggie we're on in the loop
//var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
//var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
//var veggieElement = document.getElementById("vegetables");

// Start looping
//for (var i = 0; i < loopCount; i ++) {
  
  // Add the band names into the correct <div>
  //currentBand = bandElement.appendChild();

  
  // Add the veggie names into the correct <div>
  //currentVeggie = veggieElement.appendChild();

//}
