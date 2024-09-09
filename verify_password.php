<?php
// Replace with the actual hash from your database
$hash = '$2y$10$ExampleHashedPasswordStringGeneratedByPHP'; 

// Replace with the password you want to test (e.g., 'admin123')
$password = 'admin123'; 

// Verify if the entered password matches the hashed password
if (password_verify($password, $hash)) {
    echo "Password is correct!";
} else {
    echo "Password is incorrect!";
}
?>
