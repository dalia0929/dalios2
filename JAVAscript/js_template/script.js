
// var week=['sekmadienis', 'pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis', 'penktadienis', 'sestadienis']
// week.sort();
// console.log(week.sort());
// console.log(week[2]);
// console.log(week[0]);

// var today = new Date();
// var day = today.getDay() - 1;
// // console.log(week.sort()[day]);
// alert(week.sort()[day]);

// var today = new Date();
// var day = today.getDay();
// console.log([day]);
// alert(week[day]);

// var today = new Date();
// var day = today.getDay()
// console.log(day);

// var car={
// 	color: 'white',
// 	persons: ['jonas', 'petras', 'antanas', 'karolis'],
// 	price: 8000,
// 	make: 'VW'
// }

// console.log (car.persons.length + car.persons.join(', '));
// alert('keleiviu skaicius: ' + car.persons.length + ',' + '\n' + 'spalva: ' + car.color + ',' + '\n' + 'kaina ' + car.price + ',' + '\n' + 'vezu tik: ' + car.persons.join(', ') + '.');


// var plane={
// 	plane.wings: 4,
// 	plane.engines: 3,
// }

// var airport=[];
// airport.push(airport);
// airport[0].engines;

// console.log (car.persons.length + car.persons.join(', '));
// alert('keleiviu skaicius: ' + car.persons.length + ',' + '\n' + 'spalva: ' + car.color + ',' + '\n' + 'kaina ' + car.price + ',' + '\n' + 'vezu tik: ' + car.persons.join(', ') + '.');

var skelbimai = [];

var mersas = {
	color: 'white',
	price: 2000,
}

var bemsas = {
	color: 'black',
	price: 1000,
}

skelbimai.push(mersas, bemsas);

alert ('auto kiekis ' + skelbimai.length + '\n' + 'paskutinio spalva - ' + skelbimai[skelbimai.length - 1].color);

//PVM skaiciavimas

// var VAT = 0.21;
// var price = parseFloat(prompt("iveskite kaina"));
// var priceVAT = price + price * VAT;
// alert('kaina su PVM ' + priceVAT + ' žiaurų'); 


// var VAT = 0.21;
// var price = parseFloat(prompt("iveskite kaina"));
// var MIN = 1;
// var priceVAT = price + (price - MIN) * VAT;
// alert('kaina su PVM ' + priceVAT + ' žiaurų'); 