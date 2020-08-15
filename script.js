var arr2 = [0,1,2,3,4,5,6,7,8,9];
var arr3 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var arr4 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var arr5 = ['!','@','#','$','%','&','*','_'];

/*==== Range ====================*/

document.getElementById('range').oninput = function () {
	document.getElementById('password-length').innerHTML = this.value;
}

/*==== Button ===================*/

generatePass();

document.getElementById('generator').onclick = generatePass;

function generatePass() {
	var result = [];
	if (document.getElementById('numbers').checked) {
		result = result.concat(arr2);
	}
	if (document.getElementById('lower-letters').checked) {
		result = result.concat(arr3);
	}
	if (document.getElementById('upper-letters').checked) {
		result = result.concat(arr4);
	}
	if (document.getElementById('symbols').checked) {
		result = result.concat(arr5);
	}
	result.sort(compareRandom);

	document.getElementById('result-password').innerHTML = '';

	for (var k = 0; k < 5; k++) { 
		var pass = '';
		var passLength = parseInt(document.getElementById('range').value);
		for (var i = 0; i < passLength; i++) {
			pass += result[randomInteger(0, result.length - 1)];
		}
		console.log(pass);
		document.getElementById('result-password').innerHTML += '<li>' + pass + '</li>';
	}
}

function compareRandom(a,b) {
	return Math.random() - 0.5;
}

function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}