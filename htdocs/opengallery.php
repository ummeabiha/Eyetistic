<?php
require "connection.php";
$db = "eyetistic";
mysqli_select_db($con, $db);
$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);
$prodId = $request['ProdId'];
$q = "SELECT * FROM products WHERE prodid=$prodId";
$append = mysqli_query($con, $q);
$data = mysqli_fetch_assoc($append);
 
if ($append) {
    $response = [
        'status' => 'Success',
        'data' => $data
    ];
    echo json_encode($response);
} 
else {
    $response = [
        'status' => 'Failure'
    ];
    echo json_encode($response);
}
?>
