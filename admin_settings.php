<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings - Meal Management Dashboard</title>
    <link rel="stylesheet" href="admin_style2.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
</head>

<body>
    <div class="sidebar">
        <h2>Meal Manager</h2>
        <ul>
            <li><a href="index.html" class="nav-link"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
            <li><a href="#" class="nav-link"><i class="fas fa-utensils"></i> Meals</a></li>
            <li><a href="#" class="nav-link"><i class="fas fa-chart-line"></i> Statistics</a></li>
            <li><a href="admin_settings.php" class="nav-link active"><i class="fas fa-cog"></i> Settings</a></li>
        </ul>
    </div>

    <div class="main-content">
        <header>
            <div class="header-title">
                <h1>Settings</h1>
            </div>
        </header>

        <section class="settings">
            <h3>Account Settings</h3>
            <form>
                <div class="setting-item">
                    <label for="username">Username:</label>
                    <input type="text" id="username" placeholder="Enter your username">
                </div>

                <div class="setting-item">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email">
                </div>

                <div class="setting-item">
                    <label for="notifications">Notifications:</label>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>

                <div class="setting-item">
                    <label for="theme">Theme:</label>
                    <select id="theme">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>

                <button type="submit" class="save-btn">Save Changes</button>
            </form>
        </section>
    </div>

    <script src="admin_script2.js"></script>
</body>

</html>
