let para = document.getElementById("timer");

setInterval(()=>{
	para.innerText = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()},  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
},1000)