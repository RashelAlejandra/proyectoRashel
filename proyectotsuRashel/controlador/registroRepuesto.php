<?php
  
  if(is_file("vista/".$pagina.".php")){
    
    if(isset($_POST['accion'])){
      $accion = $_POST['accion'];
      if($accion=='registrar'){
      echo  "REGISTRO EXITOSO<br/> <b>Código: </b>".$_POST['codigo']."<br/>"."<b>Artículo: </b>".
      $_POST['nombre']."<br/>"."<b>Marca: </b>".
      $_POST['marca']."<br/>";

      
      }
     
     
      exit;
    }
    
    require_once("vista/".$pagina.".php"); 
  }
  else{
    echo "pagina en construccion";
  }
?>