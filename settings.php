<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Profile</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style4.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <ul>
                <li><a href="#">Current Meal</a></li>
                <li><a href="#">Live Weekly Menu</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Meal Planner</a></li>
                <li><a href="#">Add Reminders</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    </header>

    <div class="main-content">
        <div class="manage-profile">
            <h1>Manage Profile</h1>
            <form>
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" placeholder="Edit first name...">

                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" placeholder="Edit last name...">

                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Edit email...">

                <label for="allergies">Allergies</label>
                <select id="allergies">
                    <option value="">Select...</option>
                </select>

                <label for="other">Other</label>
                <input type="text" id="other" placeholder="Other...">

                <label for="severity">Severity of Allergy</label>
                <select id="severity">
                    <option value="">Select...</option>
                </select>

                <button type="submit">Save</button>
                <a href="#">Cancel</a>
            </form>

            <img src="profile-picture.png" alt="Profile" class="profile-picture">

            <div class="logout">
                <a href="#">Logout</a>
            </div>
        </div>
    </div>
</body>
</html>
