<html>
<head>
	<link rel="stylesheet" href="css/bootstrap.min.css">
 <script src="js/jquery.min.js" ></script>
 <script src="js/popper.min.js" ></script>
 <script src="js/bootstrap.min.js" ></script>

	<title>Registro de Compra</title>
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
</head>
<body>

<?php require_once('comunes/modal.php'); ?>
   <nav class="navbar navbar-expand-lg navbar-light" id="navi">
   	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
        <img src="css/imagenes/manual.png" alt="" style="width:40px;">
		<label class="navbar-brand" >Compras</label>
		<?php require_once('comunes/menuEmp.php'); ?>
  </nav>



<div id="cabecera">
	<h1 id="cabecera2">Registro de Compra</h1> 
	</div>  

<div class="form-group" id="container-form">
<div class="top">
	
	<h2>Ingrese los datos de la compra</span></h2>
</div>
<form class="form-registro" method="post">

	<input class="form-control" type="text" name="rif" id="rif" placeholder="RIF del Proveedor" required>
	<span id="srif"></span>

	<input class="form-control" type="text" name="codigo" id="codigo" placeholder="Código del producto" required>
	<span id="scodigo"></span>


	<input class="form-control" type="text" name="cantidad" id="cantidad" placeholder="Cantidad" required>
	<span id="scantidad"></span>

	<select class="form-control" id="pago" name="pago">
    <option value="" selected="selected"> Modo de Pago</option>
    <option value="efectivo">Efectivo</option>
    <option value="transferencia">Transferencia</option>
                                    </select>


</form>



<div class="row" id="botones">

		<div class="col-md-3">
			   <button type="button" class="btn btn-primary" id="registrar" name="registrar">REGISTRAR</button>
		</div>


		<div class="col-md-3">
			   <button type="button" class="btn btn-primary" id="eliminar" name="eliminar">ELIMINAR</button>
		</div>
		
	</div>


</div> 

<script type="text/javascript" src="js/validarCompra.js"></script>
	

</body>
</html>