<?php
include('config.php');
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Fetch the student user from the database
    $sql = "SELECT * FROM users WHERE username = ? AND role = 'student'";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    // Check if the user exists and verify the password
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['role'] = $user['role'];
        $_SESSION['first_name'] = $user['first_name']; // Make sure this matches the field in your database

        // Redirect to the meal planner page
        header('Location: main.php');
        exit();
    } else {
        $error = "Invalid username or password";
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Login - Meal Management System</title>
    <link rel="stylesheet" href="studentlogin.css">
</head>

<body>
    <div class="login-page">
        <div class="login-container">
            <h2>Student Login</h2>
            <?php if (!empty($error)) echo "<p class='error'>$error</p>"; ?>
            <form action="student_login.php" method="POST">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required>

                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>

                <button type="submit" class="btn">Login</button>
            </form>
            <p class="create-account">Need an account? Contact your admin.</p>
        </div>
    </div>
</body>

</html>
