<html>
<head>
	<link rel="stylesheet" href="css/bootstrap.min.css">
 <script src="js/jquery.min.js" ></script>
 <script src="js/popper.min.js" ></script>
 <script src="js/bootstrap.min.js" ></script>
 
	<title>Consulta de Cliente</title>
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
</head>
<body>


   <nav class="navbar navbar-expand-lg navbar-light" id="navi">
   	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
        <img src="css/imagenes/manual.png" alt="" style="width:40px;">
		<label class="navbar-brand" >Consulta</label>
		<?php require_once('comunes/menuAdm.php'); ?>
  </nav>



<div id="cabecera">
	<h1 id="cabecera2">Consulta de Cliente</h1> 
	</div>  

<div id="container-form">
<div class="top">
	
	<h2>Ingrese el campo clave</span></h2>
	<img src="css/imagenes/consulta2.png"> 
</div>
<form class="form-registro" method="post">


	<label for="cedcliente" class="opcion">Ingrese la cédula del cliente:</label>
	<input class="form-control" type="text" name="cedcliente" id="cedcliente" placeholder="Cédula" required>
	<span id="scedcliente"></span>

	

	
</form>
	


	<div class="row">

		

		
			
			   <button type="button" class="btn btn-primary" id="consultar" onclick="return enviar();">Consulta</a></button>
	
		
		
		
	</div>


<script type="text/javascript" src="js/consultaClienteA.js"></script>

	

</body>
</html>