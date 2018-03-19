function fun3(){
var sel = document.getElementById('sell').selectedIndex;
var options = document.getElementById('sell').options;
alert(' Your language is '+options[sel].text);
}

function fun2(){
    var rng = document.getElementById('r1');
    var div=document.getElementById('test');
   div.style.width=rng.value+'px';
}