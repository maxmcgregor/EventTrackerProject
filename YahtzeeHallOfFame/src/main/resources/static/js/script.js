window.addEventListener('load', function(e) {
	init();
});

function init() {
	document.gameForm.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		var successAddingDiv = document.getElementById('successAddingDiv');
		successAddingDiv.textContent = '';
		var gameId = document.gameForm.gameId.value;
		if (!isNaN(gameId) && gameId > 0) {
			getGame(gameId);
		}
	});

	var newGameForm = document.getElementById('newGameForm');
	newGameForm.addEventListener('click', function(e) {
		e.preventDefault();
		console.log('before resetting success div');
		var successAddingDiv = document.getElementById('successAddingDiv');
		successAddingDiv.textContent = '';
		console.log('after resetting success div');
		displayAddGameForm();

		var submitNewGameButton = document.getElementById('submitNewGameButton');
		submitNewGameButton.addEventListener('click', function(e) {
			e.preventDefault();
			addNewGame();
			var newGameDiv = document.getElementById('newGameDiv');
			newGameDiv.textContent = '';			
		});
	});	
};

function getGame(gameId) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/games/' + gameId);

	xhr.onreadystatechange = function() {
		if (xhr.status === 200 && xhr.readyState === 4) {
			var gameData = JSON.parse(xhr.responseText);
			displayGame(gameData);
		} else if (xhr.readyState === 4 && xhr.status >= 400) {
		var	gameDiv = document.getElementById('gameDisplay');
		gameDiv.textContent = "Game not found";		
		}
	}
	xhr.send();
}

function displayGame(game) {
	var gameDiv = document.getElementById('gameDisplay');
	gameDiv.textContent = '';

	var table = document.createElement('table');
	gameDiv.appendChild(table);

	var thead = document.createElement('thead');
	table.appendChild(thead);

	var trow = document.createElement('tr');
	thead.appendChild(trow);

	var theadPlayer = document.createElement('th');
	theadPlayer.textContent = 'Player';
	trow.appendChild(theadPlayer);

	var theadScore = document.createElement('th');
	theadScore.textContent = 'Total Score';
	trow.appendChild(theadScore);

	var theadWinner = document.createElement('th');
	theadWinner.textContent = 'Outcome';
	trow.appendChild(theadWinner);

	var tbody = document.createElement('tbody');
	table.appendChild(tbody);

	var tr = document.createElement('tr');
	tbody.appendChild(tr);

	var tdPlayer = document.createElement('td');
	tdPlayer.textContent = game.player.name;
	tr.appendChild(tdPlayer);

	var tdScore = document.createElement('td');
	tdScore.textContent = game.grandTotal;
	tr.appendChild(tdScore);

	var tdOutcome = document.createElement('td');
	if (game.winner === true) {
		tdOutcome.textContent = 'WINNER';
	} else if (game.winner === false) {
		tdOutcome.textContent = 'LOSER';
	}
	tr.appendChild(tdOutcome);

}

