<?php

// NOTE: handle data received from frontend

session_start();

require_once './Classes/DVD_Product.php';
require_once './Classes/Furniture_Product.php';
require_once './Classes/Book_Product.php';

// STUB: when user submits form
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  $sku = $_POST['sku'];
  $name = $_POST['name'];
  $price = $_POST['price'];
  $productType = $_POST['productType'];

  // STUB: initialize product subclass depending on productType
  if ($productType == 'Book') {
    $weight = $_POST['weight'];
    $newProduct = new Book_Product($sku, $name, $price, $weight);
  }
  if ($productType == 'DVD') {
    $size = $_POST['size'];
    $newProduct = new DVD_Product($sku, $name, $price, $size);
  }
  if ($productType == 'Furniture') {
    $height = $_POST['height'];
    $length = $_POST['length'];
    $width = $_POST['width'];
    $newProduct = new Furniture_Product($sku, $name, $price, $height, $length, $width);
  }

  // STUB: create sql connection params
  $serverName = "localhost";
  $username = "root";
  $password = "";
  $databaseName = "scandiweb_backend";
  $dsn = 'mysql:dbname=scandiweb_backend;host=localhost';

  // STUB: create sql connection query
  $dbh = new PDO($dsn, $username, $password);

  try {
    $sql = 'INSERT INTO php_backend (sku, name, price, dimension, unit, checked) VALUES(:sku, :name, :price, :dimension, :unit, :checked)';
    $stmt = $dbh->prepare($sql);
    $stmt->execute([
      'sku' => $newProduct->getSKU(),
      'name' => $newProduct->getName(),
      'price' => $newProduct->getPrice(),
      'dimension' => $newProduct->getDimension(),
      'unit' => $newProduct->getUnit(),
      'checked' => $newProduct->getChecked(),

    ]);
  } catch (PDOException $e) {
    error_log($e->getMessage());
    if ($e->getCode() == 23000) {
      echo 'The sku already exists.';
    }
  }

}