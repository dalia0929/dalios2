
var skaiciai = [865, 568, 4752, 665, 2347, 889, -587, 12, 556, 789, 9999];

var didziausias = 0;
var maziausias = 0;

for(var index = 0; index < skaiciai.length; index += 1)
{
	if(skaiciai[index] > skaiciai[didziausias])
	{
		didziausias = index;

	}
	if(skaiciai[index] < skaiciai[maziausias])
	{
		maziausias = index;
	}	

}
console.log(skaiciai[didziausias]);
console.log(skaiciai[maziausias]);