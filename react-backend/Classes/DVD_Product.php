<?php

// STUB: this will have the protected size prop, which will be retrieved using getDimension method

require_once 'Product.php';
class DVD_Product extends Product
{
  protected string $unit = 'mb';

  public function __construct(
    protected string $sku,
    protected string $name,
    protected string $price,
    protected string $size
  )
  {

    parent::__construct($sku, $name, $price);

  }

  // STUB: create getter
  public function getDimension(): string
  {
    return $this->size;
  }

}