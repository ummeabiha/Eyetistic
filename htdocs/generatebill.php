<?php
require "connection.php";
$db = "eyetistic";
mysqli_select_db($con, $db);

$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);

$email = $request['Email'];

$q = "SELECT products.prodPrice, cart.quantity FROM products JOIN cart ON products.prodid = cart.prodId WHERE cart.Email = '$email'";
$result = mysqli_query($con, $q);

$totalCost = 0;

while ($row = mysqli_fetch_assoc($result)) {
    $totalCost += $row['prodPrice'] * $row['quantity'];
}


echo json_encode(['totalCost' => $totalCost]);

mysqli_close($con);
?>
