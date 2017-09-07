var characters = [
	{name : "Mario", hp : 100, attack1 : 10, attack2 : 15, counterattack : 5},
	{name : "Luigi", hp : 90, attack1 : 8, attack2 : 12, counterattack : 4},
	{name : "Bowser", hp : 130, attack1 : 6, attack2 : 20, counterattack : 18},
	{name : "Toad", hp : 85, attack1 : 9, attack2 : 7, counterattack : 13}
];
var nameId =[ "#marioName", "#luigiName", "#bowserName", "#toadName", ];
var hpId =["#hpMario", "#hpLuigi", "#hpBowser", "#hpToad"]
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

for (var i = 0; i < 4; i++) {
		$(hpId[i]).text(characters[i].hp);
};

$( "#mario" ).click(function(){
	if  ($("#mario").hasClass("inCharacterChoices")) {
		$("#selectCharacter" ).addClass("hide");
		$("#luigi, #toad, #bowser").appendTo("#opponentChoicesRow").addClass("inOpponentChoices").removeClass("inCharacterChoices");
	 	$("#selectOpponent, #opponentChoices").addClass("show");
	 	$("#characterChoices").html("Your Character");
	 	$("#mario").addClass("inOpponentChoices");
	 	$("#mario").removeClass("inCharacterChoices");

	}
	else if ($("#mario").hasClass("inOpponentChoices")){

		$("#mario").appendTo("#opponentRow");
		$("#mario").removeClass("inOpponentChoices");
	 	$("#mario").addClass("inOpponent");
	}
	else {
		return nothing;
	}
});
$( "#luigi" ).click(function() {
	if ($("#luigi").hasClass("inCharacterChoices")){
		$("#selectCharacter" ).addClass("hide");
		$("#mario, #toad, #bowser").appendTo("#opponentChoicesRow").addClass("inOpponentChoices").removeClass("inCharacterChoices");
	 	$("#selectOpponent, #opponentChoices").addClass("show");
	 	$("#characterChoices").html("Your Character");
	 	$("#luigi").removeClass("inCharacterChoices");
	 	$("#luigi").addClass("inOpponentChoices");
	 }
	else if ($("#luigi").hasClass("inOpponentChoices")){
		$("#opponentContainer").addClass("show");
		$("#luigi").appendTo("#opponentRow");
		$("#luigi").removeClass("inOpponentChoices");
	 	$("#luigi").addClass("inOpponent");
	}
	else {
		return nothing;
	}
});
$( "#bowser" ).click(function() {
	if ($("#bowser").hasClass("inCharacterChoices")){
		$("#selectCharacter" ).addClass("hide");
		$("#mario, #luigi, #toad").appendTo("#opponentChoicesRow");
	 	$("#selectOpponent, #opponentChoices").addClass("show");
	 	$("#characterChoices").html("Your Character");
	 	$("#bowser").removeClass("inCharacterChoices");
	 	$("#bowser").addClass("inOpponentChoices");
	 }
	else if ($("#bowser").hasClass("inOpponentChoices")){
		$("#bowser").appendTo("#opponentRow");
		$("#bowser").removeClass("inOpponentChoices");
	 	$("#bowser").addClass("inOpponent");
	}
	else {
		return nothing;
	}
});
$( "#toad" ).click(function() {
	if ($("#toad").hasClass("inCharacterChoices")){
		$("#selectCharacter" ).addClass("hide");
		$("#mario, #luigi, #bowser").appendTo("#opponentChoicesRow");
	 	$("#selectOpponent, #opponentChoices").addClass("show");
	 	$("#characterChoices").html("Your Character");
	 	$("#toad").removeClass("inCharacterChoices");
	 	$("#toad").addClass("inOpponentChoices");
	 }
	else if ($("#toad").hasClass("inOpponentChoices")){
		$("#toad").appendTo("#opponentRow");
		$("#toad").removeClass("inOpponentChoices");
	 	$("#toad").addClass("inOpponent");
	}
	else {
		return nothing;
	}
});














