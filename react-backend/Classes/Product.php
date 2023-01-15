<?php

// STUB: create abstract class that Book, DVD & furniture extends
// class will have the following protected props: sku, name, price, unit, checked, 

class Product {

  protected bool $checked = false;
  protected string $unit;

  // STUB: initialize props
  public function __construct(
  protected string $sku,
  protected string $name,
  protected string $price,
  ) {

  }

  // STUB: create getters
  public function getSKU(): string {
    return $this->sku;
  }
  public function getName(): string {
    return $this->name;
  }
  public function getPrice(): string {
    return $this->price;
  }
  public function getUnit(): string {
    return $this->unit;
  }
  public function getChecked(): string {
    return $this->checked;
  }

}