<?php

// NOTE: API endpoint for frontend

// STUB: create sql connection params
$serverName = "localhost";
$username = "root";
$password = "";
$databaseName = "scandiweb_backend";
$dsn = 'mysql:dbname=scandiweb_backend;host=localhost';

$response = array();

// STUB: create sql connection query
$dbh = new PDO(
  $dsn,
  $username,
  $password,
  array(
      PDO::ATTR_EMULATE_PREPARES => false
  )
);

try {
  $sql = 'SELECT `id`, `sku`, `name`, `price`, `dimension`, `unit`, `checked` FROM php_backend';
  $stmt = $dbh->prepare($sql);
  $stmt->execute();

  header("Content-Type: JSON");
  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

    $response[] = $row;
  }
  print_r(json_encode($response));

} catch (PDOException $e) {
  error_log($e->getMessage());
}