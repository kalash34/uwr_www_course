function loadJS(){
	var accountNumber = document.getElementById("accountNumber");
	accountNumber.onchange = function(){
		checkAccountNumber(accountNumber);
	}

	var pesel = document.getElementById("pesel");
	pesel.onchange = function(){
		checkPesel(pesel);
	}

	var birthDate = document.getElementById("birthDate");
	birthDate.onchange = function(){
		checkBirthDate(birthDate);
	}

	var email = document.getElementById("email");
	email.onchange = function(){
		checkEmail(email);
	}

	var form = document.getElementById("form");
	form.onsubmit = function(){
		checkInputs();
	}
}

function validInput(anchor){
	anchor.style.border = "1px solid grey";
}

function invalidInput(anchor){
	anchor.style.border = "1px solid red";
}

function checkPattern(pattern, anchor){
	return pattern.test(anchor.value);
}

function setValidity(anchor, test){
	if (test) validInput(anchor);
	else invalidInput(anchor);
}

function checkAccountNumber(anchor){
	var pattern = /^(([0-9]{5})|([0-9]{1} [0-9]{2} [0-9]{2}))$/;
	setValidity(anchor, checkPattern(pattern, anchor));
}

function checkPesel(anchor){
	var pattern = /^([0-9]{3})$/;
	setValidity(anchor, checkPattern(pattern, anchor));
}

function checkBirthDate(anchor){
	var pattern = /^((0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20)\d\d)$/;
	setValidity(anchor, checkPattern(pattern, anchor));
}

function checkEmail(anchor){
	//var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var pattern = /^([a-z0-9._%+-]{1,}@[a-z0-9._]{1,}\.[a-z]{2,3})$/;
	setValidity(anchor, checkPattern(pattern, anchor));
}

function checkInputs(){
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < 4; i++){
		if (inputs[i].style.borderColor == "red" || inputs[i].value.length == 0){
			alert("Formularz błędnie wypełniony!");
			break;
		}
	}
}

window.onload = loadJS;