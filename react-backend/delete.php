<?php

// NOTE: get checked data from frontend, delete from database

// require_once 'connection.php';
require_once './Classes/Action.php';

// STUB: get data from frontend
$data = file_get_contents("php://input");

if ($data) {

  $deleteProduct = new Action();
  $deleteProduct->deleteProduct($data);

}