var typed = false;
var imgLoad = imagesLoaded('body');
var str = " ";
var text = document.getElementById("text");

imgLoad.on('done', function(){
	document.getElementById("coverContainer").style.opacity = "1";
});

window.onkeydown = function(event){
	document.getElementById("in").focus();
	if(typed == false){
		document.getElementById("start").innerHTML = " ";
		typed = true;
	}
}

document.ontouchstart = function(){
	document.getElementById("in").focus();
}

window.onkeyup = function(event){
	str = document.getElementById("in").value;
	changePablo(str);
}

function changePablo(y){
if(y.length > 0){
	for(var i = 0, elems = document.getElementsByTagName('h1'); i < elems.length; i++) { 
   		elems[i].innerHTML = y;
	}
}else{
	document.getElementById("one").innerHTML = "THE LIFE OF &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PABLO";
	document.getElementById("two").innerHTML = "THE LIFE OF &nbsp;&nbsp; PABLO";
	document.getElementById("three").innerHTML = "THE LIFE OF &nbsp;&nbsp; PABLO";
	document.getElementById("four").innerHTML = "THE LIFE OF &nbsp;&nbsp; PABLO";
	document.getElementById("five").innerHTML = "THE LIFE OF &nbsp;&nbsp; PABLO";
	document.getElementById("six").innerHTML = "THE LIFE OF &nbsp;&nbsp; PABLO";
	document.getElementById("seven").innerHTML = "THE LIFE OF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PABLO";
}
}