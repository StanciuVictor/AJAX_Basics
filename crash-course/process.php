<?php
// https://www.youtube.com/watch?v=82hnvUYY6QA
// Connect to a database
$conn = mysqli_connect('localhost', 'root', '', 'ajax_basics');

echo 'Processing...';

// Check for a GET variable (passed varaibles)
// (example: ?name=Victor&hobby=coding)
if(isset($_POST['name'])){
  // echo 'GET: Your name is '. $_GET['name'];   // output: Your name is Victor

  // For database
  // $name is gonna equal whatever is passed into the inpot form
  // mysqli_real_escape_string important for security
  $name = mysqli_real_escape_string($conn, $_POST['name']);
  // SQL query - insert the name in the users table
  $query = "INSERT INTO users(name) VALUES('$name')";
  // Check for the query
  if(mysqli_query($conn, $query)){
    // If everything is ok
    echo 'User Added...';
  } else {
    // If something went wrong, output the error
    echo 'ERROR: '. mysqli_error($conn);
  }
}

// Check for a POST variable (passed varaibles)

if(isset($_GET['name'])){
  echo 'GET: Your name is '. $_GET['name'];   // output: Your name is Victor
}