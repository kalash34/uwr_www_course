var locked = "rgb(76, 130, 153)";
var pickedUp = "rgb(204, 27, 43)";
var punish = "rgb(255,69,0)";
var released = "rgb(25, 255, 200)";
var finish = "rgb(173,255,47)";
var start = "rgb(25,0,200)";

var pickUps;
var count = 0;

var time = 0;
var t;
var timerIsOn = 0;
var newGame = 1;

var scores = 0;

function init(){
	document.getElementById("startSquare").onmouseout = function(){
		startCount();
	}
}

function randomize(min, max) {
  return String(Math.floor(Math.random() * (max - min)) + min) + "px";
}

function newPickUp(left, top){
	var pickUp = document.createElement("div");
	pickUp.className = "pickUpSquare";
	pickUp.style.left = left;
	pickUp.style.top = top;
	document.getElementById("playGround").appendChild(pickUp);
}

function deletePickUps(){
	var length = pickUps.length;
	for (var i = 0; i < length; i++){
		pickUps[0].remove();
	}
}

function resetGame(){
	count = 0;
	time = 0;
	timerIsOn = 0;
	newGame = 1;
	deletePickUps();
}

function saveScore(){
	var newScore = document.createElement("li");
	newScore.innerHTML = (time - 0.01).toFixed(2);
	document.getElementById("scores").appendChild(newScore);

}

function shuffle(){
	newPickUp(randomize(0, 270), randomize(0, 95));
	newPickUp(randomize(300, 570), randomize(0, 95));
	newPickUp(randomize(0, 125), randomize(125, 390));
	newPickUp(randomize(125, 320), randomize(125, 220));
	newPickUp(randomize(350, 445), randomize(125, 295));
	newPickUp(randomize(475, 570), randomize(125, 390));
	newPickUp(randomize(0, 95), randomize(413, 570));
	newPickUp(randomize(125, 220), randomize(250, 445));
	newPickUp(randomize(250, 445), randomize(350, 445));
	newPickUp(randomize(125, 445), randomize(475, 570));
	newPickUp(randomize(475, 570), randomize(413, 570));
	pickUps = document.getElementsByClassName("pickUpSquare");
	setup();
}

function timedCount(){
	document.getElementById("currentTime").innerHTML = time.toFixed(2);
	time = time + 0.01;
	t = setTimeout(function(){ timedCount()}, 10);
}

function startCount(){
	if(!timerIsOn){
		timerIsOn = 1;
		timedCount();
	}
}

function stopCount(){
	clearTimeout(t);
	timerIsOn = 0;
}

function getCurrentBgc(pick){
	return window.getComputedStyle(pick).getPropertyValue("background-color");
}

function pickUp(pick){
	if (getCurrentBgc(pick) == pickedUp){
		pick.style.backgroundColor = punish;
		document.getElementById("currentTime").style.color = "red";
		time = time + 0.01;
		setTimeout(function(){
			pick.style.backgroundColor = pickedUp;
			document.getElementById("currentTime").style.color =  "white";
		}, 500);
	}
	if (getCurrentBgc(pick) == released){
		pick.style.backgroundColor = pickedUp;
		lockPickups();
		document.getElementById("startSquare").style.backgroundColor = finish;
		count++;
		if (count == 2){
			document.getElementById("startSquare").style.backgroundColor = finish;
		}
	}
}

function setup(){
	for (var i = 0; i < pickUps.length; i++){
		pickUps[i].onmouseover = function(){
			pickUp(this);
		}
	}	
}

function releasePickUps(){
	stopCount();
	document.getElementById("startSquare").style.backgroundColor = start;
	if (newGame){
		newGame = 0;
		shuffle();
	}
	if (count == 11){
		stopCount();
		saveScore();
		resetGame();
		return;
	}
	for (var i = 0; i < pickUps.length; i++){
		if (getCurrentBgc(pickUps[i]) != pickedUp){
			pickUps[i].style.backgroundColor = released;
		}
	}
}

function lockPickups(){
	for (var i = 0; i < pickUps.length; i++){
		if (getCurrentBgc(pickUps[i]) != pickedUp){
			pickUps[i].style.backgroundColor = locked;
		}
	}
}

window.onload = init;