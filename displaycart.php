<?php
require "connection.php";
$db = "eyetistic";
mysqli_select_db($con, $db);

// Decode incoming JSON data
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['Email']; 

$cartItemsQuery = "SELECT products.prodid, products.prodName, products.prodCategory, products.prodPrice, products.prodImage, cart.quantity FROM products JOIN cart ON products.prodid = cart.prodId WHERE cart.Email = '$email'";
$cartItemsResult = mysqli_query($con, $cartItemsQuery);

$cartItems = [];
while ($row = mysqli_fetch_assoc($cartItemsResult)) {
    $cartItems[] = $row;
}

// Return cart items as JSON response
echo json_encode(['cartItems' => $cartItems]);

// Close the database connection
mysqli_close($con);
?>
