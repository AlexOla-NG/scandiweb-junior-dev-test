<?php

// STUB: this class contains action logic for uploading, getting, & deleting products

require_once 'Dbn_Connection.php';
require_once 'DVD_Product.php';
require_once 'Furniture_Product.php';
require_once 'Book_Product.php';

class Action extends Dbn_Connection
{

  // STUB: add product to database
  public function addProduct($sku, $name, $price, $productType): void
  {
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

    // STUB: create sql connection query
    $dbh = new PDO(parent::getDSN(), parent::getUsername(), parent::getPassword());

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

  public function getProducts(): void
  {
    $response = array();

    // STUB: create sql connection query
    $dbh = new PDO(
      parent::getDSN(), parent::getUsername(), parent::getPassword(),
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
  }

  // STUB: delete function
  public function deleteProduct($data): void
  {
    // STUB: convert data to assoc array
    $data_array = json_decode($data, true);

    // STUB: create sql connection query
    $dbh = new PDO(parent::getDSN(), parent::getUsername(), parent::getPassword());
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
}