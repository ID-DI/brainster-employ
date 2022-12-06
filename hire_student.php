<?php

// Connection to DataBase
$host = "localhost";
$username = "ID_DI";
$password =  "Vera@2701#123";
$database = "employment";

$conn = new mysqli($host, $username, $password, $database);

  
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$select = $_POST['select']; 
$companyname = $_POST ['companyname'];
$contactphone = $_POST ['contactphone'];

$sql = "INSERT INTO form (`fullname`, `email`, `select`, `companyname`, `contactphone`)
VALUES ('$fullname', '$email', '$select', '$companyname', '$contactphone')";

mysqli_query($conn, $sql);

header("Location: thanks.html");

?> 

