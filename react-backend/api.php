<?php

// NOTE: API endpoint for frontend

// TODO: stopped here
// fix error with checked column being converted to string when json_encode is called on $response

// STUB: create sql connection params
$serverName = "localhost";
$username = "root";
$password = "";
$databaseName = "scandiweb_backend";

$con = mysqli_connect($serverName, $username, $password, $databaseName);
$response = array();

if ($con) {

  // STUB: convert sql database values to json
  $sql = "SELECT `id`, `sku`, `name`, `price`, `dimension`, `unit`, `checked` FROM php_backend";
  $result = mysqli_query($con, $sql);

  if ($result) {
    header("Content-Type: JSON");
    while ($row = mysqli_fetch_assoc($result)) {
      $response[] = $row;
    }

    print_r(json_encode($response));
  }
}