<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/bootstrap.min.css">
 <script src="js/jquery.min.js" ></script>
 <script src="js/popper.min.js" ></script>
 <script src="js/bootstrap.min.js" ></script>
	<title>Consulta de Repuesto</title>
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
	<h1 id="cabecera2">Gestión de Repuesto</h1> 
	</div>  

<div class="form-group" id="container-consulta">
<div class="top">
	
	<h2>Datos de la Consulta</span></h2>
</div>
<form class="form-registro" method="post" action="" id="form">

<table class="tabla-datos">
	<tr>
	<td class="celda-datos">
	<label for="name"><strong class="labels">Código: </strong></label>
    </td>
	<td class="celda-datos">
	<input class="form-control" type="text" name="codigo" id="codigo" placeholder="Código">
	<span id="scodigo"></span>
	</td>
</tr>

<tr>
<tr>
	<td class="celda-datos">
	<label for="name"><strong class="labels">Nombre: </strong></label>
    </td class="celda-datos">
	<td>
	<input class="form-control" type="text" name="nombre" id="nombre" placeholder="Nombre">
	<span id="snombre"></span>
	</td>
	
</tr>

<tr>
    <tr>
	<td class="celda-datos">
	<label for="name"><strong class="labels">Marca: </strong></label>
    </td>
	<td class="celda-datos">
	<input class="form-control" type="text" name="marca" id="marca" placeholder="Marca">
	<span id="smarca"></span>
	</td>
</tr>

<tr>

	<tr>
	<td class="celda-datos">
	<label for="name"><strong class="labels">Aplicación: </strong></label>
    </td>
	<td class="celda-datos">
	<input class="form-control" type="text" name="aplicacion" id="aplicacion" placeholder="Aplicación">
	<span id="saplicacion"></span>
	</td>
</tr>

<tr>

	<tr>
	<td class="celda-datos">
	<label for="name"><strong class="labels">Precio: </strong></label>
    </td>
	<td class="celda-datos">
	<input class="form-control" type="text" name="precio" id="precio" placeholder="Precio">
	<span id="sprecio"></span>
	</td>
</tr>

<tr>
	<tr>
	<td class="celda-datos">
	<label for="name"><strong class="labels">Coste: </strong></label>
    </td>
	<td class="celda-datos">
	<input class="form-control" type="text" name="coste" id="coste" placeholder="Coste">
	<span id="scoste"></span>
	</td>
</tr>


</table>
	
</form>


	


<div class="row" id="botones">

		

		<div class="col-md-3">	
			   <button type="button" class="btn btn-primary" id="modificar" name="modificar">MODIFICAR</button>
		</div>

		<div class="col-md-3">	
			   <button type="button" class="btn btn-primary" id="eliminar" name="eliminar">ELIMINAR</button>
		</div>
		
	</div>

	

</div>

	<script type="text/javascript" src="js/validarconsulta.js"></script>

</body>
</html>