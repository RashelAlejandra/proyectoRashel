<?php
  //verifica que exista la vista de
  //la pagina
  if(is_file("vista/".$pagina.".php")){

    if(isset($_POST['accion'])){
      $accion = $_POST['accion'];
      if($accion=='registrar'){
      echo  "REGISTRO DE COMPRA EXITOSO<br/> <b>Artículo: </b>".$_POST['codigo']."<br/>"."<b>Cantidad: </b>".
      $_POST['cantidad']."<br/>";
      
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
    //si existe se la trae, ahora ve a la carpeta vista
    //y busca el archivo principal.php 
    require_once("vista/".$pagina.".php"); 
  }
  else{
    echo "pagina en construccion";
  }
?>