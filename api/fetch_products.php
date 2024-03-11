<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 

// Database connection details
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_dbname";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// SQL to fetch products
$sql = "SELECT id, productName, description, price, shippingCost, productImage FROM Products";
$result = $conn->query($sql);

$products = array();
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $products[] = $row;
  }
  echo json_encode($products);
} else {
  echo json_encode([]);
}

$conn->close();
?>
