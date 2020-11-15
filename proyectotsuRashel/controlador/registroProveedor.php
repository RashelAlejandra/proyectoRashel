<?php
  
  if(is_file("vista/".$pagina.".php")){
    
    if(isset($_POST['accion'])){
      $accion = $_POST['accion'];
      if($accion=='registrar'){
      echo  "REGISTRO EXITOSO<br/> <b>RIF: </b>".$_POST['rif']."<br/>"."<b>Razón Social: </b>".
      $_POST['razon']."<br/>";
      

      
      }
      elseif($accion=='modificar'){
      echo "USTED DESEA MODIFICAR <br/>".$_POST['cedula']."<br/>".
      $_POST['usuario'];  
      
      }
      elseif($accion=='eliminar'){
      echo "USTED DESEA ELIMINAR LA CEDULA <br/>".$_POST['cedula']."<br/>";  
      
      }
      exit;
    }
    
    require_once("vista/".$pagina.".php"); 
  }
  else{
    echo "pagina en construccion";
  }
?>