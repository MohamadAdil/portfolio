<?php
$host = 'localhost'; // Your database host
$user = 'root';      // Your database username
$pass = '';          // Your database password
$dbname = 'portfolio'; // Your database name

// Create connection
$conn = mysqli_connect($host, $user, $pass, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
