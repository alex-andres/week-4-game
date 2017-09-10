var characters = [
	{name : "Mario", id: '"#mario"', hp : 100, attack1 : 10, attack2 : 15, counterattack : 5},
	{name : "Luigi", id: '"#luigi"', hp : 90, attack1 : 8, attack2 : 12, counterattack : 4},
	{name : "Bowser", id: '"#bowser"', hp : 130, attack1 : 6, attack2 : 20, counterattack : 18},
	{name : "Toad", id: '"#toad"', hp : 85, attack1 : 9, attack2 : 7, counterattack : 13}
];
var nameId =[ "#marioName", "#luigiName", "#bowserName", "#toadName", ];
var hpId =["#hpMario", "#hpLuigi", "#hpBowser", "#hpToad"]
var displayedCharacterNames = ["Mario", "Luigi", "Bowser", "toad"]

var mario ={
	name : "Mario",
	id : '"#mario"',
	hp : 100, 
	attack1 : 10, 
	attack2 : 15, 
	counterattack : 5
};
var luigi = {
	name : "Luigi", 
	id: '"#luigi"', 
	hp : 90, 
	attack1 : 8, 
	attack2 : 12, 
	counterattack : 4
};
var bowser = {
	name : "Bowser", 
	id: '"#bowser"', 
	hp : 130, 
	attack1 : 6, 
	attack2 : 20, 
	counterattack : 18
};
var toad ={
	name : "Toad", 
	id: '"#toad"', 
	hp : 85, 
	attack1 : 9, 
	attack2 : 7, 
	counterattack : 13
};
var characterList = ["mario", "luigi", "bowser", "toad"]
var bolStart = true
var selectCharacter; 
function removeClickedCharacter() {
    selectCharacter = this.id;
    var index = characterList.indexOf(selectCharacter)
    characterList.splice(index, 1);
}
//set up buttons for characters
// function hideOpponents(){
// for (var i = 0; i < nameId.length; i++) {
// 	$(nameId[i]).click(function(){
// 	  	nameId.splice([i],1);
// 	  	console.log(nameId);
// 	  	$(nameId + "#selectCharacter" ).addClass("hide");
// 	  	$("#selectCharacter").addClass("show");	
// 	  	}
	  
// 	)
// };
// };
// hideOpponents();
// console.log(nameId);

for (var i = 0; i < 4; i++) {
		$(nameId[i]).text(characters[i].name);
};	
function updateHealth(){
for (var i = 0; i < 4; i++) {
		$(hpId[i]).text(characters[i].hp);
	};
};
updateHealth();
//function that removes clicked character from character list array

$(".character").on("click", function() {
    if (bolStart == true) {

	selectCharacter = this.id;
    var index = characterList.indexOf(selectCharacter);
    characterList.splice(index, 1);
	}
});







// var characterSelected = {};
// var opponentSelected = {}; 
// var bolCharClick = true;
// for (var i = 0; i < 4; i++) {
	

// 	$((characters[i]).id).on("click", function() {
	    
// 	    if (bolCharClick === true && $(characters.id[i]).hasClass("inCharacterChoices")) {
// 	    	console.log("works");
// 	    }
// 	})
// }
// $( "#mario" ).click(function(){
// 	if  ($("#mario").hasClass("inCharacterChoices")) {
// 		$("#selectCharacter" ).addClass("hide");
// 		$("'character.name[" + i + "]").appendTo("#opponentChoicesRow").addClass("inOpponentChoices").removeClass("inCharacterChoices");
// 	 	$("#selectOpponent, #opponentChoices").addClass("show");
// 	 	$("#characterChoices").html("Your Character");
// 	 	$("#mario").addClass("inOpponentChoices");
// 	 	$("#mario").removeClass("inCharacterChoices");

// 	 	characterSelected = characters[1];

// 	}
// 	else if ($("#mario").hasClass("inOpponentChoices")){
// 		$("#opponentContainer").addClass("show");
// 		$("#mario").appendTo("#opponentRow");
// 		$("#mario").removeClass("inOpponentChoices");
// 	 	$("#mario").addClass("inOpponent");
// 	 	$("#selectOpponent").removeClass("show");
// 		$("#attackContainer").removeClass("hide");

