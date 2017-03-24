/*var skaiciai = [1, 5, 5, 8, 9]
for(var i = 0; i < skaiciai.length; i++)
{
	var skaicius = skaiciai[i];
	console.log(skaicius);
}*/

/*ARBA*/

/*var i = 0;
while(i < skaiciai.length)
{
	var skaicius = skaiciai[i];
	console.log(skaicius);
	i +=1;
}*/


/*
var skaicius = false;
while(skaicius == false)
{
	var ivestasskaicius = prompt("iveskite skaiciu");
	if(isNaN(ivestasskaicius) == false)
	{
		skaicius = true;
		document.write(ivestasskaicius);
	}
}*/


document.write('<table cellspacing="0">');
var ilgis = prompt('iveskite lenteles ilgi');
var plotis = prompt('iveskite lenteles ploti');

for(var i=0; i < ilgis; i+=1)
{
	document.write('<tr>');

	for(var j=0; j< plotis; j+=1)
	{


	if((i+1) == (j+1))
	{
	document.write('<td class="color">');
	document.write((i+1) * (j+1));
	document.write('</td>');
	}

	else if(((i+1) * (j+1)) % 3 == 0)
	{
	document.write('<td class="color2">');
	document.write((i+1) * (j+1));
	document.write('</td>');
	}

	else
	{
	document.write('<td>');
	document.write((i+1) * (j+1));
	document.write('</td>');
	}


	}	
	
	document.write('</tr>');	
}
document.write('</table>');