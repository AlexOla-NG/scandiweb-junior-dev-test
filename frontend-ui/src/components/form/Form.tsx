import React, { useState } from "react";

const CATEGORIES: string[] = ["DVD", "Furniture", "Book"];

const Form = () => {
  const [category, setCategory] = useState<string>("");

  // TODO: stopped here
  // add onchange logic
  // conditionally render output depending on category value

  const handleChange = () => {};

  return (
    <form id="product_form">
      <label htmlFor="sku">
        SKU <input type="text" id="sku" />
      </label>
      <label htmlFor="name">
        Name <input type="text" id="name" />
      </label>
      <label htmlFor="price">
        Price ($) <input type="number" id="price" step="0.01" />
      </label>
      <label htmlFor="productType">
        Type Switcher{" "}
        <select id="productType" value={category} onChange={handleChange}>
          {CATEGORIES.map((elem, index) => {
            return <option key={index}>{elem}</option>;
          })}
        </select>
      </label>
    </form>
  );
};

export default Form;
