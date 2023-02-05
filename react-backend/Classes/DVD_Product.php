<?php

// STUB: this will have the protected size prop, which will be retrieved using getDimension method

require_once 'Product.php';
class DVD_Product extends Product
{
  protected string $unit = 'mb';
  protected string $size;

  public function __construct($sku, $name, $price, $size)
  {

    parent::__construct($sku, $name, $price);

    $this->size = $size;

  }

  // STUB: create getter
  public function getDimension(): string
  {
    return $this->size;
  }

}