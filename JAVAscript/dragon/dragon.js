var drakonoHp;
var slayerioHp = 200;

var lygis;
var ginklas;
var sarvai;
var drakonoZaizda;
var apsauga;



function teisingasSkaicius(tekstas){
	var txt;
	while(txt != '1' && txt != '2' && txt != '3'){
	txt = prompt(tekstas);
}
	return txt
}

	lygis = teisingasSkaicius('Pasirinkite zaidimo lygi: easy - 1, hard - 2, veteran - 3');
	ginklas = teisingasSkaicius('Pasirinkite ginkla: lazda - 1, kardas - 2, patranka - 3');
	sarvai = teisingasSkaicius('Pasirinkite sarvus: kilpiniai - 1, variniai - 2, platininiai - 3');


	console.log('lygis' + lygis);
	lygis = parseFloat(lygis);
	if(lygis = 1){
		drakonoHp = 200;
	}
	if(lygis = 2){
		drakonoHp = 250;
	}
	if(lygis = 3){
		drakonoHp = 300
	}




	console.log('ginklas' + ginklas);
	ginklas = parseFloat(ginklas);
	if(ginklas = 1){
		drakonoZaizda = 1;
	}
	if(ginklas = 2){
		drakonoZaizda = 15;
	}
	if(ginklas = 3){
		drakonoZaizda = 20;
	}



	console.log('sarvai' + sarvai);
	sarvai = parseFloat(sarvai);
	if(sarvai = 1){
		apsauga = 1;
	}
	if(sarvai = 2){
		apsauga = 5;
	}
	if(sarvai = 3){
		apsauga = 10;
	}




function getRandomInteger(min, max)
{
	var rnd = Math.random();
	var size = (max - min +1);
	return Math.floor(rnd * size) + min;
}

function zalaDrakonui(){
	var zala = getRandomInteger(50,100);
	drakonoHp = drakonoHp - zala - drakonoZaizda;

}

function zalaSlayeriui() {
	var zala = getRandomInteger(50,100);
	var zala2 = zala / apsauga;
	slayerioHp = slayerioHp - (zala - zala2);

}

function raundas(){
	var drakonoSekmesRodiklis = getRandomInteger(10, 20);
	var slayerioSekmesRodiklis = getRandomInteger(12, 20);
	if(drakonoSekmesRodiklis > slayerioSekmesRodiklis){
		zalaSlayeriui();
	} 
	else{
		zalaDrakonui();
	}
}

function pabaiga(){
	if(drakonoHp <= 0){
		console.log("tu laimejai")
		document.write("tu laimejai")
	}
	else{
		console.log("drakonas laimejo")
		document.write("drakonas laimejo")
	}
}

 while (drakonoHp > 0 && slayerioHp > 0){
 	raundas()
 	console.log("slayerio Hp" + slayerioHp + "," + "drakono Hp" + drakonoHp);
 }
 	pabaiga()
 


	// for (var i=0; i<drakonoHp; i++){
	// raundas();}
	// else {console.log("slayerio Hp" + slayerioHp + "," + "drakono Hp" + drakonoHp);}

// function arbaigta(){

// }




// function suma(x,y){
// 	return x+y;
// }
// function laipsnis(pagrindas,laipsnis){
// 	var rezultatas = 1;
// 	for (var i = 0; 1 < laipsnis; i++){
// 	laipsnioRezultatas = laipsnioRezultatas * x;
// 	}
// 	return rezultatas;
// }

// function lygtis (x, y){
// 	var pirmasNarys = suma (x, y);
// 	var pirmasNarysKubu = laipsnis(pirmasNarys, 3);
// 	var antrasNarys = laipsnis(x, y);
// 	var lygtiesRezultatas = pirmasNarysKubu + antrasNarys;
// 	return rezultatas;
// }


// function getRandomInteger(min, max)
// {
// 	var rnd = Math.random();
// 	var size = (max - min +1);
// 	return Math.floor(rnd * size) + min;
// /*	return
// 	Math.floor(Math.random() *(max - min + 1)) + min;*/
// }


// function suma(x,y){
// 	return x+y;
// }
// function laipsnis(pagrindas,laipsnis){
// 	var rezultatas = 1;
// 	for (var i = 0; 1 < laipsnis; i++){
// 	laipsnioRezultatas = laipsnioRezultatas * x;
// 	}
// 	return laipsnioRezultatas;
// }

// function lygtis (x, y, z){
// 	var laipsnioDydis = suma (y, z);
// 	var pirmasNarys = laipsnis(x, laipsnioDydis);
// 	var antrasNarys = sandauga(x, y);
// 	var lygtiesRezultatas = pirmasNarysKubu + antrasNarys;

// 	return lygtiesRezultatas;
// }


// function getRandomInteger(min, max)
// {
// 	var rnd = Math.random();
// 	var size = (max - min +1);
// 	return Math.floor(rnd * size) + min;
// /*	return
// 	Math.floor(Math.random() *(max - min + 1)) + min;*/
// }
