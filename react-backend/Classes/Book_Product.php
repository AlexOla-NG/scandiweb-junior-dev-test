<?php

// STUB: this will have the protected weight prop, which will be retrieved using getDimension method

require_once 'Product.php';
class Book_Product extends Product
{
  protected string $unit = 'kg';

  public function __construct(
    protected string $sku,
    protected string $name,
    protected string $price,
    protected string $weight
  )
  {

    parent::__construct($sku, $name, $price);

  }

  // STUB: create getter
  public function getDimension(): string
  {
    return $this->weight;
  }

}