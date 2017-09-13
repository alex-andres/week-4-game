var characters = [
	{name : "Mario", id: '"#mario"', hp : 100, attack1 : 10, attack2 : 15, counterattack : 5},
	{name : "Luigi", id: '"#luigi"', hp : 90, attack1 : 8, attack2 : 12, counterattack : 4},
	{name : "Bowser", id: '"#bowser"', hp : 130, attack1 : 6, attack2 : 20, counterattack : 18},
	{name : "Toad", id: '"#toad"', hp : 85, attack1 : 9, attack2 : 7, counterattack : 13}
];
var nameId =[ "#marioName", "#luigiName", "#bowserName", "#toadName", ];
var hpId =["#hpMario", "#hpLuigi", "#hpBowser", "#hpToad"];
var displayedCharacterNames = ["Mario", "Luigi", "Bowser", "toad"];

var mario ={
	name : "Mario",
	id : '"#mario"',
	hpId: "#hpMario",
	hp : 100, 
	attack1 : 10, 
	attack2 : 15, 
	counterAttack : 5
};
var luigi = {
	name : "Luigi", 
	id: '"#luigi"',
	hpId: "#hpLuigi",
	hp : 90, 
	attack1 : 8, 
	attack2 : 12, 
	counterAttack : 4
};
var bowser = {
	name : "Bowser", 
	id: '"#bowser"',
	hpId: "#hpBowser",	 
	hp : 130, 
	attack1 : 6, 
	attack2 : 20, 
	counterAttack : 18
};
var toad ={
	name : "Toad", 
	id: '"#toad"',
	hpId: "#hpToad", 
	hp : 85, 
	attack1 : 9, 
	attack2 : 7, 
	counterAttack : 13
};
var characterList = ["mario", "luigi", "bowser", "toad"];
var bolYourCharacter = true;
var bolOpponent = true;
var selectCharacter; 
var selectOpponent;
var selectOpponentObject = eval(selectOpponent);
var selectCharacterObject = eval(selectCharacter);
var bolGame = true;
var bolLevel1 = true;
var bolLevel2 = false;
var bolLevel3 =false;
var opponentHp;
function makeId(){
	for(var i=0;i<characterList.length;i++){
	    characterList[i]="#"+characterList[i];
	}
};

for (var i = 0; i < 4; i++) {
    $(nameId[i]).text(characters[i].name);
};

function updateHealth() {
    for (var i = 0; i < 4; i++) {
        $(hpId[i]).text(characters[i].hp);
    };
};
updateHealth();


//function that removes clicked character from character list array
function chooseCharacter(){
$("#characterChoicesRow").on("click", (".character"), function() {
	selectCharacter = this.id;
	console.log(selectCharacter);	
    var index = characterList.indexOf(selectCharacter);
    characterList.splice(index, 1);
    console.log(characterList);
    makeId();
    $("#selectOpponent, #opponentChoices").addClass("show");
 	$("#characterChoices").html("Your Character");
 	$("#selectCharacter" ).addClass("hide");
 	$("#" + selectCharacter).removeClass("inCharacterChoices character");
 	console.log(characterList);
    $(characterList.toString()).appendTo("#opponentChoicesRow").addClass("inOpponentChoices opponent").removeClass("inCharacterChoices");
	console.log(characterList)
});
};

function chooseOpponent(){
$("#opponentChoicesRow").on("click", (".opponent"), function() {
	$("#opponentContainer").addClass("show");
	$(this).appendTo("#opponentRow");
	$(this).removeClass("inOpponentChoices");
	$(this).addClass("inOpponent");
	selectOpponent = this.id;
	var index2 = characterList.indexOf("#" + selectOpponent);
	characterList.splice(index2, 1);
	$(characterList.toString()).removeClass("opponent");
	$("#selectOpponent").removeClass("show");
	$("#attackContainer").removeClass("hide");

});
};
function attack1(){
$("#attack1").on("click", function() {
    selectOpponent = eval(selectOpponent);
    selectCharacter = eval(selectCharacter);
    selectOpponent.hp -= selectCharacter.attack1;
    selectCharacter.attack1 += 8
    $(selectOpponent.hpId).text(selectOpponent.hp);
    selectCharacter.hp -= selectOpponent.counterAttack;
    $(selectCharacter.hpId).text(selectCharacter.hp);
    if (selectOpponent.hp <= 0) {
    	$(selectOpponent.hpId).text("0");
    	$(".inOpponent").hide();
    	selectOpponent = null;
    	$(characterList.toString()).addClass("opponent");

    }
});
};

function attack2(){
$("#attack2").on("click", function() {
    selectOpponent = eval(selectOpponent);
    selectCharacter = eval(selectCharacter);
    selectOpponent.hp -= selectCharacter.attack2;
    selectCharacter.attack2 += 6
   	opponentHp =selectOpponent.hp
    $(selectOpponent.hpId).text(selectOpponent.hp);
    selectCharacter.hp -= selectOpponent.counterAttack;
    $(selectCharacter.hpId).text(selectCharacter.hp);
	if (opponentHp <= 0) {
    	$(selectOpponent.hpId).text("0");
    	$(".inOpponent").hide();
    	selectOpponent = null;
    	$(characterList.toString()).addClass("opponent");
    }   
});
};




if (bolGame === true){
	chooseCharacter();
	chooseOpponent();
	attack1();
	attack2();
}
