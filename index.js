function mostrar(caja) {
	var menu = document.getElementById(caja)
	menu.style.display='block'
}

function ocultar(caja) {
	var menu = document.getElementById(caja)
	menu.style.display='none'
}



function submit() {
	var emails = ['@gmail','@yahoo','@hotmail','@elearning-total.com']
	var my_email = document.getElementById('get_email').value
	console.log(my_email)

	var check = emails.some(function(email) {
		return my_email.includes(email)
	})

	if(check == false) {
		alert('Invalid Email')
	} 
	else {
		alert('Submitted')
	}
} // llave submit
