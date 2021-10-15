var name;
window.addEventListener('load',function(){
	console.log("html page loaded");
	show();
	cancel();
	reset();
	getname();
})

function getname(){
	document.getElementById('name').addEventListener("change");
		name=event.target.value;
		console.log(name);
}

function show(){
	var show=document.getElementById('show button');
	console.log(show);
	cancel.addEventListener("click",function(){console.log("hi i am show function");})
}

function reset(){
	var reset=document.getElementById('reset button');
	console.log(reset);
	reset.addEventListener("click",function(){console.log("hi i am reset function");})
}

function cancel(){
	var cancel=document.getElementById('cancel button');
	console.log(cancel);
	cancel.addEventListener("click",function(){console.log("hi i am cancel function");})
}

