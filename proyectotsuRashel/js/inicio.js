
document.onload = carga();

function carga(){
	
	

document.getElementById('nombreu').maxLength = 10;
	
	document.getElementById('nombreu').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('nombreu').onfocus = function(){
	
		document.getElementById('snombreu').innerText = "El nombre no debe exceder 10 caracteres";
	};
	
	
	document.getElementById('nombreu').onblur = function(){
		document.getElementById('snombreu').innerText = "";
	};
	
	
	document.getElementById('nombreu').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{4,10}$/;
		r = validarkeyup(er,this,document.getElementById('snombreu'),"El nombre no debe exceder 10 caracteres");
	}


	

document.getElementById('clave').maxLength = 10;
	
	document.getElementById('clave').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('clave').onfocus = function(){
	
		document.getElementById('sclave').innerText = "La clave no debe exceder 10 caracteres";
	};
	
	
	document.getElementById('clave').onblur = function(){
		document.getElementById('sclave').innerText = "";
	};
	
	
	document.getElementById('clave').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{6,10}$/;
		r = validarkeyup(er,this,document.getElementById('sclave'),"La clave no debe exceder 10 caracteres");
	}
	


	


document.getElementById('ingresr').onclick = function(){
		a = valida_datos(); 
		if(a!=''){
			$("#contenidodemodal").html(a);
			$("#mostrarmodal").modal("show");
			setTimeout(function() {
					$("#mostrarmodal").modal("hide");
			},4000);
		}
		else{
			 var datos = new FormData();
			 datos.append('accion','inresar');
			 datos.append('nombreu',$("#nombreu").val());
			 datos.append('clave',$("#clave").val());
			 enviaAjax(datos);
			 limpia();
		}
	
}		

document.getElementById('modificar').onclick = function(){
		a = valida_datos(); 
		if(a!=''){
			$("#contenidodemodal").html(a);
			$("#mostrarmodal").modal("show");
			setTimeout(function() {
					$("#mostrarmodal").modal("hide");
			},4000);
		}
		else{
			 var datos = new FormData();
			 datos.append('accion','incluir');
			 datos.append('nombreu',$("#nombreu").val());
			 datos.append('clave',$("#nombre").val());
			 datos.append('apellido',$("#apellido").val());
			 datos.append('telefono',$("#telefono").val());
			 datos.append('correo',$("#correo").val());
			 enviaAjax(datos);
			 limpia();
		}
	
}		

document.getElementById('eliminar').onclick = function(){
	        
	er = /^[0-9]{7,8}$/;;
	r = validarkeyup(er,document.getElementById('nombreu'),document.getElementById('snombreu'),"Sólo ingresar números");
	if(r==0){ 
	    $("#contenidodemodal").html("ERROR <br/>La Cédula debe contener <br/>Sólo números entre 7 y 8 carácteres");
			   $("#mostrarmodal").modal("show");
				setTimeout(function() {
					$("#mostrarmodal").modal("hide");
	    },4000);
	}
	else{
		var datos = new FormData();
			 datos.append('accion','registrar');
			 datos.append('nombreu',$("#nombreu").val());
			 datos.append('nombre',$("#nombre").val());
			 datos.append('apellido',$("#apellido").val());
			 datos.append('telefono',$("#telefono").val());
			 datos.append('correo',$("#correo").val());
			 enviaAjax(datos);
			 limpia();
	}
	     	   
			
		
	
}


function enviaAjax(datos){
	
	$.ajax({
		    async: true,
            url: '', //la pagina a donde se envia por estar en mvc, se omite la ruta ya que siempre estaremos en la misma pagina
            type: 'POST',//tipo de envio 
			contentType: false,
            data: datos,
			processData: false,
	        cache: false,
            success: function(respuesta) {//si resulto exitosa la transmision
			   $("#contenidodemodal").html(respuesta);
			   $("#mostrarmodal").modal("show");
				setTimeout(function() {
					$("#mostrarmodal").modal("hide");
				},4000);
            },
            error: function(){
               $("#contenidodemodal").html('Error con ajax');
			   $("#mostrarmodal").modal("show");
				setTimeout(function() {
					$("#mostrarmodal").modal("hide");
				},4000);
            }
			
    }); 
    }	
	



//Lo nuevo el evento click para controlar el boton consultar
//que ahora si trae información de la base de datos
document.getElementById('consultar').onclick = function(){
	
	var datos = new FormData();
	datos.append('accion','consultar');
	consultaAjax(datos);
}	
	
	
}





function limpia(){
	$("#codigo").val('');
	$("#nombreu").val('');
}

function valida_datos(){ 
	var error = '';
	
	
	
	

	er = /^[0-9A-Za-z-_.#]{4,10}$/;;
	r = validarkeyup(er,document.getElementById('nombreu'),document.getElementById('snombreu'),"El nombre no debe exceder 10 caracteres");
	if(r==0){
	     error = "ERROR <br/><b>Ingreso de cédula</b><br/> La cédula sólo debe contener números"; 
	   return error;	
	}

	er = /^[0-9A-Za-z-_.#]{5,10}$/;
	r = validarkeyup(er,document.getElementById('clave'),document.getElementById('sclave'),"La clave no debe exceder 10 caracteres");
	if(r==0){ 
	   error = "ERROR <br/><b>Ingreso de código </b><br/>El código sólo debe contener números, letras o símbolos entre 5 y 10 caracteres";   
	   return error;	
	}
	
	
	return error;
}


function validarkeypress(er,e){
	//key obtiene el clave ascii
	//del evento recuerde que
	key = e.keyCode || e.which;
	
	//luego se transforma el codigo ascii
	//en un caracter
    tecla = String.fromCharCode(key);
	
	//se procede a comparar con
	//la expresion regular usando la funcion test
    a = er.test(tecla);
	
    if(!a){
		//si no coincide, se elimna la
		//pulsacion del teclado usando
		//prevent default
		e.preventDefault();
    }
	
    
}

function validarkeyup(er,etiqueta,etiquetamensaje,
mensaje){
	a = er.test(etiqueta.value);
	if(a){
		etiquetamensaje.innerText = "";
		return 1;
	}
	else{
		etiquetamensaje.innerText = mensaje;
		return 0;
	}
}