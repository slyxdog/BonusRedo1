var wrapperele = document.body;
var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car", },
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

for(var i=0; chrs.length>i;i++){
  var A = document.createElement("div");
  var img = document.createElement("img");
  var Name = document.createElement("h3");
  var Class = document.createElement("h3");
  var Affil = document.createElement("h3");
  var Vehicle = document.createElement("h3");
  Class.innerHTML = "Class "+ chrs[i].class.toUpperCase();
  Name.innerHTML ="Name "+ chrs[i].name;
 
  
  
Affil.innerHTML ="Affiliation: "+ chrs[i].afl.toUpperCase();
  
if(chrs[i].afl =='autobot'){A.classList.add('autobot')
}else if(chrs[i].afl=='decepticon'){A.classList.add('decepticon')};

if(chrs[i].vehicle == 'truck'){ Vehicle.style.color="blue";}else if(chrs[i].vehicle == 'tank'){ Vehicle.style.color="green"}else if(chrs[i].vehicle == 'car'){Vehicle.style.color="gold"}else if(chrs[i].vehicle == 'plane'){Vehicle.style.color="White"}
  
 Vehicle.innerHTML = "Vehicle: "+chrs[i].vehicle;
 A.appendChild(Name).classList.add("character","character_div");
 A.appendChild(img).classList.add("img");
 A.appendChild(Class);
 A.appendChild(Affil);
 A.appendChild(Vehicle);
 document.body.appendChild(A);
}



// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white