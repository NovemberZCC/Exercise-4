function myFunction()
{  
var x = document.getElementById("myText1").value;
var y = document.getElementById("myText2").value;

if (isNaN(x) | isNaN(y)){
 document.getElementById("demo").innerHTML="it's not a number";
}
else{
q = Number(x)+ Number(y);
document.getElementById("demo").innerHTML=q;
}
}