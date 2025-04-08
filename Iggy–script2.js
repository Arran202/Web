const pictures = document.getElementsByClassName("picture");

function choice(event) {
	const clickedId = event.target.id;

  if (clickedId === "alien") {
		document.getElementById("question").innerHTML = "CORRECT!";
		document.getElementById("question").style.color = "#0FFF50";
		setTimeout(win, 2000);  
  } else {
	  document.getElementById("question").innerHTML = "WRONG";
	  document.getElementById("question").style.color = "#FF3131";
	  setTimeout(lose, 500)
  }
}

function win() {
	window.location.assign("./Question3.html");	
}

function lose(){
	window.location.replace("./index.html");	
}

for (let i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener("click", choice);
}