function displayAddGameForm() {
	var newGameForm = document.getElementById('newGameForm');
	newGameForm.textContent = '';

	var newGameDiv = document.getElementById('newGameDiv');
	var h4 = document.createElement('h4');
	h4.textContent = 'Enter Game Details Below';
	newGameDiv.appendChild(h4);

	var newGameData = document.createElement('form');
	newGameData.name = 'newGameDataForm'
	newGameData.id = 'newGameDataForm';
	newGameDiv.appendChild(newGameData);

	var playerIdInput = document.createElement('input');
	playerIdInput.type = 'number';
	playerIdInput.name = 'playerId';
	playerIdInput.placeholder = 'Player ID';
	newGameData.appendChild(playerIdInput);
	var playerBreak = document.createElement('br');
	newGameData.appendChild(playerBreak);

	var playerNameInput = document.createElement('input');
	playerNameInput.type = 'string';
	playerNameInput.name = 'playerName';
	playerNameInput.placeholder = 'Player Name';
	newGameData.appendChild(playerNameInput);
	var playerNameBreak = document.createElement('br');
	newGameData.appendChild(playerNameBreak);

	var winnerInput = document.createElement('input');
	winnerInput.type = 'radio';
	winnerInput.id = 'winner';
	winnerInput.name = 'winnerOrLoser';
	winnerInput.value = true;
	newGameData.appendChild(winnerInput);
	var winnerLabel = document.createElement('label');
	winnerLabel.for = 'winner';
	winnerLabel.textContent = 'Winner';
	newGameData.appendChild(winnerLabel);

	
	var loserInput = document.createElement('input');
	loserInput.type = 'radio';
	loserInput.id = 'loser';
	loserInput.name = 'winnerOrLoser';
	loserInput.value = false;
	newGameData.appendChild(loserInput);
	var loserLabel = document.createElement('label');
	loserLabel.for = 'loser';
	loserLabel.textContent = 'Loser';
	newGameData.appendChild(loserLabel);
	var Break = document.createElement('br');
	newGameData.appendChild(Break);

	var totalScoreInput = document.createElement('input');
	totalScoreInput.type = 'number';
	totalScoreInput.name = 'totalScore';
	totalScoreInput.placeholder = 'Total Score';
	newGameData.appendChild(totalScoreInput);
	var Break = document.createElement('br');
	newGameData.appendChild(Break);

	var upperSection = document.createElement('p');
	upperSection.textContent = 'Upper Section';
	newGameData.appendChild(upperSection);

	var acesInput = document.createElement('input');
	acesInput.type = 'number';
	acesInput.name = 'aces';
	acesInput.placeholder = 'Aces';
	newGameData.appendChild(acesInput);
	var aceBreak = document.createElement('br');
	newGameData.appendChild(aceBreak);

	var twosInput = document.createElement('input');
	twosInput.type = 'number';
	twosInput.name = 'twos';
	twosInput.placeholder = 'Twos';
	newGameData.appendChild(twosInput);
	var twosBreak = document.createElement('br');
	newGameData.appendChild(twosBreak);
	
	var threesInput = document.createElement('input');
	threesInput.type = 'number';
	threesInput.name = 'threes';
	threesInput.placeholder = 'Threes';
	newGameData.appendChild(threesInput);
	var threesBreak = document.createElement('br');
	newGameData.appendChild(threesBreak);

	var foursInput = document.createElement('input');
	foursInput.type = 'number';
	foursInput.name = 'fours';
	foursInput.placeholder = 'Fours';
	newGameData.appendChild(foursInput);
	var foursBreak = document.createElement('br');
	newGameData.appendChild(foursBreak);

	var fivesInput = document.createElement('input');
	fivesInput.type = 'number';
	fivesInput.name = 'fives';
	fivesInput.placeholder = 'Fives';
	newGameData.appendChild(fivesInput);
	var fivesBreak = document.createElement('br');
	newGameData.appendChild(fivesBreak);

	var sixesInput = document.createElement('input');
	sixesInput.type = 'number';
	sixesInput.name = 'sixes';
	sixesInput.placeholder = 'Sixes';
	newGameData.appendChild(sixesInput);
	var sixesBreak = document.createElement('br');
	newGameData.appendChild(sixesBreak);

	var bonusInput = document.createElement('input');
	bonusInput.type = 'number';
	bonusInput.name = 'bonus';
	bonusInput.placeholder = 'Bonus';
	newGameData.appendChild(bonusInput);
	var bonusBreak = document.createElement('br');
	newGameData.appendChild(bonusBreak);

	var lowerSection = document.createElement('p');
	lowerSection.textContent = 'Lower Section';
	newGameData.appendChild(lowerSection);

	var threeOfAKindInput = document.createElement('input');
	threeOfAKindInput.type = 'number';
	threeOfAKindInput.name = 'threeOfAKind';
	threeOfAKindInput.placeholder = '3 of a Kind';
	newGameData.appendChild(threeOfAKindInput);
	var threeOfAKindBreak = document.createElement('br');
	newGameData.appendChild(threeOfAKindBreak);

	var fourOfAKindInput = document.createElement('input');
	fourOfAKindInput.type = 'number';
	fourOfAKindInput.name = 'fourOfAKind';
	fourOfAKindInput.placeholder = '4 of a Kind';
	newGameData.appendChild(fourOfAKindInput);
	var fourOfAKindBreak = document.createElement('br');
	newGameData.appendChild(fourOfAKindBreak);
	
	var fullHouseInput = document.createElement('input');
	fullHouseInput.type = 'number';
	fullHouseInput.name = 'fullHouse';
	fullHouseInput.placeholder = 'Full House';
	newGameData.appendChild(fullHouseInput);
	var fullHouseBreak = document.createElement('br');
	newGameData.appendChild(fullHouseBreak);

	var smStraightInput = document.createElement('input');
	smStraightInput.type = 'number';
	smStraightInput.name = 'smallStraight';
	smStraightInput.placeholder = 'Small Straight';
	newGameData.appendChild(smStraightInput);
	var smStraightBreak = document.createElement('br');
	newGameData.appendChild(smStraightBreak);

	var lgStraightInput = document.createElement('input');
	lgStraightInput.type = 'number';
	lgStraightInput.name = 'largeStraight';
	lgStraightInput.placeholder = 'Large Straight';
	newGameData.appendChild(lgStraightInput);
	var lgStraightBreak = document.createElement('br');
	newGameData.appendChild(lgStraightBreak);

	var yahtzeeInput = document.createElement('input');
	yahtzeeInput.type = 'number';
	yahtzeeInput.name = 'yahtzee';
	yahtzeeInput.placeholder = 'Yahtzee';
	newGameData.appendChild(yahtzeeInput);
	var yahtzeeBreak = document.createElement('br');
	newGameData.appendChild(yahtzeeBreak);

	var chanceInput = document.createElement('input');
	chanceInput.type = 'number';
	chanceInput.name = 'chance';
	chanceInput.placeholder = 'Chance';
	newGameData.appendChild(chanceInput);
	var chanceBreak = document.createElement('br');
	newGameData.appendChild(chanceBreak);

	var yahtzeeBonusInput = document.createElement('input');
	yahtzeeBonusInput.type = 'number';
	yahtzeeBonusInput.name = 'yahtzeeBonus';
	yahtzeeBonusInput.placeholder = 'Yahtzee Bonus';
	newGameData.appendChild(yahtzeeBonusInput);
	var yahtzeeBonusBreak = document.createElement('br');
	newGameData.appendChild(yahtzeeBonusBreak);

	var submitButton = document.createElement('input');
	submitButton.type = 'submit';
	submitButton.id = 'submitNewGameButton';
	submitButton.value = 'Submit Game to Database';
	newGameData.appendChild(submitButton);

}

