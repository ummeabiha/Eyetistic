<?php
require "connection.php";
$db = "eyetistic";
mysqli_select_db($con, $db);

$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);

$email = $request['Email'];
$prodId = $request['ProdId'];

// Check total quantity of the product in products table
$prodQty = "SELECT prodQuantity FROM products WHERE prodId = $prodId";
$prodQtyRes = mysqli_query($con, $prodQty);

if (mysqli_num_rows($prodQtyRes) > 0) {
    $row = mysqli_fetch_assoc($prodQtyRes);
    $prodQuantity = $row['prodQuantity'];

    // Check if the product is already in the cart
    $cartRec = "SELECT * FROM cart WHERE prodId = $prodId AND Email = '$email'";
    $result = mysqli_query($con, $cartRec);

    if (mysqli_num_rows($result) === 0) {
        $cartIns = "INSERT INTO cart (Email, prodId, quantity) VALUES ('$email', $prodId, 1)";
        $append = mysqli_query($con, $cartIns);
        if ($append) {
            echo json_encode(['status' => 'Success']);
        } else {
            echo json_encode(['status' => 'Failure']);
        }
    } else {
        // Get the current cart quantity
        $cartQty = "SELECT quantity FROM cart WHERE prodId = $prodId AND Email = '$email'";
        $cartQtyRes = mysqli_query($con, $cartQty);
        $row = mysqli_fetch_assoc($cartQtyRes);
        $cartQuantity = $row['quantity'];

        if ($cartQuantity + 1 <= $prodQuantity) {
            $cartUpd = "UPDATE cart SET quantity = quantity + 1 WHERE Email = '$email' AND prodId = $prodId";
            $append = mysqli_query($con, $cartUpd);
            if ($append) {
                echo json_encode(['status' => 'Success']);
            } else {
                echo json_encode(['status' => 'Failure']);
            }
        } else {
            echo json_encode(['status' => 'ExceedsQuantity']);
        }
    }
} else {
    echo json_encode(['status' => 'ExceedsQuantity']);
}

?>
