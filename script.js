function clock(){

	let today = new Date();
	let month = today.getMonth()+1;
	let day = today.getDate();
	let year = today.getFullYear();
	let hours = today.getHours();
	
	let minutes = today.getMinutes();
	if(minutes<10)
	{
		minutes = "0"+minutes;
	}

	let seconds = today.getSeconds();
	if(seconds<10){
		seconds = "0"+seconds;
	}
	
	let time = document.getElementById("timer");
	time.innerHTML = day+"/"+ month+"/"+ year +"," + " " + hours 
		+":"+ minutes + ":" + seconds;

}