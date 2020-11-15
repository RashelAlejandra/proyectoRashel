
document.onload = carga();

function carga(){
	
	
	document.getElementById('rif').maxLength = 11;
	
	document.getElementById('rif').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('rif').onfocus = function(){
	
		document.getElementById('srif').innerText = "Sólo números y letras";
	};
	
	
	document.getElementById('rif').onblur = function(){
		document.getElementById('srif').innerText = "";
	};
	
	
	document.getElementById('rif').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{10,11}$/;
		r = validarkeyup(er,this,document.getElementById('srif'),"Sólo números y letras");
	}
		
	document.getElementById('razon').maxLength = 30;
	
	document.getElementById('razon').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('razon').onfocus = function(){
	
		document.getElementById('srazon').innerText = "Sólo números, letras o (- _ . o #)";
	};
	
	
	document.getElementById('razon').onblur = function(){
		document.getElementById('srazon').innerText = "";
	};
	
	
	document.getElementById('razon').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{4,30}$/;
		r = validarkeyup(er,this,document.getElementById('srazon'),"Sólo números, letras o (- _ . o #)");
	}
	




	
document.getElementById('tlfprov').maxLength = 14;
	
	document.getElementById('tlfprov').onkeypress = function(e){
	
		er = /^[0-9]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('tlfprov').onfocus = function(){
	
		document.getElementById('stlfprov').innerText = "Sólo números";
	};
	
	
	document.getElementById('tlfprov').onblur = function(){
		document.getElementById('stlfprov').innerText = "";
	};
	
	
	document.getElementById('tlfprov').onkeyup = function(){
	
		er = /^[0-9]{11,14}$/;
		r = validarkeyup(er,this,document.getElementById('stlfprov'),"Sólo números");
	}




document.getElementById('corrpro').maxLength = 20;
	
	document.getElementById('corrpro').onkeypress = function(e){
	
		er = /^[a-zA-Z0-9.-_\u00f1\u00d1-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('corrpro').onfocus = function(){
	
		document.getElementById('scorrpro').innerText = "Sólo números, letras o (- _ . o #)";
	};
	
	
	document.getElementById('corrpro').onblur = function(){
		document.getElementById('scorrpro').innerText = "";
	};
	
	
	document.getElementById('corrpro').onkeyup = function(){
	
		er = /^[a-zA-Z0-9.-_\u00f1\u00d1-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}*$/;
		r = validarkeyup(er,this,document.getElementById('scorrpro'),"Sólo números, letras o (- _ . o #)");
	}


document.getElementById('dirpro').maxLength = 40;
	
	document.getElementById('dirpro').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('dirpro').onfocus = function(){
	
		document.getElementById('sdirpro').innerText = "Sólo números, letras o (- _ . o #)";
	};
	
	
	document.getElementById('dirpro').onblur = function(){
		document.getElementById('sdirpro').innerText = "";
	};
	
	
	document.getElementById('dirpro').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{5,40}$/;
		r = validarkeyup(er,this,document.getElementById('sdirpro'),"Sólo números, letras o (- _ . o #)");
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
			 datos.append('rif',$("#rif").val());
			 datos.append('razon',$("#razon").val());
			 datos.append('tlfprov',$("#tlfprov").val());
			 datos.append('corrpro',$("#corrpro").val());
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
	$("#rif").val('');
	$("#razon").val('');
	$("#tlfprov").val('');
	$("#corrpro").val('');
	$("#dirpro").val('');
	
}

function valida_datos(){ 
	var error = '';
	
	
	er = /^[0-9A-Za-z-_.#]{10,11}$/;
	r = validarkeyup(er,document.getElementById('rif'),document.getElementById('srif'),"Sólo números y letras");
	if(r==0){ 
	   error = "ERROR <br/><b>Ingreso de RIF </b><br/>El RIF sólo debe contener números y letras";   
	   return error;	
	}
	
	er = /^[0-9A-Za-z-_.#]{4,40}$/;
	r = validarkeyup(er,document.getElementById('razon'),document.getElementById('srazon'),"Sólo c");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de Razón Social</b> <br/>La razón social sólo debe contener números, letras o símbolos (- _ . o #) entre 4 y 10 caracteres";
	   return error;
	}


	er = /^[0-9A-Za-z-_.#]{5,20}$/;
	r = validarkeyup(er,document.getElementById('tlfprov'),document.getElementById('stlfprov'),"Sólo números");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de teléfono</b> <br/>El teléfono solo debe contener números";
	   return error;	
	}

	er = /^[a-zA-Z0-9.-_\u00f1\u00d1-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}$/;
	r = validarkeyup(er,document.getElementById('corrpro'),document.getElementById('scorrpro'),"Sólo números, letras o (- _ . o #). Ingrese un correo válido");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de correo</b> <br/>El correo sólo debe contener números, letras o símbolos (- _ . o #)";
	   return error;
	}
	
	
	
	er = /^[0-9A-Za-z-_.#]{5,40}$/;
	r = validarkeyup(er,document.getElementById('dirpro'),document.getElementById('sdirpro'),"Sólo números, letras o (- _ . o #)");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de dirección</b> <br/>La dirección debe contener números, letras o símbolos (- _ . o #) entre 5 y 10 caracteres";
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