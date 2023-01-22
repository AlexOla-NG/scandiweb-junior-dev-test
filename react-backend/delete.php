<?php

// NOTE: get checked data from frontend, delete from database

require_once 'connection.php';

// STUB: get data from frontend
$data = file_get_contents("php://input");

if ($data) {

  // STUB: convert data to assoc array
  $data_array = json_decode($data, true);

  var_dump($data_array);


  // STUB: create sql connection query
  $dbh = new PDO($dsn, $username, $password);
  try {
    for ($i = 0; $i < count($data_array); $i++) {
      $sql = 'DELETE FROM php_backend WHERE id = :id';
      $stmt = $dbh->prepare($sql);
      $stmt->execute([
        'id' => $data_array['id' . $i],
      ]);
    }
  } catch (PDOException $e) {
    error_log($e->getMessage());
    echo ($e->getMessage());
  }

}