<html>
<head>
	<title>Inicio de Sesión</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
 <script src="js/jquery.min.js" ></script>
 <script src="js/popper.min.js" ></script>
 <script src="js/bootstrap.min.js" ></script>
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
</head>
<body>
<div class="barra">
	<h1>Bienvenido al Sistema de Control de Inventario</h1>
	
</div>



<div id="container-inicio">
<div class="top">
	
	<h2>Iniciar sesión</span></h2>
	<img src="css/imagenes/gestion.png">
</div>
<form class="form-registro" id="form-registro" method="post" name="form-registro">

	
<label for="name" style="color: white;">Ingresar como:</label><select class="form-control" id="rol" name="rol">
    <option value="" selected="selected"> Seleccionar</option>
    <option value="administrador"> Administrador </option>
    <option value="empleado"> Empleado de Ventas </option>
                                    </select><br>

	<input class="form-control" type="text" name="nombreu" id="nombreu" placeholder="Nombre de Usuario" required>
	<span id="snombreu"></span>



	<input class="form-control" type="password" name="clave" id="clave" placeholder="Contraseña" required>
	<span id="sclave"></span>



	
</form>
	


	<div class="row" id="botones">

		

		

		<div class="col-md-3">	
			   <button type="button" type="submit" class="btn btn-primary" id="ingresar" onclick="return validasesion();">Ingresar</button>
		</div>
		
		
		
	</div>
</div>

	

<script type="text/javascript" src="js/validasesion.js"></script>
</body>
</html>