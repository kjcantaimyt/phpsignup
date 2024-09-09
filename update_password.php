<?php
include('config.php'); // Ensure this points correctly to your database configuration
session_start(); // Optional if you need session management in this script

// Hash the password you want to set
$hashedPassword = password_hash('1234', PASSWORD_DEFAULT);

// Set the username of the account you want to update
$username = 'kojoa'; // Change this to the username whose password you want to update

// SQL query to update the password
$sql = "UPDATE users SET password = ? WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ss', $hashedPassword, $username);

// Execute the query and check if it was successful
if ($stmt->execute()) {
    echo "Password updated successfully.";
} else {
    echo "Error updating password: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
