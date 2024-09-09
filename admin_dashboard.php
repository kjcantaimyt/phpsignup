<?php
session_start();

// Check if the user is logged in as an admin
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header('Location: admin_login.php');
    exit();
}

// Handle logout
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin_login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meal Management Dashboard</title>
    <link rel="stylesheet" href="admin_style1.css">
</head>
<body>
    <div class="sidebar" id="sidebar">
        <h2>Meal Manager</h2>
        <ul>
            <li><a href="index.php" class="nav-link active"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
            <li><a href="meals.php" class="nav-link"><i class="fas fa-utensils"></i> Meals</a></li>
            <li><a href="admin_settings.php" class="nav-link"><i class="fas fa-cog"></i> Settings</a></li>
            <li><a href="signup.php" class="nav-link"><i class="fas fa-user-plus"></i> Add Student</a></li>
            <li><a href="?logout=true" class="nav-link"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
        </ul>
    </div>

    <div class="main-content" id="main-content">
        <header>
            <div class="header-title">
                <h1>Dashboard</h1>
            </div>
            <div class="header-info">
                <span>Welcome, Admin!</span>
            </div>
        </header>

        <section class="stats">
            <div class="card">
                <h3>Meals Planned</h3>
                <p>1700</p>
            </div>
            <div class="card">
                <h3>Calories</h3>
                <p>700 kcal</p>
            </div>
            <div class="card">
                <h3>Reviews</h3>
                <p>500</p>
            </div>
        </section>

        <section class="allergies">
            <h3>Student Allergies</h3>
            <table class="allergy-table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Allergies</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Peanuts, Shellfish</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Dairy, Eggs</td>
                    </tr>
                    <tr>
                        <td>Michael Brown</td>
                        <td>Gluten, Soy</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>
