<?php
  
  if(is_file("vista/".$pagina.".php")){

    if(isset($_POST['accion'])){
      $accion = $_POST['accion'];
      if($accion=='registrar'){
      echo  "REGISTRO DE VENTA EXITOSO<br/> <b>Artículo: </b>".$_POST['codigo']."<br/>"."<b>Cantidad: </b>".
      $_POST['cantidad']."<br/>";
      
      }
     
      exit;
    }
	  
	  require_once("vista/".$pagina.".php"); 
  }
  else{
	  echo "pagina en construccion";
  }
?>