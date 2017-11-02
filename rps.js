function play(choice) {
	var player = choice;
	var options = ["rock", "paper", "scissors"];
	var computer = options[Math.floor(Math.random()*3)];

  if (computer == player){
  	return "It's a tie!";
  }
  else if (player == "rock"){
		if (computer == "paper"){
			return "I picked paper, you lose.";
		}
		else{
			return "I picked scissors, you win!";
		}
	}
	else if (player == "paper"){
		if (computer == "scissors"){
			return "I picked scissors, you lose.";
		}
		else{
			return "I picked rock, you win!";
		}
	}
	else{
		if (computer == "rock"){
			return "I picked rock, you lose.";
		}
		else{
			return "I picked paper, you win!";
		}
	}
	console.log(computer);
}

$('#rock').click(function() {
	$('img').css('border-top', '3px solid black');
	$(this).css('border-top', '3px solid grey');
	$('h3').html(play('rock'));
});

$('#paper').click(function() {
	$('img').css('border-top', '3px solid black');
	$(this).css('border-top', '3px solid grey');
	$('h3').html(play('paper'));
});

$('#scissors').click(function() {
	$('img').css('border-top', '3px solid black');
	$(this).css('border-top', '3px solid grey');
	$('h3').html(play('scissors'));
});