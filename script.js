// write js code here if required
let d=new Date();
document.getElementById("timer").innerText=`${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;