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

