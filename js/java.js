	var id1 = document.getElementById('generate') ;
	var fortune = [1,2,3,4];
	var random = fortune[Math.floor(Math.random() * fortune.length)]
	var ulList = document.getElementById('previous-fortunes');
	var createLi = document.createElement('Li')
function randomFortune(){
	id1.innerHTML = random
	
}
function fortune1(){
	//IF ELEMENT IS EMPTY
	if(id1.innerHTML == false){
		randomFortune();
	//ELEMENT HAS A TEXT
	}else{
		createLi.appendChild(random)
	}	
}