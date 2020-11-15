
document.onload = carga();

function carga(){


	document.getElementById('cedcliente').maxLength = 8;
	
	document.getElementById('cedcliente').onkeypress = function(e){
	
		er = /^[0-9]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('cedcliente').onfocus = function(){
	
		document.getElementById('cedcliente').innerText = "Sólo ingresar números";
	};
	
	
	document.getElementById('cedcliente').onblur = function(){
		document.getElementById('scedcliente').innerText = "";
	};
	
	
	document.getElementById('cedcliente').onkeyup = function(){
	
		er = /^[0-9]{1,7}$/;
		r = validarkeyup(er,this,document.getElementById('scedcliente'),"Sólo ingresar números");
	}

	
	
	document.getElementById('codigo').maxLength = 10;
	
	document.getElementById('codigo').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('codigo').onfocus = function(){
	
		document.getElementById('scodigo').innerText = "Ingresar números, letras o símbolos";
	};
	
	
	document.getElementById('codigo').onblur = function(){
		document.getElementById('scodigo').innerText = "";
	};
	
	
	document.getElementById('codigo').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{5,10}$/;
		r = validarkeyup(er,this,document.getElementById('scodigo'),"Ingresar números, letras o símbolos");
	}
	


document.getElementById('cantidad').maxLength = 7;
	
	document.getElementById('cantidad').onkeypress = function(e){
	
		er = /^[0-9]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('cantidad').onfocus = function(){
	
		document.getElementById('scantidad').innerText = "Sólo ingresar números";
	};
	
	
	document.getElementById('cantidad').onblur = function(){
		document.getElementById('scantidad').innerText = "";
	};
	
	
	document.getElementById('cantidad').onkeyup = function(){
	
		er = /^[0-9]{1,7}$/;
		r = validarkeyup(er,this,document.getElementById('scantidad'),"Sólo ingresar números");
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
			 datos.append('cedcliente',$("#cedcliente").val());
			 datos.append('codigo',$("#codigo").val());
			 datos.append('cantidad',$("#cantidad").val());
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
	$("#codigo").val('');
	$("#cantidad").val('');
}

function valida_datos(){ 
	var error = '';
	
	
	er = /^[0-9]{7,8}$/;;
	r = validarkeyup(er,document.getElementById('cedcliente'),document.getElementById('scedcliente'),"Sólo ingresar números");
	if(r==0){
	     error = "ERROR <br/><b>Ingreso de cedula</b><br/> La cédula del cliente sólo debe contener números entre 7 y 9 caracteres"; 
	   return error;	
	}

	er = /^[0-9A-Za-z-_.#]{5,10}$/;
	r = validarkeyup(er,document.getElementById('codigo'),document.getElementById('scodigo'),"Ingresar números, letras o símbolos");
	if(r==0){ 
	   error = "ERROR <br/><b>Ingreso de código </b><br/>El código sólo debe contener números, letras o símbolos entre 5 y 10 caracteres";   
	   return error;	
	}
	

	er = /^[0-9]{1,7}$/;;
	r = validarkeyup(er,document.getElementById('cantidad'),document.getElementById('scantidad'),"Sólo ingresar números");
	if(r==0){
	     error = "ERROR <br/><b>Ingreso de cantidad</b><br/> El cantidad sólo debe contener números"; 
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