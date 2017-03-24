 // var button = document.querySelector('#toggle-rectangle');
 var button = document.getElementById('toggle-rectangle');
 var rectangle = document.getElementsByClassName('rectangle')[0];

button.addEventListener('click', pelytespausk);


// esamai klasei pritaiko sukurta klase Css'e
function pelytespausk(){
	rectangle.classList.toggle('hide')
}

rectangle.addEventListener('mouseover', uzvesta);

// add - uzdeti klase, remove - nuimti klase classList - reiskia????
function uzvesta(){
 	rectangle.classList.add('important');
}

rectangle.addEventListener('mouseout', nuvesta);

function nuvesta(){
 	rectangle.classList.remove('important', 'good');
}

rectangle.addEventListener('dblclick', dvigubas);

function dvigubas(){
 	rectangle.classList.add('good');
}
