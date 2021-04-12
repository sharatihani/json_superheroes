let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "name" : "Captain America: Earth-616",
    "real_name" : "Steven Rogers",
    "picture_url" : "images/captainamerica.jpg",
    "bg_color" : "#F2BA59",
    "abilities" : ["Artificially Enhanced Physiology", "Peak Human Strength & Speed", "Peak Human Agility & Stamina"]
  },
  {
    "name" : "Iron Man: Earth-616",
    "real_name" : "Anthony Stark",
    "picture_url" : "images/ironman.jpg",
    "bg_color" : "#99D0F1",
    "abilities" : ["Super-Genius Intelligence", "Master Businessman & Tactician", "Skilled Combatan & Marksman"]
  },
  {
    "name" : "Hulk: Earth-616",
    "real_name" : "Bruce Banner",
    "picture_url" : "images/hulk.jpg",
    "bg_color" : "#89B873",
    "abilities" : ["Unlimited Strength", "Superhuman Leaping & Stamina", "Regenerative Healing Factor"]
  },
  {
    "name" : "Hawkeye: Earth-616",
    "real_name" : "Clinton Barton",
    "picture_url" : "images/hawkeye.png",
    "bg_color" : "#E1C296",
    "abilities" : ["Master Archer, Marksman & Martial Artist", "Peak Human Sight", "Peak Human Strength & Endurance"]
  },
  {
    "name" : "Black Widow: Earth-616",
    "real_name" : "Natasha Romanoff",
    "picture_url" : "images/blackwidow.jpg",
    "bg_color" : "#F5E6A8",
    "abilities" : ["Peak Human Strength & Endurance", "Enhanced Durability", "Athletic Reflexes & Stamina"]
  },
  {
    "name" : "Thor: Earth-616",
    "real_name" : "Thor Odinson",
    "picture_url" : "images/thor.jpg",
    "bg_color" : "#EB7D98",
    "abilities" : ["Superhuman Strength, Durability & Stamina", "Invulnerability & Superhuman Longevity", "Rapid Healing Factor"]
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON) {

  // creates whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['bg_color'];
  newContentElement.classList.add('contentItem');

  // creates h3 headline for name, set class & set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentName');
  newContentHeading.innerText = incomingJSON['name'];
  // adds headline to the item
  newContentElement.appendChild(newContentHeading);

  // creates n adds list headline to item
  let newContentSubhead2 = document.createElement("H5");
  newContentSubhead2.innerText = "Real Name:" + " " + incomingJSON["real_name"];
  newContentElement.appendChild(newContentSubhead2);

  // creates h4 headline for "powers & abilities", set class & set content
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Powers & Abilities:";
  newContentElement.appendChild(newContentSubhead);

  // creates and adds list of "abilities" to item
  let newContentAbilitiesList = document.createElement("UL");
  newContentElement.appendChild(newContentAbilitiesList);

  // creates & adds all the abilities list items to the abilities list
  for (var i = 0; i < incomingJSON['abilities'].length; i++) {
    var currentAbilitiesString = incomingJSON['abilities'][i];
    var newAbilitiesItem = document.createElement("LI");
    newAbilitiesItem.innerText = currentAbilitiesString;
    newContentAbilitiesList.appendChild(newAbilitiesItem);
  }

  // creates and adds a footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  // adds the item to the page
  contentGridElement.appendChild(newContentElement);

}
