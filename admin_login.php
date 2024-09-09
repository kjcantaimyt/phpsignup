<?php
include('config.php');
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = trim($_POST['username']);
    $password = $_POST['password'];

    // Check if username and password are not empty
    if (!empty($username) && !empty($password)) {
        // Query to fetch the user details
        $sql = "SELECT * FROM users WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('s', $username);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        // Check if the user exists and verify the password
        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['role'] = $user['role'];

            // Redirect based on the user's role
            if ($user['role'] == 'admin') {
                header('Location: admin_dashboard.php'); // Redirect to admin dashboard
            } else {
                header('Location: main.php'); // Redirect to student dashboard
            }
            exit();
        } else {
            $error = "Invalid username or password";
        }
    } else {
        $error = "Please fill in all fields.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Meal Management</title>
    <link rel="stylesheet" href="style5.css">
</head>
<body>
    <div class="login-container">
        <form action="admin_login.php" method="POST" class="form-card">
            <h2>Login</h2>
            <?php if (!empty($error)) echo "<p class='error'>$error</p>"; ?>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>

            <button type="submit" class="btn">Login</button>
            <p>Don't have an account? Contact your admin to create one.</p>
        </form>
    </div>
</body>
</html>
