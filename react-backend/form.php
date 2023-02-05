<?php

// NOTE: handle data received from frontend

session_start();

require_once './Classes/Action.php';

// STUB: when user submits form
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  $sku = $_POST['sku'];
  $name = $_POST['name'];
  $price = $_POST['price'];
  $productType = $_POST['productType'];

  $addProduct = new Action();
  $addProduct->addProduct($sku, $name, $price, $productType);

}