<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/Exception.php';
require '/PHPMailer.php';
require '/SMTP.php';
$server = "localhost";
$username = "root";
$pass = "";
$dbName = "user";
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
    $mail->addAddress($data->email);
	$mail->addBCC('aedexplorers@gmail.com');
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
    $mail->Subject = 'Welcome to What\s in my city';
    $mail->Body    = "<h2>Hello Beloved Customer!!</h2>
    <p>Welcome to What\'s in my City!!! You’ve been selected to receive this special offer from What\'s in my city team. As our brand new customer of our website, we reward you 
     with a 10% off on any of the restaurents listed on our website. To redeem this offer, put the following promo code on our website: ".$data->code."</p>";
    $mail->send();
} catch (Exception $e) {
    
}
$conn = new mysqli($server,$username,$pass,$dbName);
$sql = "INSERT INTO USERDETAILS (username, email, password)
VALUES ('$data->username', '$data->email', '$data->password')";
$result = $conn->query($sql);
$conn->close();
?>