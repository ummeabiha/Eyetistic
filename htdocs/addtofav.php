<?php
require "connection.php";
$db = "eyetistic";
mysqli_select_db($con, $db);

$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);

$email = $request['Email'];
$prodId = $request['ProdId'];

$favRec = "SELECT prodId FROM favorites WHERE prodId=$prodId AND Email='$email'";
$result = mysqli_query($con, $favRec);

if(mysqli_num_rows($result) != 0) {
    echo json_encode(['status' => 'Already Exists']);
} 
else {
    $q="INSERT INTO favorites(Email, prodId) VALUES ('$email', $prodId)";
    $append = mysqli_query($con, $q);
    if ($append) {
        echo json_encode(['status' => 'Success']);
    } else {
        echo json_encode(['status' => 'Failure']);
    }
}
?>






