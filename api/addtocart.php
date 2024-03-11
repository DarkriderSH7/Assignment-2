<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 

// Database connection
include 'config.php';

$_POST = json_decode(file_get_contents('php://input'), true);

$userId = $_POST['userId']; 
$productId = $_POST['productId'];
$quantity = $_POST['quantity'];


$sql = "INSERT INTO Cart (userId, productId, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iiii", $userId, $productId, $quantity, $quantity);

if ($stmt->execute()) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to add item to cart"]);
}

$conn->close();
?>
