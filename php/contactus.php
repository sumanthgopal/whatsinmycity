<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/Exception.php';
require '/PHPMailer.php';
require '/SMTP.php';
$data = json_decode(file_get_contents("php://input"));
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'wimc.whatsinmycity@gmail.com';                 // SMTP username
    $mail->Password = 'whatsinmycity';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('wimc.whatsinmycity@gmail.com');
    $mail->addAddress('sravya.shalu@gmail.com');
    // Add a recipient
    $mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contact of Customer';
    $mail->Body    = "<h2>Hello Admin!!</h2>
    <p>You have recived an email from ".$data->name.". Customers are really important to us. Get in touch with them shortly. His email id  is: ".$data->email." His message is given below</p><h3>Message</h3><p>".$data->msg."</p>";
    $mail->send();
} catch (Exception $e) {
    
}
?>