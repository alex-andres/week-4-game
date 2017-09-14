// Javascript file for Mario Game

// Code contained in this function will run as soon as the page loads.
// window.onload =function(){

// }



// Global Variables
var selectedCharacter = "";
var selectedOpponent = "";
var indexSelectedCharacter = 0;
var indexSeletedOpponent = 0;
var arrAllCharactersList = ["mario", "luigi", "bowser", "toad"];
var arrAllCharacters = [];
var arrAllOpponents = [];
var arrLowerCaseCharacters = [];
var arrRemainingCharacters =[];
var arrRemainingCharacterIDs = [];
var arrAllOpponentsIDs = [];
var bolStart = true;
var bolCharSelect = false;
var bolOppSelect = false;
var bolAttack = false;
var bolGameOver = false;
var bolOpponentDefeated = false;
var characterHp = 0;
var opponentHp = 0;
var characterAttack1 = 0;
var characterAttack2 = 0;
var opponentCounterAttack = 0;
var character;
var opponent; 
// object with character objects
var characters = {
	 mario : { name: "Mario", id: '"#mario"', hpId: "#hpMario", hp: 100, attack1: 10, attack2: 15, counterAttack: 9},
  luigi :  { name: "Luigi", id: '"#luigi"', hpId: "#hpLuigi", hp: 90, attack1: 8, attack2: 12, counterAttack: 4},
  bowser :  { name: "Bowser", id: '"#bowser"', hpId: "#hpBowser", hp: 130, attack1: 6, attack2: 20, counterAttack: 18},
  toad :  { name: "Toad", id: '"#toad"', hpId: "#hpToad",  hp: 85, attack1: 9, attack2: 7, counterAttack: 13}
};
//for loop that creates an array out of characters object to be able to iterate over
for (var key in characters){
	arrAllCharacters.push(characters[key]);
	arrRemainingCharacters.push(characters[key]);
}
// for loop that creates a lower case array and id array
for (var i = 0; i < arrAllCharacters.length; i++) {
	arrLowerCaseCharacters[i] = arrAllCharacters[i].name.toLowerCase();
	arrRemainingCharacterIDs[i] = "#" + arrLowerCaseCharacters[i]
}
var marioGame = {
	moveOpponents: function() {
		//A function that takes the buttons that were not clicked on and appends them to the opponents row 
		indexSelectedCharacter = arrRemainingCharacterIDs.indexOf("#" + selectedCharacter);
		arrRemainingCharacterIDs.splice(indexSelectedCharacter, 1);
		arrRemainingCharacters.splice(indexSelectedCharacter, 1);
    $(arrRemainingCharacterIDs.toString()).appendTo("#opponentChoicesRow").addClass("inOpponentChoices opponent").removeClass("inCharacterChoices");
		},
	displayOpponentsChoices: function() {
		$("#selectedOpponent, #opponentChoices").removeClass("hide");
		$("#selectCharacter, #selectedCharacter").addClass("hide");
		$("#characterChoices").html("Your Character");

		},
	moveSelectedOpponent: function() {
    indexSelectedOpponent = arrRemainingCharacterIDs.indexOf("#" + selectedOpponent);
    $("#" +selectedOpponent).appendTo("#opponentRow")
    },
  displayOpponentSelection: function(){
    $("#opponentContainer").removeClass("hide");
    $("#selectedOpponent").addClass("hide");
    $("#opponent").html("Your Opponent");
    $("#attackContainer").removeClass("hide");
  	},
  attack1: function(){
  	console.log(arrAllCharacters);
  	var character = arrAllCharacters[indexSelectedCharacter];
  	var opponent = arrRemainingCharacters[indexSelectedOpponent];
  	character.hp -= opponent.counterAttack;
  	opponent.hp -= Math.floor(1.2 * character.attack1);
  	$(character.hpId).text("HP: " + character.hp);
  	$(opponent.hpId).text("HP: " + opponent.hp);
  },
  attack2: function(){
		console.log(arrAllCharacters);
		character.hp -= opponent.counterAttack;
		opponent.hp -= Math.floor(1.5 * character.attack2);
		$(character.hpId).text("HP: " + character.hp);
		$(opponent.hpId).text("HP: " + opponent.hp);
	},
	chooseNewOpponent: function(){
		$(eval(opponent.id)).addClass("hide");
		$("#selectedOpponent, #opponentChoices").removeClass("hide");
		selectedOpponent = "";
		indexSeletedOpponent = 0;
		bolOppSelect = true;
		this.moveSelectedOpponent();
		this.displayOpponentSelection();
	},
	reset: function(){
		$("#reset").removeClass("hide");
		$("#reset").on("click", function(){
			selectedCharacter = "";
			selectedOpponent = "";
			indexSelectedCharacter = 0;
			indexSeletedOpponent = 0;
			arrAllCharactersList = ["mario", "luigi", "bowser", "toad"];
			arrAllCharacters = [];
			arrAllOpponents = [];
			arrLowerCaseCharacters = [];
			arrRemainingCharacters =[];
			arrRemainingCharacterIDs = [];
			arrAllOpponentsIDs = [];
			bolStart = true;
			bolCharSelect = false;
			bolOppSelect = false;
			bolAttack = false;
			bolGameOver = false;
			bolOpponentDefeated = false;
			characterHp = 0;
			opponentHp = 0;
			characterAttack1 = 0;
			characterAttack2 = 0;
			opponentCounterAttack = 0;
			character;
			opponent; 
			// object with character objects
			var characters = {
				 mario : { name: "Mario", id: '"#mario"', hpId: "#hpMario", hp: 100, attack1: 10, attack2: 15, counterAttack: 9},
			  luigi :  { name: "Luigi", id: '"#luigi"', hpId: "#hpLuigi", hp: 90, attack1: 8, attack2: 12, counterAttack: 4},
			  bowser :  { name: "Bowser", id: '"#bowser"', hpId: "#hpBowser", hp: 130, attack1: 6, attack2: 20, counterAttack: 18},
			  toad :  { name: "Toad", id: '"#toad"', hpId: "#hpToad",  hp: 85, attack1: 9, attack2: 7, counterAttack: 13}
			};
			//for loop that creates an array out of characters object to be able to iterate over
			for (var key in characters){
				arrAllCharacters.push(characters[key]);
				arrRemainingCharacters.push(characters[key]);
			}
			// for loop that creates a lower case array and id array
			for (var i = 0; i < arrAllCharacters.length; i++) {
				arrLowerCaseCharacters[i] = arrAllCharacters[i].name.toLowerCase();
				arrRemainingCharacterIDs[i] = "#" + arrLowerCaseCharacters[i]
			}
						// for loop that generates text for a character name for each button using jquery selectors and methods
			for (var i = 0; i < 4; i++) { 
			    $("#" + arrLowerCaseCharacters[i] + "Name").text(arrAllCharacters[i].name);
			};
			// for loop that genererates text a character name for each button using jquery selectors and methods
			for (var i = 0; i < 4; i++) {
			    $("#hp" + arrAllCharacters[i].name).text("HP: " + arrAllCharacters[i].hp);
			};
			$("#mario").appendTo("#characterChoicesRow").removeClass("hide");
			$("#luigi").appendTo("#characterChoicesRow").removeClass("hide");
			$("#bowser").appendTo("#characterChoicesRow").removeClass("hide");
			$("#toad").appendTo("#characterChoicesRow");
			$("#opponentChoices").addClass("hide");
			$("#opponentContainer").addClass("hide");
			$("#attackContainer").addClass("hide");
			$("#reset").addClass("hide");
			$("#mainContainer").addClass("hide");
			$("#startContainer").removeClass("hide");
		});
	}
};


