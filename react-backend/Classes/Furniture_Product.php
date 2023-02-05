<?php

// STUB: this will have the protected height, length, width prop, which will be retrieved using getDimension method

require_once 'Product.php';
class Furniture_Product extends Product
{
  protected string $unit = 'cm';
  protected string $height;
  protected string $length;
  protected string $width;

  public function __construct($sku, $name, $price, $height, $width, $length)
  {
    parent::__construct($sku, $name, $price);

    $this->height = $height;
    $this->width = $width;
    $this->length = $length;

  }

  // STUB: create getter
  public function getDimension(): string
  {
    return $this->height . 'x' . $this->width . 'x' . $this->length;
  }

}