<?php
include 'config.php'; 

$userId = $_GET['userId']; 

$stmt = $conn->prepare("SELECT * FROM CartItems WHERE userId = ?");
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();

$cartItems = [];
while ($row = $result->fetch_assoc()) {
    $cartItems[] = $row;
}

echo json_encode($cartItems);

$conn->close();
?>
