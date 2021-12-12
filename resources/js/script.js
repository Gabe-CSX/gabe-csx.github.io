let date = new Date();
//document.getElementById('date').innerHTML = 'Today\'s date is ' + date;
let timeP = document.createElement('p');
timeP.id = 'date';
timeP.innerHTML = 'Today\s date is ' + date;
let section1 = document.getElementById('section1')
section1.appendChild(timeP);
/*
const newTime() = {
	let time = document.getElementById('time');
	time.innerHTML = 'Today\s date is ' + date;
}
timeP.onclick = newTime;
*/