function addNewGame() {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/games', true);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				var newGameData = JSON.parse(xhr.responseText);
				displayGame(newGameData);
				displaySuccessfulAddedGame();				
			} else {
				console.log("POST Request Failed");
				console.log(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	
	var playerObject = {
		id: document.newGameDataForm.playerId.value,
		name: document.newGameDataForm.playerName.value
	}

	var gameObject = {
		grandTotal: document.newGameDataForm.totalScore.value,
		winner: document.newGameDataForm.winnerOrLoser.value,
		aces: document.newGameDataForm.aces.value,
		twos: document.newGameDataForm.twos.value,
		threes: document.newGameDataForm.threes.value,
		fours: document.newGameDataForm.fours.value,
		fives: document.newGameDataForm.fives.value,
		sixes: document.newGameDataForm.sixes.value,
		bonus: document.newGameDataForm.bonus.value,
		threeOfAKind: document.newGameDataForm.threeOfAKind.value,
		fourOfAKind: document.newGameDataForm.fourOfAKind.value,
		fullHouse: document.newGameDataForm.fullHouse.value,
		smallStraight: document.newGameDataForm.smallStraight.value,
		largeStraight: document.newGameDataForm.largeStraight.value,
		yahtzee: document.newGameDataForm.yahtzee.value,
		chance: document.newGameDataForm.chance.value,
		yahtzeeBonus: document.newGameDataForm.yahtzeeBonus.value,
		player: playerObject
	}

	var gameObjectJson = JSON.stringify(gameObject);

	xhr.send(gameObjectJson);
	var addGameButton = document.getElementById('newGameForm');
	addGameButton.textContent = '';
	populateAddGameButton();

}

function populateAddGameButton() {
	var newGameForm = document.getElementById('newGameForm');
	var addNewGameButton = document.createElement('button');
	addNewGameButton.id = 'addNewGameButton';
	addNewGameButton.textContent = 'Add New Game';
	newGameForm.appendChild(addNewGameButton);
}

function displaySuccessfulAddedGame() {
	var successAddingDiv = document.getElementById('successAddingDiv');
	var h4 = document.createElement('h4');
	h4.textContent = 'Game Result Successfully Added';
	successAddingDiv.appendChild(h4);
}