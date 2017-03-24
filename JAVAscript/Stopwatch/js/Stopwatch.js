'use strict';

/*************************************
	Variables init
**************************************/
var state;

var clock = {
	'time':{
		minutes:0,
		seconds:0,
		miliseconds:0
	}
}

/*************************************
		Main method
**************************************/
function reset(){//nuresetiname
	clock.time.minutes = 0;
	clock.time.seconds = 0;
	clock.time.miliseconds = 0;

	document.querySelector('#clock .miliseconds').style.transform = "rotate(0deg)";
	document.querySelector('#clock .seconds').style.transform = "rotate(0deg)";
	document.querySelector('#clock .minute').style.transform = "rotate(0deg)";
}

function goClock(){ 
	if(this.id == 'start'){//jei chronometras nepaleistas, ji paleisime
		state = window.setInterval(doChrono, 10); //funkcija 'doChrono' vykdoma kas 10 milisecundziu
		this.id = 'pause';
		this.textContent = 'STOP';
	}
	else{//jei paleistas - sustabdysime, bet nenuresetinsime
		window.clearInterval(state);
		this.id = 'start';
		this.textContent = 'START';
	}
}

function doChrono(){//rodykliu sukimo funcija
	var time = clock.time;

	time.miliseconds++;

		if(time.miliseconds>99){
			time.miliseconds = 0;
			time.seconds++;
		}

		if(time.seconds>59){
			time.seconds = 0;
			time.minutes++;
		}
	document.querySelector('#clock .miliseconds').style.transform = 'rotate(' + generateDegrees(time.miliseconds, 100) +'deg)';
	document.querySelector('#clock .seconds').style.transform = 'rotate(' + generateDegrees(time.seconds, 60) +'deg)';
	document.querySelector('#clock .minute').style.transform = 'rotate(' + generateDegrees(time.minutes, 60) +'deg)';

console.log('milisecundes' + time.miliseconds + 'secundes' + time.seconds);
}




/*************************************
			Boot
**************************************/
document.addEventListener('DOMContentLoaded', function(){

	// state = new Object();
	// state.index = 0;
	// state.timer = false;

	document.querySelector('#reset').addEventListener('click', reset);
	document.querySelector('#start').addEventListener('click',goClock);


	// document.addEventListener('keyup', onKeyUp);

	// refreshSlide();

});
