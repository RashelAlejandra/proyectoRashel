
document.onload = carga();

function carga(){
	
	
	document.getElementById('cedusuario').maxLength = 9;
	
	document.getElementById('cedusuario').onkeypress = function(e){
	
		er = /^[0-9A]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('cedusuario').onfocus = function(){
	
		document.getElementById('scedusuario').innerText = "Sólo números";
	};
	
	
	document.getElementById('cedusuario').onblur = function(){
		document.getElementById('scedusuario').innerText = "";
	};
	
	
	document.getElementById('cedusuario').onkeyup = function(){
	
		er = /^[0-9]{7,9}$/;
		r = validarkeyup(er,this,document.getElementById('scedusuario'),"Sólo números");
	}
	

	document.getElementById('nomusuario').maxLength = 10;
	
	document.getElementById('nomusuario').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('nomusuario').onfocus = function(){
	
		document.getElementById('snomusuario').innerText = "Sólo números, letras o (- _ . o #)";
	};
	
	
	document.getElementById('nomusuario').onblur = function(){
		document.getElementById('snomusuario').innerText = "";
	};
	
	
	document.getElementById('nomusuario').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{4,10}$/;
		r = validarkeyup(er,this,document.getElementById('snomusuario'),"Sólo números, letras o (- _ . o #)");
	}
	




	
document.getElementById('nomreal').maxLength = 20;
	
	document.getElementById('nomreal').onkeypress = function(e){
	
		er = /^[A-Za-z]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('nomreal').onfocus = function(){
	
		document.getElementById('snomreal').innerText = "Sólo letras";
	};
	
	
	document.getElementById('nomreal').onblur = function(){
		document.getElementById('snomreal').innerText = "";
	};
	
	
	document.getElementById('nomreal').onkeyup = function(){
	
		er = /^[A-Za-z]{5,20}$/;
		r = validarkeyup(er,this,document.getElementById('snomreal'),"Sólo letras");
	}




document.getElementById('apellido').maxLength = 20;
	
	document.getElementById('apellido').onkeypress = function(e){
	
		er = /^[A-Za-z]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('apellido').onfocus = function(){
	
		document.getElementById('sapellido').innerText = "Sólo letras";
	};
	
	
	document.getElementById('apellido').onblur = function(){
		document.getElementById('sapellido').innerText = "";
	};
	
	
	document.getElementById('apellido').onkeyup = function(){
	
		er = /^[A-Za-z]{4,20}$/;
		r = validarkeyup(er,this,document.getElementById('sapellido'),"Sólo letras");
	}


document.getElementById('clave').maxLength = 10;
	
	document.getElementById('clave').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('clave').onfocus = function(){
	
		document.getElementById('sclave').innerText = "Sólo números, letras o (- _ . o #)";
	};
	
	
	document.getElementById('clave').onblur = function(){
		document.getElementById('sclave').innerText = "";
	};
	
	
	document.getElementById('clave').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{7,10}$/;
		r = validarkeyup(er,this,document.getElementById('sclave'),"Sólo números, letras o (- _ . o #)");
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
			 datos.append('cedusuario',$("#cedusuario").val());
			 datos.append('nomusuario',$("#nomusuario").val());
			 datos.append('nomreal',$("#nomreal").val());
			 datos.append('apellido',$("#apellido").val());
			 datos.append('clave',$("#clave").val());
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
	$("#cedusuario").val('');
	$("#nomusuario").val('');
	$("#nomreal").val('');
	$("#apellido").val('');
	$("#clave").val('');
	
}

function valida_datos(){ 
	var error = '';
	
	
	er = /^[0-9]{7,9}$/;
	r = validarkeyup(er,document.getElementById('cedusuario'),document.getElementById('scedusuario'),"Sólo números");
	if(r==0){ 
	   error = "ERROR <br/><b>Ingreso de cédula </b><br/>La cédula sólo debe contener números entre 7 y 9 caracteres";   
	   return error;	
	}
	
	er = /^[0-9A-Za-z-_.#]{4,10}$/;
	r = validarkeyup(er,document.getElementById('nomusuario'),document.getElementById('snomusuario'),"Sólo números, letras o (- _ . o #)");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de nombre de usuario</b> <br/>El nombre de usuario sólo debe contener números, letras o símbolos (- _ . o #) entre 4 y 10 caracteres";
	   return error;
	}


	er = /^[A-Za-z]{5,20}$/;
	r = validarkeyup(er,document.getElementById('nomreal'),document.getElementById('snomreal'),"Sólo letras");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de nombre</b> <br/>El nombre solo debe contener letras entre 5 y 20 caracteres";
	   return error;	
	}

	er = /^[0-9A-Za-z-_.#]{4,40}$/;
	r = validarkeyup(er,document.getElementById('apellido'),document.getElementById('sapellido'),"Sólo letras");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de apellido</b> <br/>El apellido sólo debe contener letras entre 4 y 20 caracteres";
	   return error;
	}
	
	
	
	er = /^[0-9A-Za-z-_.#]{7,10}$/;
	r = validarkeyup(er,document.getElementById('clave'),document.getElementById('sclave'),"Sólo números, letras o (- _ . o #)");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de clave</b> <br/>La clave debe contener números, letras o símbolos (- _ . o #) entre 7 y 10 caracteres";
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