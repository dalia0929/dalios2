var reiksme = prompt('pasirinkite: "popierius", "zirkles" ar "akmuo"');
reiksme = reiksme.toLowerCase();
var compas = Math.random();
if(compas <= 0.33)
{
	var compas = 'popierius';

}
else if(compas <= 0.66)
{
	var compas = 'zirklės';
}
else
{
	var compas = 'akmuo';
}

alert('kompas pasirinko ' + compas)

if(reiksme == compas)
	{
		alert('lygiosios');
	}
else
{
	if(reiksme == 'popierius' && compas == 'zirkles')
	{
		alert('kompas laimejo');
	}
	else if(reiksme == 'popierius' && compas == 'akmuo')
	{
		alert('tu laimejai');
	}
	else if(reiksme == 'zirkles' && compas == 'akmuo')
	{
		alert('kompas laimejo');
	}
	else if(reiksme == 'zirkles' && compas == 'popierius')
	{
		alert('tu laimejai');
	}
	else if(reiksme == 'akmuo' && compas == 'popierius')
	{
		alert('kompas laimejo');
	}
	else if(reiksme == 'akmuo' && compas == 'zirkles')
	{
		alert('tu laimejai');
	}
}
window.location.reload();

