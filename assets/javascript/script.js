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

$( "#mario" ).click(function() {
	$("#selectCharacter" ).addClass("hide");
	$("#luigi, #toad, #bowser").appendTo("#opponentChoicesRow");
 	$("#selectOpponent, #opponentChoices").addClass("show");
 	$("#characterChoices").html("Your Character"); 
});
$( "#luigi" ).click(function() {
	$("#selectCharacter" ).addClass("hide");
	$("#mario, #toad, #bowser").appendTo("#opponentChoicesRow");
 	$("#selectOpponent, #opponentChoices").addClass("show");
 	$("#characterChoices").html("Your Character");
});
$( "#bowser" ).click(function() {
	$("#selectCharacter" ).addClass("hide");
	$("#mario, #luigi, #toad").appendTo("#opponentChoicesRow");
 	$("#selectOpponent, #opponentChoices").addClass("show");
 	$("#characterChoices").html("Your Character");
});
$( "#toad" ).click(function() {
	$("#selectCharacter" ).addClass("hide");
	$("#mario, #luigi, #bowser").appendTo("#opponentChoicesRow");
 	$("#selectOpponent, #opponentChoices").addClass("show");
 	$("#characterChoices").html("Your Character");
});  














