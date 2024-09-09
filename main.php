<?php
session_start();
$firstName = isset($_SESSION['first_name']) ? $_SESSION['first_name'] : 'Guest';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meal Planner</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Sidebar Navigation -->
    <aside class="sidebar">
        <h2>Meal Manager</h2>
        <ul>
            <li><a href="current-meal">Current Meal</a></li>
            <li><a href="#weekly-menu">Live Weekly Menu</a></li>
            <li><a href="calendar">Calendar</a></li>
            <li><a href="addreminders.php">Add Reminders</a></li>
            <li><a href="settings.php">Settings</a></li>
        </ul>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
        <!-- Header Section -->
        <header class="header">
            <h1>Welcome, <?php echo htmlspecialchars($firstName); ?>!</h1>
            <div id="datetime">Today's date: <?php echo date('d/m/Y'); ?> | Day: <?php echo date('l'); ?> | Time: <?php echo date('H:i:s'); ?></div>
        </header>

        <!-- Current Meal Section -->
        <main>
            <section class="section current-meal">
                <h2>Current Meal</h2>
                <div class="meal-display">
                    <p id="mealType">Current meal:</p>
                    <p id="foodItem">Category:</p>
                    <button id="ingredientButton">Click here to see ingredients</button>
                </div>
            </section>

           <!-- Previous and Next Meals Section -->
        <div class="side-meals">
            <div id="previousMeal" class="meal-display">
                <p class="meal-type">Previous meal:</p>
                <p class="meal-content">Category:</p>
                <button class="ingredientButton">Click here to see ingredients</button>
         </div>
            <div id="nextMeal" class="meal-display">
                 <p class="meal-type">Next meal:</p>
                <p class="meal-content">Category:</p>
                <button class="ingredientButton">Click here to see ingredients</button>
            </div>
        </div>
            </div>
        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>
