<?php
include('config.php');
session_start();

// Handle the form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $allergies = $_POST['allergies'];
    $severity = $_POST['severity'];
    $otherAllergy = $_POST['other_allergy'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Combine allergies and other allergy specification
    $allergyDetails = ($allergies === 'Other' && !empty($otherAllergy)) ? $otherAllergy : $allergies;

    // Create the username using first and last name
    $username = strtolower($firstName . '.' . $lastName);

    // Insert student account into the database
    $sql = "INSERT INTO users (username, password, role, allergies) VALUES (?, ?, 'student', ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sss', $username, $password, $allergyDetails);

    if ($stmt->execute()) {
        // Set a success message and redirect to the login page
        $_SESSION['signup_success'] = "Student account created successfully. Your username is: $username";
        header('Location: selection.php');
        exit();
    } else {
        $error = "Error creating account: " . $stmt->error;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup - Meal Management</title>
    <link rel="stylesheet" href="style5.css">
</head>

<body>
    <div class="signup-container">
        <form action="signup.php" method="POST" class="form-card">
            <h2>Create Student Account</h2>
            <?php
            if (!empty($success)) echo "<p class='success'>$success</p>";
            if (!empty($error)) echo "<p class='error'>$error</p>";
            ?>
            <label for="first_name">First Name:</label>
            <input type="text" id="first_name" name="first_name" placeholder="Enter the first name..." required>

            <label for="last_name">Last Name:</label>
            <input type="text" id="last_name" name="last_name" placeholder="Enter the last name..." required>

            <label for="allergies">Allergies:</label>
            <select id="allergies" name="allergies" required>
                <option value="None">None</option>
                <option value="Peanuts">Peanuts</option>
                <option value="Dairy">Dairy</option>
                <option value="Gluten">Gluten</option>
                <option value="Shellfish">Shellfish</option>
                <option value="Soy">Soy</option>
                <option value="Eggs">Eggs</option>
                <option value="Other">Other</option>
            </select>

            <label for="severity">Severity of Allergy:</label>
            <select id="severity" name="severity" required>
                <option value="Mild">Mild</option>
                <option value="Moderate">Moderate</option>
                <option value="Severe">Severe</option>
            </select>

            <label for="other_allergy">If other, please specify below:</label>
            <input type="text" id="other_allergy" name="other_allergy" placeholder="Specify other allergies...">

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter student's email..." required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter password..." required>

            <button type="submit" class="btn">Create Account</button>
        </form>
    </div>
</body>

</html>
