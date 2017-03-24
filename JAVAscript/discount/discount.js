
// //1.Iveda suma be PVM
// var amount = prompt('iveskite suma be PVM');
// var allow = true;

// if(isNaN(amount))
// { 
// 	alert = alert('iveskite skaiciu');
// 	allow = false;

// }


// /*if(allow == true)*/
// if(allow)
// {
// // keiciam stringa i skaiciu;
// 	amount = parseFloat(amount);

// //2. Ar bus nuolaida?
// 	var discount = prompt('ar nori nuolaidos? (taip/ne)');
// /*	if(discount == 'taip' || discount == 'Taip');*/
// 	if(discount.toLowerCase() == 'taip')
// 	{
// // 2.1. Ivedam nuolaida procentais
// 		var discount_amount = prompt('iveskite nuolaida procentais');
// // keiciam stringa i skaiciu;	
// 		discount_amount = parseInt(discount_amount);
// 		amount = amount * (100 - discount_amount) / 100;
// 	}
// // 3. suskaiciuojam suma su PVM
// 	amount = amount * 1.21;

// // 4. Isvedam rezultata
// 	alert('suma su PVM ' + amount);

// }
// else
// {
// 	window.location.reload();
// }


//1.Iveda suma be PVM
var amount1 = prompt('iveskite suma be PVM');
var allow = true;
var amount2 = 0;

if(isNaN(amount1))
{ 
	alert = alert('iveskite skaiciu');
	allow = false;

}


/*if(allow == true)*/
if(allow)
{
// keiciam stringa i skaiciu;
	amount1 = parseFloat(amount1);

//2. Ar bus nuolaida?
	var discount = prompt('ar nori nuolaidos? (taip/ne)');
/*	if(discount == 'taip' || discount == 'Taip');*/
	if(discount.toLowerCase() == 'taip')
{
// 2.1. Ivedam nuolaida procentais
		var discount_amount = prompt('iveskite nuolaida procentais');
// keiciam stringa i skaiciu;	
		discount_amount = parseInt(discount_amount);
		amount2 = amount1 * (100 - discount_amount) / 100;
	}
	else{
	amount2 = amount1;
	}
// 3. suskaiciuojam suma su PVM
	var total = amount2 * 1.21;

// 4. Isvedam rezultata
if(discount.toLowerCase() == 'taip')
{
	alert('pradine suma ' + amount1 + '\n' + 'Taikyta nuolaida ' + discount_amount + ' %' + '\n' + 'suma be PVM ' + amount2 + '\n' + 'suma su PVM ' + total.toFixed(2));
}
else
{
	alert('pradine suma ' + amount1 + '\n' + 'Nuolaida netaikoma ' + '\n' + 'suma be PVM ' + amount2 + '\n' + 'suma su PVM ' + total.toFixed(2));
}
}
else
{
	window.location.reload();
}

