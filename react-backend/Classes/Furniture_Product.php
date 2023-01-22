<?php

// STUB: this will have the protected height, length, width prop, which will be retrieved using getDimension method

require_once 'Product.php';
class Furniture_Product extends Product
{
  protected string $unit = 'cm';

  public function __construct(
    protected string $sku,
    protected string $name,
    protected string $price,
    protected string $height,
    protected string $length,
    protected string $width
  )
  {
    parent::__construct($sku, $name, $price);

  }

  // STUB: create getter
  public function getDimension(): string
  {
    return $this->height . 'x' . $this->width . 'x' . $this->length;
  }

}