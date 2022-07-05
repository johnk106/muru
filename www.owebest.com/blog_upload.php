<?php
include 'connect.php';
if(isset($_POST['submit'])){
    $heading = $_POST['heading'];
    $description = $_POST['description'];
    $content = $_POST['content'];
    $date =  date("d");
    $month_no = date("m");
    $month = date('F',mktime(0,0,0,$month_no,10));
    $year = date("Y");
    $full_date = date("d/m/Y");

    $target_dir = "blogUpload/";
    $file = $target_dir . basename($_FILES["image"]["name"]);
    $uploadOk = 1;
    $imagefiletype = strtolower(pathinfo($file,PATHINFO_EXTENSION));
    $image_name = basename($file);


    if(isset($_POST["SUBMIT"])){
        $check = getimagesize($_FILES["file"]["tmp_name"]);
        if($check == false){
            echo "File is not an image";
            $uploadOk = 0;
        }
    }

    if($uploadOk == 0){
        echo "there was an issue uploading the file,please try again later.";
    }else{
        if(!move_uploaded_file($_FILES["image"]["tmp_name"],$file)){
            echo "there was an issue uploading the file,please try again later.";


        }
    }

    $sql = "insert into `blog`(heading,description,content,year,date,image,month,fulldate)
    values('$heading','$description','$content','$year','$date','$image_name','$month','$full_date')";
    $result = mysqli_query($con,$sql);
    if(!$result){
        die(mysqli_error($con));
    }else{
        echo "Blog uploaded succesfuly";
    }



}
?>