'use strict';   // JavaScript strict mode

/***********************************************************************************/
/* ********************************* CAROUSEL DATA*****************************/
/***********************************************************************************/

//Keybord keys codes:
const KEY_SPACE = 32;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

var slides = [

	{url: 'images/1.jpg', title:"pirma"},
	{url: 'images/2.jpg', title:"antra"},
	{url: 'images/3.jpg', title:"trecia"},
	{url: 'images/4.jpg', title:"ketvirta"},
	{url: 'images/5.jpg', title:"penkta"},
	{url: 'images/6.jpg', title:"sesta"}

];

var state;


/***********************************************************************************/
/* ******************************** CAROUSEL METHODS****************************/
/***********************************************************************************/


function refreshSlide(){
	var sliderImg = document.querySelector('#slider img').src = slides[state.index].url,
		sliderCaption = document.querySelector('#slider figcaption').textContent = slides[state.index].title;
}


function goNav(){
	var icon = document.querySelector('#toolbar-toggle i');
	icon.classList.toggle('fa-arrow-right');
	icon.classList.toggle('fa-arrow-down');

	// if(icon.classList.contains('fa-arrow-right') == true){
	// 	icon.classList.remove('fa-arrow-right');
	// 	icon.classList.add('fa-arrow-down');
	// }
	// else{
	// 	icon.classList.remove('fa-arrow-down')
	// 	icon.classList.add('fa-arrow-right');
	// }
	document.querySelector('.nerodyk').classList.toggle('rodyk');
}


function goPrevious(){
	
	state.index = state.index - 1;
	if(state.index < 0){
		state.index = slides.length - 1;
	}
	// console.log('index:' + state.index);
	refreshSlide();
}


function goPlay(){
	var icon = document.querySelector('#slider-toggle i');
	icon.classList.toggle('fa-play');
	icon.classList.toggle('fa-pause');
	
	if(state.timer == false){
	state.timer = window.setInterval(goNext, 1000); //paleidzia - priskiriam 'true' reiksme.
	}
	else{
	window.clearInterval(state.timer); //sustabdo
	state.timer = false; //butina priskirti false reiksme, kad nuresetintume 'true' ()	
	}
}


function goNext(){
	// alert('index:' + state.index);
	state.index++;
	if(state.index == slides.length){
		state.index = 0;
	}
	refreshSlide();
}

function getRandomNumber(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function goRandom(){
	var random;

	do{
		random = getRandomNumber(0, slides.length - 1);

	}
	while(state.index == random);
	alert ('indeksas:' + state.index + 'random:' + random);
	state.index = random;



	refreshSlide();
}



function onKeyUp(event) {
	// console.log(event.keyCode);
	switch(event.keyCode){
		
		case KEY_LEFT:
		goPrevious();
		break;

		case KEY_RIGHT:
		goNext();
		break;

		case KEY_SPACE:
		goPlay();
		break;
	}
}


/***********************************************************************************/
/* ******************************** MAIN CODE *********************************/
/***********************************************************************************/

document.addEventListener('DOMContentLoaded', function(){

	state = new Object();
	state.index = 0;
	state.timer = false;

	document.querySelector('#toolbar-toggle').addEventListener('click', goNav);
	document.querySelector('#slider-previous').addEventListener('click',goPrevious);
	document.querySelector('#slider-toggle').addEventListener('click', goPlay);
	document.querySelector('#slider-next').addEventListener('click',goNext);
	document.querySelector('#slider-random').addEventListener('click', goRandom);

	document.addEventListener('keyup', onKeyUp);

	refreshSlide();

});


