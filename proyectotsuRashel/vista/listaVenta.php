<html>
<head>
	<link rel="stylesheet" href="css/bootstrap.min.css">
 <script src="js/jquery.min.js" ></script>
 <script src="js/popper.min.js" ></script>
 <script src="js/bootstrap.min.js" ></script>
 <link rel="stylesheet" type="text/css" href="css/inventario.css">

	<title>Facturas de Venta</title>
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
</head>
<body class="fondopantalla">


   <nav class="navbar navbar-expand-lg navbar-light" id="navi">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <img src="css/imagenes/manual.png" alt="" style="width:40px;">
		<label class="navbar-brand" >Reportes</label>
		<?php require_once('comunes/menuEmp.php'); ?>
  </nav>



<div id="cabecera">
	<h1 id="cabecera2">Lista de Facturas de Venta</h1> 
    <h4 id="mens">Seleccione la Factura para ver detalles</h4>
	</div>  
</br></br></br></br>

   

<article class="caja1">
                
                <div class="tablas">
                    <table>
                        <tbody>
                            
                                <tr>
                                    <td align="center" class="titulo" style="background-color: lightgreen"><b>Nro de Factura</b></td>
                                     <td  align="center" class="titulo" style="background-color: lightgreen"><b>Fecha</b></td>
                                    <td  align="center" class="titulo" style="background-color: lightgreen"><b>Productos</b></td>
                                    <td  align="center" class="titulo" style="background-color: lightgreen"><b>CLiente</b></td>
                                   
                                    <td  align="center" class="titulo" style="background-color: lightgreen"><b>Monto total</b></td>
                                    
                                </tr>
                                <tr>
                                    <td>FC0222009</td>
                                    <td>22/03/2020</td>
                                    <td>Bujía - A1 Filter</td>
                                    <td>Mario Piñera</td>
                                    <td>1.250.000,00</td>
                                    

									</tr>

									<tr>
                                    <td>FC0222010</td>
                                    <td>22/03/2020</td>
                                    <td>Pila - Bosch</td>
                                    <td>Dino Saurio</td>
                                    <td>400.000,00</td>
                                    
                                </tr>

                                	<tr>

                                    <td>FC0222011</td>
                                    <td>22/03/2020</td>
                                    <td>Batería - A1 Filter</td>
                                    <td>Eliana Jimenez</td>
                                    <td>1.250.000,00</td>
                                    

                                </tr>

                                <tr>
                                    <td>FC0232012</td>
                                    <td>23/03/2020</td>
                                    <td>Bujía - Diamond</td>
                                    <td>Juan Nelo</td>
                                    <td>1.250.000,00</td>
                                    
                                </tr>

                                <tr>
                                    <td>FC0232013</td>
                                    <td>23/03/2020</td>
                                    <td>Batería - A1 Filter</td>
                                    <td>Maria</td>
                                    <td>1.250.000,00</td>
                                    
                                </tr>

                                <tr>
                                    <td>FC0252014</td>
                                    <td>25/03/2020</td>
                                    <td>Batería - Duncan</td>
                                    <td>Duncan</td>
                                    <td>1.250.000,00</td>
                                    
                                </tr>

                                <tr>
                                    <td>FC0252015</td>
                                    <td>25/03/2020</td>
                                    <td>Filtro - A1 Filter</td>
                                    <td>Kenny Auna</td>
                                    <td>1.250.000,00</td>
                                    
                                </tr>

                                <tr>
                                    <td>FC0252016</td>
                                    <td>25/03/2020</td>
                                    <td>Manilla - Opus</td>
                                    <td>Richard Ranashinha</td>
                                    <td>1.250.000,00</td>
                                   
                                </tr>

                                <tr>
                                    <td>FC0252017</td>
                                    <td>25/03/2020</td>
                                    <td>Filtro - A1 Filter</td>
                                    <td>Brian sole</td>
                                    <td>1.250.000,00</td>
                                    
                                </tr>

                               




                                  

                                    </td>
                                </tr>

                        </tbody>
                    </table>
                    
                    
                </div>
                <div class="row" id="botones">

        <div class="col-md-3">
               <button type="button" class="btn btn-primary" id="registrar" name="registrar">REPORTE GENERAL</button>
        </div>

    
        
    </div>

            </article>

	

</body>
</html>