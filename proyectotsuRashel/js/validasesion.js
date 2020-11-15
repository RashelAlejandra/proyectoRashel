
function validasesion(){

	var usuario = document.getElementById('rol');
	var nombre = document.getElementById('nombreu');
	var clave = document.getElementById('clave');


	if(nombre.value == '' || clave.value == ''){
		alert('Todos los campos son obligatorios');
		return false;
	}


	if (usuario.value == 'administrador') {

		 window.location.href="?pagina=bienvenidaAdm";
	}
	else if(usuario.value == 'empleado'){
		 window.location.href="?pagina=bienvenidaEmp"
	}

	else{
		alert('Por favor seleccione el rol de usuario');

	}
}