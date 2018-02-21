function func(){
var checkbox;
checkbox = document.getElementById('check1');
if(checkbox.checked) alert('True');
else alert('False');
}
function fun2(){
    var rad=document.getElementsByName('r1');
    for(var i=0;i<rad.length;i++){
        if(rad[i].checked){
            alert('Chouse:'+i+' element');
        }
    }
}