const buttons = document.getElementsByClassName("keyboardKey");
let letterCount = 0;

function word(event) {
	const clickedId = event.target.id;
	document.getElementById("answer").style.color = "black";

  if (clickedId === "button-g" && letterCount === 0) {
		document.getElementById("answer").innerHTML = "G _ _ _ _";
		letterCount = 1;
  } else if (clickedId === "button-o" && letterCount === 1) {
		document.getElementById("answer").innerHTML = "G O _ _ _";
		letterCount = 2;
  } else if (clickedId === "button-o" && letterCount === 2) {
		document.getElementById("answer").innerHTML = "G O O _ _";
		letterCount = 3;
  } else if (clickedId === "button-s" && letterCount === 3) {
		document.getElementById("answer").innerHTML = "G O O S _";
		letterCount = 4;
  } else if (clickedId === "button-e" && letterCount === 4) {
		document.getElementById("answer").innerHTML = "G O O S E";
		letterCount = 5;
  } else {
		document.getElementById("answer").innerHTML = "Wrong letter!";
		document.getElementById("answer").style.color = "#FF3131";
		letterCount = 0;
		setTimeout(lose, 500)
  }
  
  
  if (letterCount === 5){
	document.getElementById("answer").style.color = "#0FFF50";
	document.getElementById("answer").innerHTML = "GOOSE!";
	document.getElementById("question").innerHTML = "Duck, Duck, GOOSE!";
	setTimeout(win, 2000);  
  }
  
}

function win() {
	window.location.assign("./Iggy–Question2.html");	
}

function lose() {
	window.location.replace("./index.html");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", word);
}
