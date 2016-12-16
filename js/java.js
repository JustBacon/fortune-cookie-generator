

function fortune(){
	var node = document.createElement("li")
	var fortuneList = document.createTextNode("turn one day older tommorow.")
	node.appendChild(fortuneList)
	document.getElementById('fortune-cookie-text').appendChild(node);

}