var produktai = [];

produktai.push({
	pavadinimas: 'BMV',
	kaina: 10
});
produktai.push({
	pavadinimas: 'mersas',
	kaina: 20
});
produktai.push({
	pavadinimas: 'zapas',
	kaina: 100
});
produktai.push({
	pavadinimas: 'VW',
	kaina: 50
});
produktai.push({
	pavadinimas: 'ford',
	kaina: 15
});

console.log(produktai);

var krepselis = [];

function prideti(pavadinimas) {
	for(var i = 0; i < produktai.length; i++){
		var produktas = produktai[i];
		if(pavadinimas == produktas.pavadinimas){
			krepselis.push(produktas);
		}
	}
}
function isimti(pavadinimas){
	for(var i = 0; i < krepselis.length; i++){
		var produktas = krepselis[i];
		if(pavadinimas == produktas.pavadinimas){
			krepselis.splice(i, 1);
		}
	}
}	
function kiek(){

	console.log(krepselis.length);
}

function valyti(){
	krepselis.splice(0, krepselis.length)
}