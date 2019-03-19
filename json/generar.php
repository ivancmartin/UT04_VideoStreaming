<?php 

    if (isset($_POST['user'])) {
        $user = $_POST['user'];
    }

    //echo json_encode($_POST['info']);
    $dbSystem = json_encode($_POST['info']);
    //echo $dbSystem;
    $nombre_archivo = $user.".json";
    
    if(file_exists($nombre_archivo)) {
        //echo nl2br(file_get_contents($nombre_archivo));
    }else{
        $mensaje = "El archivo no existe";
    }

    $fd=fopen($nombre_archivo,"w+");
    fwrite($fd,$dbSystem);
    fclose($fd);


?>