<?php
include "top_menu.php";
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <form class="form" action="login.php" method="post">
      <div class="title">
        <h2>Login</h2>
      </div>
      <div class="half">
        <div class="item">
          <label for="">Email</label>
          <input type="text" name="email" required value="">
        </div>
        <div class="item">
          <label for="">Password</label>
          <input type="password" name="password" required value="">
        </div>
        <div class="action">
        <input type="submit" name = "register" value = "REGISTER" >
      </div>
    </form>
  </body>
</html>