<?php
require 'connection.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$db = "eyetistic";
mysqli_select_db($con, $db);

$name = $request->Name;
$email = $request->Email;
$phone = $request->Phone;
$address = $request->Address;
$localEmail = $request->LocalEmail;

// Insert order information into the checkout table
$q = "INSERT INTO checkout (Name, Email, Phone, Address) VALUES ('$name','$email','$phone','$address')";
$append = mysqli_query($con, $q);

if ($append) {
    // Select cart items for the user
    $cartQuery = "SELECT * FROM cart WHERE Email = '$localEmail'";
    $cartResult = mysqli_query($con, $cartQuery);

    while ($row = mysqli_fetch_assoc($cartResult)) {
        $prodId = $row['prodId'];
        $quantity = $row['quantity'];
        
        // Insert order items into the orderitems table
        $orderItemInsertQuery = "INSERT INTO orderitems (Email, prodId, quantity) VALUES ('$localEmail', $prodId, $quantity)";
        mysqli_query($con, $orderItemInsertQuery);

        // Decrease product quantity in inventory table
        $updateInventoryQuery = "UPDATE products SET prodQuantity = prodQuantity - $quantity WHERE prodId = $prodId";
        mysqli_query($con, $updateInventoryQuery);
    }

    // Empty the cart
    $deleteCartQuery = "DELETE FROM cart WHERE Email = '$localEmail'";
    mysqli_query($con, $deleteCartQuery);

    echo json_encode(['success' => true, 'message' => 'Order placed successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error placing order']);
}

$con->close();
?>
