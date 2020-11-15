<?php
  
  if(is_file("vista/".$pagina.".php")){
    
    if(isset($_POST['accion'])){
      $accion = $_POST['accion'];
      if($accion=='registrar'){
      echo  "REGISTRO EXITOSO<br/> <b>Cédula: </b>".$_POST['cedcliente']."<br/>"."<b>Nombre: </b>".
      $_POST['nomcliente']."<br/>"."<b>Apellido: </b>".
      $_POST['apecliente']."<br/>";
      

      
      }
      
      exit;
    }
    
    require_once("vista/".$pagina.".php"); 
  }
  else{
    echo "pagina en construccion";
  }
?>