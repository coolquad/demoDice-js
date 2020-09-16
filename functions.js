var iRandomNumber1, iRandomNumber2;
var SumDice;
var DiceArray = [0,0,0,0,0,0,0,0,0,0,0];
// var iRollDice;
var i;
// iRollDice = prompt("how many times do you want tot roll the dice?", 5);

for (i = 1; i <= 1000; i++){
	iRandomNumber1 = rollDie();
	iRandomNumber2 = rollDie();

	SumDice = iRandomNumber1 + iRandomNumber2;

	switch(SumDice){
		case 2:
			DiceArray[0] = ++DiceArray[0];
			break;
		case 3:
			DiceArray[1] = ++DiceArray[1];
			break;
		case 4:
			DiceArray[2] = ++DiceArray[2];
			break;
		case 5:
			DiceArray[3] = ++DiceArray[3];
			break;
		case 6:
			DiceArray[4] = ++DiceArray[4];
			break;
		case 7:
			DiceArray[5] = ++DiceArray[5];
			break;
		case 8:
			DiceArray[6] = ++DiceArray[6];
			break;
		case 9:
			DiceArray[7] = ++DiceArray[7];
			break;
		case 10:
			DiceArray[8] = ++DiceArray[8];
			break;
		case 11:
			DiceArray[9] = ++DiceArray[9];
			break;
		case 12:
			DiceArray[10] = ++DiceArray[10];
			break;
	}

}

for(var j = 0; j <= 10; j ++){
	document.writeln(j + 2 + " : " + DiceArray[j] + "<br>");
}



document.writeln("---finished---");

function rollDie(){
	return Math.ceil(Math.random() * 6);
}