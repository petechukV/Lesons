function move(){
	var elem = document.getElementById("myBar");
	var width = 1;
	var id = setInterval(frame,1);
	function frame(){
		if(width>=100){
			clearInterval(id);
		}
		else{
			width++;
			elem.style.width = width +'%';
			document.getElementById("label").innerHTML = width +'%';
		}
	}
}