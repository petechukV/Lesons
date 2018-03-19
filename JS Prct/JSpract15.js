var acc = document.getElementsByClassName("acardion");
var i;
for(i = 0; i < acc.length; i++ ){
	acc[i].onclick = function (){
		this.classList.toggle("active");

		this.nextElementSibling.classlist.toggle("show");
	}
}