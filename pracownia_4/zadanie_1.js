function zadanie1(){
	appendDiv();
	setBorder();
	addLinks();
}

function appendDiv(){
	var newDiv = {};
	newDiv = document.createElement("div");
	newDiv.id = "menu";
	document.getElementById("content").appendChild(newDiv);
}

function setBorder(){
	document.getElementById("menu").style.border = "thick solid blue";
}
			
function addLinks(){
	var linkNames = ["Czerwony", "Czarny", "Brązowy"];
	linkNames.forEach(
		function addSpan(value) {
		var newSpan = {};
		newSpan = document.createElement("span");
		newSpan.innerHTML = value;
		newSpan.setAttribute("onclick", "set"+value+"()");
		document.getElementById("menu").appendChild(newSpan);
		}
		);
}

function setCzerwony(){
	document.getElementById("menu").style.borderColor = "red";
}

function setCzarny(){
	document.getElementById("menu").style.borderColor = "black";
}

function setBrązowy(){
	document.getElementById("menu").style.borderColor = "brown";
}