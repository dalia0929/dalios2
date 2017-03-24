
var allow = true;
var number1 = prompt('įveskite pirmą skaičių');
number1 = parseFloat(number1);

if(isNaN(number1))
{ 
	alert = alert('iveskite tik skaiciu');
	allow = false;
}

var number2 = prompt('įveskite antrą skaičių');
number2 = parseFloat(number2);

if(isNaN(number2))
{ 
	alert = alert('iveskite tik skaiciu');
	allow = false;
}


if(allow == true) 
{

	var calculate = prompt('kokį veiksmą atliksite? (+ - / *)');
	var total = 'nesamone';

	if(calculate == "+")
	{
		total = number1 + number2;

	}
	else if(calculate == "-")
	{
		total = number1 - number2;

	}
	else if(calculate == "/")
	{
		total = number1 / number2;

	}
	else if(calculate == "*")
	{
		total = number1 * number2;

	}

	else
	{
		alert('suklydote pasirinkdami veiksmą')
	}
	
	alert('atsakymas ' + total);
}
else
{
	window.location.reload();
}