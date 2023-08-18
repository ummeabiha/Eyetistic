<?php
require 'connection.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$db = "eyetistic";
mysqli_select_db($con, $db);

$name = $request->Name;
$email = $request->Email;
$phone = $request->Phone;
$message= $request->Message;

$q = "INSERT INTO contact (Name, Email, Phone, Message) VALUES ('$name','$email','$phone','$message');";
$append = mysqli_query($con, $q);
if ($append) {
    echo json_encode(['status' => 'Success']);
} else {
    echo json_encode(['status' => 'Failure']);
}
?>

