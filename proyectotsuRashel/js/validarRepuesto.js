
document.onload = carga();

function carga(){
	
	
	document.getElementById('codigo').maxLength = 10;
	
	document.getElementById('codigo').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('codigo').onfocus = function(){
	
		document.getElementById('scodigo').innerText = "Sólo números, letras o (- _ . o #)";
	};
	
	
	document.getElementById('codigo').onblur = function(){
		document.getElementById('scodigo').innerText = "";
	};
	
	
	document.getElementById('codigo').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{5,10}$/;
		r = validarkeyup(er,this,document.getElementById('scodigo'),"Sólo números, letras o (- _ . o #)");
	}
	

	document.getElementById('nombre').maxLength = 40;
	
	document.getElementById('nombre').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('nombre').onfocus = function(){
	
		document.getElementById('snombre').innerText = "Sólo números, letras o (- _ . o #)";
	};
	
	
	document.getElementById('nombre').onblur = function(){
		document.getElementById('snombre').innerText = "";
	};
	
	
	document.getElementById('nombre').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{4,40}$/;
		r = validarkeyup(er,this,document.getElementById('snombre'),"Sólo números, letras o (- _ . o #)");
	}
	




	
document.getElementById('marca').maxLength = 20;
	
	document.getElementById('marca').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('marca').onfocus = function(){
	
		document.getElementById('smarca').innerText = "Sólo números, letras o (- _ . o #)";
	};
	
	
	document.getElementById('marca').onblur = function(){
		document.getElementById('smarca').innerText = "";
	};
	
	
	document.getElementById('marca').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{5,20}$/;
		r = validarkeyup(er,this,document.getElementById('snombre'),"Sólo números, letras o (- _ . o #)");
	}




document.getElementById('aplicacion').maxLength = 150;
	
	document.getElementById('aplicacion').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('aplicacion').onfocus = function(){
	
		document.getElementById('saplicacion').innerText = "Sólo números, letras o (- _ . o #)";
	};
	
	
	document.getElementById('aplicacion').onblur = function(){
		document.getElementById('saplicacion').innerText = "";
	};
	
	
	document.getElementById('aplicacion').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{5,150}$/;
		r = validarkeyup(er,this,document.getElementById('saplicacion'),"Sólo números, letras o (- _ . o #)");
	}

	
	document.getElementById('precio').maxLength = 10;
	
	document.getElementById('precio').onkeypress = function(e){
	
		er = /^[0-9]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('precio').onfocus = function(){
	
		document.getElementById('sprecio').innerText = "Sólo ingresar números";
	};
	
	
	document.getElementById('precio').onblur = function(){
		document.getElementById('sprecio').innerText = "";
	};
	
	
	document.getElementById('precio').onkeyup = function(){
	
		er = /^[0-9]{10,14}$/;
		r = validarkeyup(er,this,document.getElementById('sprecio'),"Sólo ingresar números");
	}

document.getElementById('coste').maxLength = 10;
	
	document.getElementById('coste').onkeypress = function(e){
	
		er = /^[0-9]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('coste').onfocus = function(){
	
		document.getElementById('scoste').innerText = "Sólo ingresar números";
	};
	
	
	document.getElementById('coste').onblur = function(){
		document.getElementById('scoste').innerText = "";
	};
	
	
	document.getElementById('coste').onkeyup = function(){
	
		er = /^[0-9]{10,14}$/;
		r = validarkeyup(er,this,document.getElementById('scoste'),"Sólo ingresar números");
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
			 datos.append('codigo',$("#codigo").val());
			 datos.append('nombre',$("#nombre").val());
			 datos.append('marca',$("#marca").val());
			 datos.append('aplicacion',$("#aplicacion").val());
			 datos.append('precio',$("#precio").val());
			 datos.append('coste',$("#coste").val());
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
	$("#nombre").val('');
	$("#marca").val('');
	$("#aplicacion").val('');
	$("#precio").val('');
	$("#coste").val('');
}

function valida_datos(){ 
	var error = '';
	
	
	er = /^[0-9A-Za-z-_.#]{5,10}$/;
	r = validarkeyup(er,document.getElementById('codigo'),document.getElementById('scodigo'),"Sólo números, letras o (- _ . o #)");
	if(r==0){ 
	   error = "ERROR <br/><b>Ingreso de código </b><br/>El código sólo debe contener números, letras o símbolos (- _ . o #) entre 5 y 10 caracteres";   
	   return error;	
	}
	
	er = /^[0-9A-Za-z-_.#]{4,40}$/;
	r = validarkeyup(er,document.getElementById('nombre'),document.getElementById('snombre'),"Sólo números, letras o (- _ . o #)");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de nombre</b> <br/>El nombre sólo debe contener números, letras o símbolos (- _ . o #) entre 4 y 40 caracteres";
	   return error;
	}

	
	
	er = /^[0-9A-Za-z-_.#]{5,20}$/;
	r = validarkeyup(er,document.getElementById('marca'),document.getElementById('smarca'),"Sólo números, letras o (- _ . o #)");
	if(r==0){
	   error = "ERROR <br/><b>Ingreso de marca</b> <br/>La marca debe contener números, letras o símbolos (- _ . o #) entre 5 y 20 caracteres";
	   return error;	
	}




	er = /^[0-9]{4,10}$/;;
	r = validarkeyup(er,document.getElementById('precio'),document.getElementById('sprecio'),"Sólo ingresar números");
	if(r==0){
	     error = "ERROR <br/><b>Ingreso de precio</b><br/> El precio sólo debe contener números"; 
	   return error;	
	}

	er = /^[0-9]{4,10}$/;;
	r = validarkeyup(er,document.getElementById('coste'),document.getElementById('scoste'),"Sólo ingresar números");
	if(r==0){
	     error = "ERROR <br/><b>Ingreso de coste</b><br/> El coste sólo debe contener números"; 
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