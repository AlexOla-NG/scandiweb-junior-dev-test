<?php

// STUB: create abstract class that Book, DVD & furniture extends
// class will have the following protected props: sku, name, price, unit, checked, 

abstract class Product
{

  protected int $checked = 0;
  protected string $unit;
  protected string $sku;
  protected string $name;
  protected string $price;

  // STUB: initialize props
  public function __construct($sku, $name, $price)
  {
    $this->sku = $sku;
    $this->name = $name;
    $this->price = $price;
  }

  // STUB: create getters
  public function getSKU(): string
  {
    return $this->sku;
  }
  public function getName(): string
  {
    return $this->name;
  }
  public function getPrice(): string
  {
    return $this->price;
  }
  public function getUnit(): string
  {
    return $this->unit;
  }
  public function getChecked(): int
  {
    return $this->checked;
  }

}