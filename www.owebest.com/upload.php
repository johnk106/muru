<?php
include 'connect.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer();


if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $country = $_POST['country'];
    $budget = $_POST['budget'];
    $outline = $_POST['outline'];

    $target_dir = "uploads/";
    $file = $target_dir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($file,PATHINFO_EXTENSION));
    $file_name = basename($file);

    if($uploadOk == 0){
        echo "there was an issue uploading the file,please try again later.";
    }else{
        if(!move_uploaded_file($_FILES["file"]["tmp_name"],$file)){
            echo "there was an issue uploading the file,please try again later.";

        }
    };

    try {
        //$mail->SMTPDebug = 2;                                       
        $mail->isSMTP();                                            
        $mail->Host       = 'smtp.mailtrap.io';                    
        $mail->SMTPAuth   = true;                             
        $mail->Username   = 'd802294c911885';                 
        $mail->Password   = '4901d41c3d3a1a';                        
        $mail->SMTPSecure = 'tls';                              
        $mail->Port       = 2525;  
      
        $mail->setFrom($email, $name);           
        $mail->addAddress('djonte0@gmail.com');
       // $mail->addAddress('receiver2@gfg.com', 'Name');
           
        $mail->isHTML(true);                                  
        $mail->Subject = 'Enquiry';
        $mail->addAttachment("$file");        

        $mail->Body    = '
        <h4>Name: '.$name.'</h4>
        <h4>email: '.$email.'</h4>
        <h4>Contact: '.$contact.'</h4>
        <h4>country: '.$country.'</h4>
        <h4>Budget: '.$budget.'</h4>
        <h4>Outline:</h4>
        <p>'.$outline.'</p>
        ';
        $mail->AltBody = 'my name is '.$name.' and my email is '.$email.',I come from '.$country.' and my project outline is as follows:
        '.$outline.', My budget is '.$budget.'
        ';
        $mail->send();
       echo "Mail has been sent successfully!";
       //header("location:index.html");
    } catch (Exception $e) {
        echo "Message could not be sent. ";
    }

    $sql = "insert into `messages`(name,email,contact,country,budget,outline,file)
    values('$name','$email','$contact','$country','$budget','$outline','$file_name')";
    $result = mysqli_query($con,$sql);
    if(!$result){
        die(mysqli_error($con));
    }else{
        echo "message succesfuly sent";
    }
    
}
?>