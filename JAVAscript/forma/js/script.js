
function validateForm (event){

	event.preventDefault(); // sustabdome psl. refreshinima

	var fieldsToValidate = document.querySelectorAll('.form-signin [data-validate="yes"]'),
		index;
	// console.log(fieldsToValidate);

	for(index = 0; index < fieldsToValidate.length; index++){
		var input = fieldsToValidate[index];
			required = input.dataset.required;
			
			if(required == 'yes'){
				validateRequiredField(input);
			}
		
		console.log(input.id + required);

	}
}

function resetForm(event){

	event.preventDefault();

	var formGroup = document.querySelectorAll('.form-group'),
	error = document.querySelectorAll('.form-group p-error'),
	index;

	for(index = 0; index < formGroup.length; index++){
		formGroup[index].classList.remove('has-error');
	}

	for(index = 0; index < error.length; index++){
		error[index].remove(); // <p> su klase error pasalina is HTML'o
	}
	


}

function preventDefault


function validateRequiredField(input){

	resetForm();

	// var value = document.querySelector('#username').value; //paimam atributa 'value'

	if(input.value == "" || input.value == 'false'){
		input.parentElement.classList.add('has-error');

	var pElement = document.createElement('p');
	pElement.classList.add('error');
	pElement.innerHTML = 'klaida';
	input.parentElement.append(pElement); //prideda p taga HTMLe po apacia. (prepend - virsuje)
	}
}

document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#submit').addEventListener('click', validateForm);
	document.querySelector('#reset').addEventListener('click', resetForm);
 	
 	validateForm(event);
});  