var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

//var indexNum = 0;
var hohohoElement = document.getElementById("reindeer");
var frag = document.createDocumentFragment();
for (var i = 0; i < reindeer.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(reindeer[i]+" "+colors[i]));
    frag.appendChild(li);

} 
hohohoElement.appendChild(frag);


//QUESTIONS: ARE WE SUPPOSED TO GO BACK THROUGH THE LOOP AGAIN? B/C COLORS DO NOT MATCH REINDEER AMOUNTS
// ---> THROWING UNDEFINED ERROR
//creates additional UL of reindeer names
////var indexNum = 0;
//var hohohoElement = document.getElementById("reindeer");
//var frag = document.createDocumentFragment();
//for (var i = reindeer.length; i--;) {
    //var li = document.createElement("li");
    //li.appendChild(document.createTextNode(reindeer[indexNum++]));
    //frag.appendChild(li);

//} 
//hohohoElement.appendChild(frag);


//creates UL of colors
//var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
//var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

//var indexNum = 0;
//var hohohoElement = document.getElementById("reindeer");
//var frag = document.createDocumentFragment();
//for (var i = colors.length; i--;) {
    //var li = document.createElement("li");
    //li.appendChild(document.createTextNode(colors[indexNum++]));
    //frag.appendChild(li);
//} 
//hohohoElement.appendChild(frag);
