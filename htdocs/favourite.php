<?php
require "connection.php";
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$db = "eyetistic";
$Email = $request->Email;
$q = "SELECT prodId FROM favorites WHERE Email='$Email'";
mysqli_select_db($con, $db);
$result = mysqli_query($con, $q);
$fav= mysqli_fetch_all($result);
$size = sizeof($fav);
$arr = [];
$i=0;

while ($i < $size) {
    $index = $fav[$i][0];
    $q = "SELECT * FROM products WHERE prodid=$index";
    $append = mysqli_query($con, $q);
    while ($row = mysqli_fetch_assoc($append)) {
        array_push($arr, $row);
    }
    $i += 1;
}
echo json_encode($arr);
?>





