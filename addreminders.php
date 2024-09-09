<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meal Reminder</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style3.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <ul>
                <li><a href="main.php">Current Meal</a></li>
                <li><a href="live-weekly-menu">Live Weekly Menu Calendar</a></li>
                <li><a href="#meal-planner">Meal Planner</a></li>
                <li><a href="add-reminders">Add Reminders</a></li>
                <li><a href="settings">Settings</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="reminder-page">
            <div class="reminder-input">
                <h2>Select Week:</h2>
                <select id="weekSelect">
                    <!-- Options will be populated by JavaScript -->
                </select>

                <h2>Select Day:</h2>
                <select id="daySelect">
                    <!-- Options will be populated by JavaScript -->
                </select>

                <h2>Select Meal:</h2>
                <select id="mealSelect">
                    <!-- Options will be populated by JavaScript -->
                </select>

                <button id="submitReminderButton">Submit Reminder</button>
            </div>
            <div class="reminder-list">
                <h2>List of Reminders:</h2>
                <ul id="reminderList">
                    <!-- Reminders will be dynamically added here -->
                </ul>
            </div>
        </section>
    </main>
    <script src="reminders.js"></script>
</body>
</html>
