<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
$con = mysqli_connect("localhost", "root", "");

// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
?>