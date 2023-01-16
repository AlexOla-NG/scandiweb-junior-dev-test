import React, { useState } from "react";
import { ISingleProduct } from "./ISingleProduct";

// TODO: stopped here
// fix the checkbox logic. toggling should affect the main database
// this depends on backend completion

const SingleProduct = ({
  sku,
  name,
  price,
  dimension,
  unit,
  checked,
}: ISingleProduct) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  // STUB: toggle output based on unit
  let output;

  if (unit === "cm") {
    output = "Dimension";
  } else if (unit === "kg") {
    output = "Weight";
  } else {
    output = "Size";
  }

  // STUB: conditionally append isDVD if item is DVD
  let isDVD;
  if (unit === "mb") {
    isDVD = "DISC";
  }

  return (
    <div className="single-product-wrapper">
      <input
        type="checkbox"
        className="delete-checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <p>{sku}</p>
      <p>
        {name} {isDVD}
      </p>
      <p>{price}.00 $</p>
      {/* <p>{price.toFixed(2)} $</p> */}
      <p>
        {output}: {dimension} <span>{unit}</span>
      </p>
    </div>
  );
};

export default SingleProduct;
