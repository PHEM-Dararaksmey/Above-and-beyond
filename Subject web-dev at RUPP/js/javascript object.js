/* 	3. ការប្រើប្រាស់​ event របស់ object 
		a. របៀបទី ១​
			i. ធាតុបានរើស .addEventListnener("ឈ្មោះរបស់ event , ឈ្មោះរបស់ function);
		b. របៀបទី២ 
			i. ឈ្មោះ event ប្រើប្រាស់ញឹកញាប់មាន click , change, focus , blur ។ល។
*/
var rnd1 = document.getElementById("rnd1");
var rnd2 = document.getElementById("rnd2");
var rnd3 = document.getElementById("rnd3");
var btnStart = document.getElementById("btnStop");
var btnStop = document.getElementById("btnStop");
var intervalID = 0
function random(){
	rnd1.textContent = Math.floor(Math.random()* 10);
	rnd2.textContent = Math.floor(Math.random()* 8+1);
	rnd3.textContent = Math.floor(Math.random()* 6+2);
}
btnStart.onclick = function(){
	intervalID = window.setInterval(random,500);
}
btnStart.onclick = function(){
	intervalID = window.setInterval(random,500);
}
btnStart.onclick = function(){
	intervalID = window.clearInterval(intervalID);
}