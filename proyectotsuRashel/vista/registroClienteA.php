<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/bootstrap.min.css">
 <script src="js/jquery.min.js" ></script>
 <script src="js/popper.min.js" ></script>
 <script src="js/bootstrap.min.js" ></script>
 
	<title>Registro de Cliente</title>
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
	<h1 id="cabecera2">Registro de Cliente</h1> 
	</div>  

<div class="form-group" id="container-form">
<div class="top">
	
	<h2>Ingrese los datos</span></h2>
	<img src="css/imagenes/licencia.png"> 
</div>
<form class="form-registro" method="post" action="" id="form">

	
	<input class="form-control" type="text" name="nomcliente" id="nomcliente" placeholder="Nombre">
	<span id="snomcliente"></span>

	<input class="form-control" type="text" name="apecliente" id="apecliente" placeholder="Apellido">
	<span id="sapecliente"></span>

	<input class="form-control" type="text" name="cedcliente" id="cedcliente" placeholder="Cédula">
	<span id="scedcliente"></span>

	<input class="form-control" type="text" name="tlfcliente" id="tlfcliente" placeholder="Teléfono">
	<span id="stlfcliente"></span>

	<input class="form-control" type="text" name="corcliente" id="corcliente" placeholder="Correo">
	<span id="scorcliente"></span>




	
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

	<script type="text/javascript" src="js/validarCliente.js"></script>


</body>
</html>