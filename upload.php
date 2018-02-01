<?php
    if(!empty($_FILES['file'])){
        $defaultPath = '.images/';
        $ext = pathinfo($_FILES['file']['name'],PATHINFO_EXTENSION);
        $image = time().'.'.$ext;
        move_uploaded_file($_FILES["file"]["tmp_name"], $defaultPath.$image);
        echo $image." successfully uploaded";
    }else{
        echo "Invalid File or Empty File";
    }
?>
