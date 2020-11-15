<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/bootstrap.min.css">
 <script src="js/jquery.min.js" ></script>
 <script src="js/popper.min.js" ></script>
 <script src="js/bootstrap.min.js" ></script>
 
	<title>Registro de Repuesto</title>
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
		<?php require_once('comunes/menuAdm.php'); ?>
  </nav>




<div id="cabecera">
	<h1 id="cabecera2">Registro de Repuesto</h1> 
	</div>  

<div class="form-group" id="container-form">
<div class="top">
	
	<h2>Ingrese los datos</span></h2>
	<img src="css/imagenes/car.png"> 
</div>
<form class="form-registro" method="post" action="" id="form">

	
	<input class="form-control" type="text" name="codigo" id="codigo" placeholder="Código">
	<span id="scodigo"></span>

	<input class="form-control" type="text" name="nombre" id="nombre" placeholder="Nombre">
	<span id="snombre"></span>

	<input class="form-control" type="text" name="marca" id="marca" placeholder="Marca">
	<span id="smarca"></span>

	<input class="form-control" type="text" name="aplicacion" id="aplicacion" placeholder="Aplicación">
	<span id="saplicacion"></span>

	<input class="form-control" type="text" name="precio" id="precio" placeholder="Precio">
	<span id="sprecio"></span>


	<input class="form-control" type="text" name="coste" id="coste" placeholder="Coste">
	<span id="scoste"></span>



	
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

	<script type="text/javascript" src="js/validarRepuesto.js"></script>

</body>
</html>