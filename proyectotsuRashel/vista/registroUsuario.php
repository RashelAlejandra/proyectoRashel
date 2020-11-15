<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/bootstrap.min.css">
 <script src="js/jquery.min.js" ></script>
 <script src="js/popper.min.js" ></script>
 <script src="js/bootstrap.min.js" ></script>
 
	<title>Registro de Usuarios</title>
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
	<h1 id="cabecera2">Registro de Usuario</h1>
	</div>  

<div class="form-group" id="container-form">
<div class="top">
	
	<h2>Ingrese los datos</span>
	</h2>
	<img src="css/imagenes/gestion.png"> 
</div>
<form class="form-registro" method="post" action="" id="form">



	<input class="form-control" type="text" name="cedusuario" id="cedusuario" placeholder="Cédula">
	<span id="scedusuario"></span>

<input class="form-control" type="text" name="nomusuario" id="nomusuario" placeholder="Nombre de Usuario">
	<span id="snomusuario"></span>

	<input class="form-control" type="text" name="nomreal" id="nomreal" placeholder="Nombre real">
	<span id="snomreal"></span>

	<input class="form-control" type="text" name="apellido" id="apellido" placeholder="Apellido">
	<span id="sapellido"></span>


	<input class="form-control" type="text" name="clave" id="clave" placeholder="Contraseña">
	<span id="sclave"></span>


	<select class="form-control" id="rol" name="rol">
    <option value="" selected="selected">Rol de Usuario</option>
    <option value="Administrador"> Administrador </option>
    <option value="Empleado"> Empleado de Ventas </option>
                                   </select><br>

 


	
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

	<script type="text/javascript" src="js/validarUsuario.js"></script>

</body>
</html>