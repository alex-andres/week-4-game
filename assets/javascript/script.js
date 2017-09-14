"use strict";
var characters = [
  mario : { name: "Mario", id: '"#mario"', hp: 100, attack1: 10, attack2: 15, counterattack: 9},
  luigi :  { name: "Luigi", id: '"#luigi"', hp: 90, attack1: 8, attack2: 12, counterattack: 4},
  bowser :  { name: "Bowser", id: '"#bowser"', hp: 130, attack1: 6, attack2: 20, counterattack: 18 ,
  toad :  { name: "Toad", id: '"#toad"', hp: 85, attack1: 9, attack2: 7, counterattack: 13}
];
var nameId = ["#marioName", "#luigiName", "#bowserName", "#toadName"];
var hpId = ["#hpMario", "#hpLuigi", "#hpBowser", "#hpToad"];
var displayedCharacterNames = ["Mario", "Luigi", "Bowser", "toad"];

var mario = {
    name: "Mario",
    id: '"#mario"',
    hpId: "#hpMario",
    hp: 100,
    attack1: 10,
    attack2: 15,
    counterAttack: 5
};
var luigi = {
    name: "Luigi",
    id: '"#luigi"',
    hpId: "#hpLuigi",
    hp: 90,
    attack1: 8,
    attack2: 12,
    counterAttack: 4
};
var bowser = {
    name: "Bowser",
    id: '"#bowser"',
    hpId: "#hpBowser",
    hp: 130,
    attack1: 6,
    attack2: 20,
    counterAttack: 18
};
var toad = {
    name: "Toad",
    id: '"#toad"',
    hpId: "#hpToad",
    hp: 85,
    attack1: 9,
    attack2: 7,
    counterAttack: 13
};
var characterList = ["mario", "luigi", "bowser", "toad"];
var bolYourCharacter = true;
var bolOpponent = true;
var selectedCharacter = {};
var selectedOpponent = {};
var selectedOpponentObject = eval(selectedOpponent);
var selectCharacterObject = eval(selectCharacter);
var bolGame = true;
var bolLevel1 = true;
var bolLevel2 = false;
var bolLevel3 = false;
var opponentHp = 0;

for (var i = 0; i < characterList.length; i++) {
    characterList[i] = "#" + characterList[i];
};

for (var i = 0; i < 4; i++) {
    $(nameId[i]).text(characters[i].name);
};

for (var i = 0; i < 4; i++) {
    $(hpId[i]).text(characters[i].hp);
};


//function that removes clicked character from character list array

$("#characterChoicesRow").on("click", (".character"), function() {
    selectedCharacter = this.id;
    console.log(selectedCharacter);
    var index = characterList.indexOf("#" + selectedCharacter);
    console.log(index);
    characterList.splice(index, 1);
    console.log(characterList);
    $("#selectedOpponent, #opponentChoices").addClass("show");
    $("#characterChoices").html("Your Character");
    $("#selectCharacter").addClass("hide");
    $("#" + selectedCharacter).removeClass("inCharacterChoices character");
    console.log(characterList);
    $(characterList.toString()).appendTo("#opponentChoicesRow").addClass("inOpponentChoices opponent").removeClass("inCharacterChoices");
    console.log(characterList)
});

$("#opponentChoicesRow").on("click", (".opponent"), function() {
    $("#opponentContainer").addClass("show");
    $(this).appendTo("#opponentRow");
    $(this).removeClass("inOpponentChoices");
    $(this).addClass("inOpponent");
    selectedOpponent = this.id;
    var index2 = characterList.indexOf("#" + selectedOpponent);
    characterList.splice(index2, 1);
    $(characterList.toString()).removeClass("opponent");
    $("#selectedOpponent").removeClass("show");
    $("#attackContainer").removeClass("hide");

});


$("#attack1").on("click", function() {
    selectedOpponent = eval(selectedOpponent);
    selectedCharacter = eval(selectedCharacter);
    selectedOpponent.hp -= selectedCharacter.attack1;
    selectedCharacter.attack1 += 8;
    $(selectedOpponent.hpId).text(selectedOpponent.hp);
    selectedCharacter.hp -= selectedOpponent.counterAttack;
    $(selectedCharacter.hpId).text(selectedCharacter.hp);
    if (selectedOpponent.hp <= 0) {
        $(selectedOpponent.hpId).text("0");
        $(".inOpponent").hide();
        selectedOpponent = null;
        $(characterList.toString()).addClass("opponent");
    }
    if (selectedCharacter.hp <= 0) {
        $(selectedCharacter.hpId).text("0");

    }
});



$("#attack2").on("click", function() {
    selectedOpponent = eval(selectedOpponent);
    selectedCharacter = eval(selectedCharacter);
    selectedOpponent.hp -= selectedCharacter.attack2;
    selectedCharacter.attack2 += 6;
    opponentHp = selectedOpponent.hp;
    $(selectedOpponent.hpId).text(selectedOpponent.hp);
    selectedCharacter.hp -= selectedOpponent.counterAttack;
    $(selectedCharacter.hpId).text(selectedCharacter.hp);
    if (opponentHp <= 0) {
        $(selectedOpponent.hpId).text("0");
        $(".inOpponent").hide();
        selectedOpponent = null;
        $(characterList.toString()).addClass("opponent");
    }
    if (selectedCharacter.hp <= 0) {
        $(selectedCharacter.hpId).text("0");

    }
});

if (characterList ===[]) {
	
}

function reset() {
	for (var i = 0; i < characters.length; i++) {
		$(characters[i])
	}
	$("")

}
