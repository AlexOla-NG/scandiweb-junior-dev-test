import React from "react";
import { ISingleProduct } from "./ISingleProduct";

// TODO: stopped here
// fix the checkbox logic. toggling should affect the main database

const SingleProduct = ({
  sku,
  name,
  price,
  dimension,
  unit,
  checked,
}: ISingleProduct) => {
  let output;

  if (unit === "cm") {
    output = "Dimension";
  } else if (unit === "kg") {
    output = "Weight";
  } else {
    output = "Size";
  }

  return (
    <div className="single-product-wrapper">
      <input
        type="checkbox"
        className="delete-checkbox"
        defaultChecked={checked}
      />
      <p>{sku}</p>
      <p>{name}</p>
      <p>{price} $</p>
      <p>
        {output}: {dimension} {unit}
      </p>
    </div>
  );
};

export default SingleProduct;