// for loop that generates text for a character name for each button using jquery selectors and methods
for (var i = 0; i < 4; i++) { 
    $("#" + arrLowerCaseCharacters[i] + "Name").text(arrAllCharacters[i].name);
};
// for loop that genererates text a character name for each button using jquery selectors and methods
for (var i = 0; i < 4; i++) {
    $("#hp" + arrAllCharacters[i].name).text("HP: " + arrAllCharacters[i].hp);
};
//Input
//function that starts game by calling function once start button is click
$("#start").on("click", function(){
	if(bolStart === true){
		bolCharSelect = true;

	// method that removes hide class from the main container, displaying contents of game
	$("#mainContainer").removeClass("hide");
	// method that adds hide class to start container, to hide start button
	$("#startContainer").addClass("hide");
	}
});
	//Receives click input from user, while user is choosing his/her character
$("#characterChoicesRow").on("click", (".character"), function(){
	if (bolCharSelect === true) {
		selectedCharacter = this.id;
		marioGame.moveOpponents();
		marioGame.displayOpponentsChoices();
		bolOppSelect = true;
		bolCharSelect = false;
	}
});
//Receives click input from user, while user is choosing his/her opponent
$("#opponentChoicesRow").on("click", (".opponent"), function(){
	if(bolOppSelect === true) {			
		selectedOpponent = this.id;
		marioGame.moveSelectedOpponent();
		marioGame.displayOpponentSelection();
		bolAttack = true;
		bolOppSelect = false;
		character = arrAllCharacters[indexSelectedCharacter];
		opponent = arrRemainingCharacters[indexSelectedOpponent];
				console.log(opponent.hp);
	}
});


	// Receives click input from user, while user is selecting attack1
$("#attack1").on("click", function(){
	if (bolAttack === true && opponent.hp >= 0 ) {
		marioGame.attack1();
		if (character.hp <= 0) {
			$(character.hpId).text("HP: 0");
			bolGameOver = true;
			marioGame.reset();

		}
		if (opponent.hp <= 0) {
			$(opponent.hpId).text("HP: 0");
			bolOpponentDefeated = true;
			marioGame.chooseNewOpponent();			
		}
	}

});
	// Receives click input from user, while user is selecting attack2
$("#attack2").on("click", function(){
	if (bolAttack === true) {
		marioGame.attack2();
		if (character.hp <= 0) {
			$(character.hpId).text("HP: 0");
			bolGameOver = true;
			marioGame.reset();
		}
		if (opponent.hp <= 0) {
			$(opponent.hpId).text("HP: 0");
			marioGame.chooseNewOpponent();			
		}
	}
});





