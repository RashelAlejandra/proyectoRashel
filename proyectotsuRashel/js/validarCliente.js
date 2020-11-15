
document.onload = carga();

function carga(){
		
	document.getElementById('nomcliente').maxLength = 20;
	
	document.getElementById('nomcliente').onkeypress = function(e){
	
		er = /^[A-Za-z]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('nomcliente').onfocus = function(){
	
		document.getElementById('snomcliente').innerText = "Sólo letras";
	};
	
	
	document.getElementById('nomcliente').onblur = function(){
		document.getElementById('snomcliente').innerText = "";
	};
	
	
	document.getElementById('nomcliente').onkeyup = function(){
	
		er = /^[A-Za-z]{5,20}$/;
		r = validarkeyup(er,this,document.getElementById('snomcliente'),"Sólo letras");
	}

	document.getElementById('apecliente').maxLength = 20;
	
	document.getElementById('apecliente').onkeypress = function(e){
	
		er = /^[A-Za-z]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('apecliente').onfocus = function(){
	
		document.getElementById('sapecliente').innerText = "Sólo letras";
	};
	
	
	document.getElementById('apecliente').onblur = function(){
		document.getElementById('sapecliente').innerText = "";
	};
	
	
	document.getElementById('apecliente').onkeyup = function(){
	
		er = /^[A-Za-z]{5,20}$/;
		r = validarkeyup(er,this,document.getElementById('sapecliente'),"Sólo letras");
	}
	




	
document.getElementById('cedcliente').maxLength = 9;
	
	document.getElementById('cedcliente').onkeypress = function(e){
	
		er = /^[0-9A]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('cedcliente').onfocus = function(){
	
		document.getElementById('scedcliente').innerText = "Sólo números";
	};
	
	
	document.getElementById('cedcliente').onblur = function(){
		document.getElementById('scedcliente').innerText = "";
	};
	
	
	document.getElementById('cedcliente').onkeyup = function(){
	
		er = /^[0-9]{7,9}$/;
		r = validarkeyup(er,this,document.getElementById('scedcliente'),"Sólo números");
	}




document.getElementById('tlfcliente').maxLength = 14;
	
	document.getElementById('tlfcliente').onkeypress = function(e){
	
		er = /^[0-9]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('tlfcliente').onfocus = function(){
	
		document.getElementById('stlfcliente').innerText = "Sólo números";
	};
	
	
	document.getElementById('tlfcliente').onblur = function(){
		document.getElementById('stlfcliente').innerText = "";
	};
	
	
	document.getElementById('tlfcliente').onkeyup = function(){
	
		er = /^[0-9]{11,14}$/;
		r = validarkeyup(er,this,document.getElementById('stlfcliente'),"Sólo números");
	}


document.getElementById('corcliente').maxLength = 40;
	
	document.getElementById('corcliente').onkeypress = function(e){
	
		er = /^[a-zA-Z0-9.-_\u00f1\u00d1-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('corcliente').onfocus = function(){
	
		document.getElementById('scorcliente').innerText = "Sólo números, letras o (- _ . o #)";
	};
	
	
	document.getElementById('corcliente').onblur = function(){
		document.getElementById('scorcliente').innerText = "";
	};
	
	
	document.getElementById('corcliente').onkeyup = function(){
	
		er = /^[a-zA-Z0-9.-_\u00f1\u00d1-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}*$/;
		r = validarkeyup(er,this,document.getElementById('scorcliente'),"Sólo números, letras o (- _ . o #)");
	}
	


document.getElementById('registrar').onclick = function(){
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
			 datos.append('accion','registrar');
			 datos.append('nomcliente',$("#nomcliente").val());
			 datos.append('apecliente',$("#apecliente").val());
			 datos.append('cedcliente',$("#cedcliente").val());
			 datos.append('tlfcliente',$("#tlfcliente").val());
			 enviaAjax(datos);
			 limpia();
		}
	
}		

		
function enviaAjax(datos){
	
	$.ajax({
		    async: true,
            url: '', 
            type: 'POST',
			contentType: false,
            data: datos,
			processData: false,
	        cache: false,
            success: function(respuesta) {
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


		
	
	
}





function limpia(){
	$("#nomcliente").val('');
	$("#apecliente").val('');
	$("#cedcliente").val('');
	$("#tlfcliente").val('');
	$("#corcliente").val('');
	
}

function valida_datos(){ 
	var error = '';
	
	
	er = /^[A-Za-z]{5,20}$/;
	r = validarkeyup(er,document.getElementById('nomcliente'),document.getElementById('snomcliente'),"Sólo letras");
	if(r==0){ 
	   error = "ERROR <br/><b>Ingreso de nombre </b><br/>El nombre sólo debe letras entre 5 y 20 caracteres";   
	   return error;	
	}
	
	er = /^[A-Za-z]{5,20}$/;
	r = validarkeyup(er,document.getElementById('apecliente'),document.getElementById('sapecliente'),"Sólo letras");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de apellido</b> <br/>EL apellido sólo debe contener letras entre 5 y 10 caracteres";
	   return error;
	}


	er = /^[0-9]{7,9}$/;
	r = validarkeyup(er,document.getElementById('cedcliente'),document.getElementById('scedcliente'),"Sólo números");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de cédula</b> <br/>La cédula solo debe contener números entre 7 y 9 caracteres";
	   return error;	
	}

	er = /^[0-9]{11,14}$/;
	r = validarkeyup(er,document.getElementById('tlfcliente'),document.getElementById('stlfcliente'),"Sólo números");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de teléfono</b> <br/>El teléfono sólo debe contener números";
	   return error;
	}
	
	
	
	er = /^[a-zA-Z0-9.-_\u00f1\u00d1-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}$/;
	r = validarkeyup(er,document.getElementById('corcliente'),document.getElementById('scorcliente'),"Sólo números, letras o (- _ . o #)");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de correo</b> <br/>EL correo debe contener números, letras o símbolos (- _ . o #). Ingresar correo válido";
	   return error;	
	}





	
	
	
	return error;
}


function validarkeypress(er,e){
	
	key = e.keyCode || e.which;
	
	
    tecla = String.fromCharCode(key);
	
	
    a = er.test(tecla);
	
    if(!a){
		
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