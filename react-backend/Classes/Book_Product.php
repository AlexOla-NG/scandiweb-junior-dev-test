<?php

// STUB: this will have the protected weight prop, which will be retrieved using getDimension method

require_once 'Product.php';
class Book_Product extends Product
{
  protected string $unit = 'kg';
  protected string $weight;

  public function __construct($sku, $name, $price, $weight)
  {

    parent::__construct($sku, $name, $price);

    $this->weight = $weight;

  }

  // STUB: create getter
  public function getDimension(): string
  {
    return $this->weight;
  }

}