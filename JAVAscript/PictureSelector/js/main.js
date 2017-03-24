

/***********************************************************************************/
/* *********************************** DATA *************************************/
/***********************************************************************************/
// is photo-list isrenka li elementus
var list = document.getElementById('photo-list')
var items = list.getElementsByTagName('li');

var button = document.getElementById('add-new');
var input = document.getElementById('new');

/***********************************************************************************/
/* ********************************** FUNCTIONS ************************************/
/***********************************************************************************/
// "this" egzistuoja kiekvienam evente konkrecioje funcijoje. Konkreciam atvejui - li elementui.
function onMouseClick(){
 	this.classList.toggle('selected');
 	var selected = document.getElementsByClassName('selected'); //sukuriam pazymetu pic masyva
 	var total = document.getElementById('total');
 	total.innerHTML = selected.length;
}

function idek(event){
	event.preventDefault(); // kad mygtukas nedarytu neprognozuojamu veiksmu (geriau deti visada)
	var url = input.value;
	var el = '<li><img src="'+ url + '"></li>';
	list.innerHTML = list.innerHTML + el;
	refreshlist();
}
function refreshlist(){
	for(var i =0; i < items.length; i++){
	items[i].addEventListener('click', onMouseClick);
}
}
/************************************************************************************/
/* ******************************** MAIN CODE **********************************/
/************************************************************************************/
refreshlist();

button.addEventListener('click', idek);
