<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/bootstrap.min.css">
 <script src="js/jquery.min.js" ></script>
 <script src="js/popper.min.js" ></script>
 <script src="js/bootstrap.min.js" ></script>
 
	<title>Registro de Proveedor</title>
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
</head>
<body>

<?php require_once('comunes/modal.php'); ?>
   <nav class="navbar navbar-expand-lg navbar-light" id="navi">
   	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
        <img src="css/imagenes/manual.png" alt="" style="width:40px;">
		<label class="navbar-brand" >Registro</label>
		<?php require_once('comunes/menuEmp.php'); ?>
  </nav>




<div id="cabecera">
	<h1 id="cabecera2">Registro de Proveedor</h1> 
	</div>  

<div class="form-group" id="container-form">
<div class="top">
	
	<h2>Ingrese los datos</span></h2>
	<img src="css/imagenes/folder4.png">
</div>
<form class="form-registro" method="post" action="" id="form">

	
	<input class="form-control" type="text" name="rif" id="rif" placeholder="RIF">
	<span id="srif"></span>

	<input class="form-control" type="text" name="razon" id="razon" placeholder="Razón Social">
	<span id="srazon"></span>

	<input class="form-control" type="text" name="tlfprov" id="tlfprov" placeholder="Teléfono">
	<span id="stlfprov"></span>

	<input class="form-control" type="text" name="corrpro" id="corrpro" placeholder="Correo">
	<span id="scorrpro"></span>

	<input class="form-control" type="text" name="dirpro" id="dirpro" placeholder="Dirección">
	<span id="sdirpro"></span>




	
</form>


	


<div class="row" id="botones">

		<div class="col-md-3">
			   <button type="button" class="btn btn-primary" id="registrar" name="registrar">REGISTRAR</button>
		</div>

		

		

		<div class="col-md-3">	
			   <button type="button" class="btn btn-primary" id="borrar" name="borrar">BORRAR</button>
		</div>
		
	</div>

	

</div>

	<script type="text/javascript" src="js/validarProveedor.js"></script>

</body>
</html>