// 	}
// 	else if ($("#mario").hasClass("inOpponentChoices")){
// 		$("#attackContainer").removeClass("hide");		
// 		$("#mario, #luigi, #bowser, #toad").off(".click");
// 		opponentSelected = characters[1];
// 	}
// 	else {
// 		return nothing;
// 	}
// });
// $( "#luigi" ).click(function(){
// 	if  ($("#luigi").hasClass("inCharacterChoices")) {
// 		$("#selectCharacter" ).addClass("hide");
// 		$("#mario, #toad, #bowser").appendTo("#opponentChoicesRow").addClass("inOpponentChoices").removeClass("inCharacterChoices");
// 	 	$("#selectOpponent, #opponentChoices").addClass("show");
// 	 	$("#characterChoices").html("Your Character");
// 	 	$("#luigi").addClass("inOpponentChoices");
// 	 	$("#luigi").removeClass("inCharacterChoices");
// 	 	characterSelected = characters[2];
// 	}
// 	else if ($("#luigi").hasClass("inOpponentChoices")){
// 		$("#opponentContainer").addClass("show");
// 		$("#luigi").appendTo("#opponentRow");
// 		$("#luigi").removeClass("inOpponentChoices");
// 	 	$("#luigi").addClass("inOpponent");
// 	 	$("#selectOpponent").removeClass("show");
// 		$("#attackContainer").removeClass("hide");
// 	}
// 	else if ($("#luigi").hasClass("inOpponentChoices")){
// 		$("#attackContainer").removeClass("hide");		
// 		$("#mario, #luigi, #bowser, #toad").off(".click");
// 		opponentSelected = characters[2];
// 	}
// 	else {
// 		return nothing;
// 	}
// });
// $( "#bowser" ).click(function(){
// 	if  ($("#bowser").hasClass("inCharacterChoices")) {
// 		$("#selectCharacter" ).addClass("hide");
// 		$("#mario, #luigi, #toad").appendTo("#opponentChoicesRow").addClass("inOpponentChoices").removeClass("inCharacterChoices");
// 	 	$("#selectOpponent, #opponentChoices").addClass("show");
// 	 	$("#characterChoices").html("Your Character");
// 	 	$("#bowser").addClass("inOpponentChoices");
// 	 	$("#bowser").removeClass("inCharacterChoices");
// 	 	characterSelected = characters[3];
// 	}
// 	else if ($("#bowser").hasClass("inOpponentChoices")){
// 		$("#opponentContainer").addClass("show");
// 		$("#bowser").appendTo("#opponentRow");
// 		$("#bowser").removeClass("inOpponentChoices");
// 	 	$("#bowser").addClass("inOpponent");
// 	 	$("#selectOpponent").removeClass("show");
// 		$("#attackContainer").removeClass("hide");
// 	}
// 	else if ($("#bowser").hasClass("inOpponentChoices")){
// 		$("#attackContainer").removeClass("hide");
// 		$("#mario, #luigi, #bowser, #toad").off(".click");
// 		opponentSelected = characters[3];	
// 	}
// 	else {
// 		return nothing;
// 	}
// });
// $( "#toad" ).click(function(){
// 	if  ($("#toad").hasClass("inCharacterChoices")) {
// 		$("#selectCharacter" ).addClass("hide");
// 		$("#mario, #luigi, #toad").appendTo("#opponentChoicesRow").addClass("inOpponentChoices").removeClass("inCharacterChoices");
// 	 	$("#selectOpponent, #opponentChoices").addClass("show");
// 	 	$("#characterChoices").html("Your Character");
// 	 	$("#toad").addClass("inOpponentChoices");
// 	 	$("#toad").removeClass("inCharacterChoices");
// 	 	characterSelected = characters[4];
// 	}
// 	else if ($("#toad").hasClass("inOpponentChoices")){
// 		$("#opponentContainer").addClass("show");
// 		$("#toad").appendTo("#opponentRow");
// 		$("#toad").removeClass("inOpponentChoices");
// 	 	$("#toad").addClass("inOpponent");
// 	 	$("#selectOpponent").removeClass("show");
// 		$("#attackContainer").removeClass("hide");	 	
// 	}
// 	else if ($("#toad").hasClass("inOpponentChoices")){
// 		$("#attackContainer").removeClass("hide");
// 		$("#mario, #luigi, #bowser, #toad").off(".click");
// 		opponentSelected = characters[4];		
// 	}
// 	else {
// 		return nothing;
// 	}
// });

// console.log(characterSelected);

// $("#attack1").click(function(){
// 		opponentSelected.hp = parseInt((opponentSelected.hp - characterSelected.attack1));
// 		characterSelected.hp = parseInt((characterSelected.hp - opponentSelected.counterattack));
// 		$(hpId).text(ch.hp)
// 		console.log(opponentSelected);
// });


// console.log(opponentSelected);
// console.log(characterSelected);














