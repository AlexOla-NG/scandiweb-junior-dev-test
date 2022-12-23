import React, { useState } from "react";
import { ISubmit } from "./IForm";

const CATEGORIES: string[] = ["DVD", "Furniture", "Book"];

// TODO: stopped here
// fix form submit logic

const Form = ({ submit }: ISubmit) => {
  const [category, setCategory] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    submit();
  };

  let output;
  if (category === "DVD") {
    output = (
      <div className="type-output">
        <label htmlFor="size">
          Size (MB) <input type="number" id="size" />
        </label>
        <p>Please provide size in Megabytes</p>
      </div>
    );
  } else if (category === "Furniture") {
    output = (
      <div className="type-output">
        <label htmlFor="height">
          Height (CM) <input type="number" id="height" />
        </label>
        <label htmlFor="width">
          Width (CM) <input type="number" id="width" />
        </label>
        <label htmlFor="length">
          Length (CM) <input type="number" id="length" />
        </label>
        <p>Please provide dimensions in HxWxL format</p>
      </div>
    );
  } else if (category === "Book") {
    output = (
      <div className="type-output">
        <label htmlFor="weight">
          Weight (KG) <input type="number" id="weight" />
        </label>
        <p>Please provide weight in Kilograms</p>
      </div>
    );
  }

  return (
    <form id="product_form" className="form" onSubmit={handleSubmit}>
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
          <option disabled value="">
            Select a category...
          </option>
          {CATEGORIES.map((elem, index) => {
            return (
              <option key={index} id={elem}>
                {elem}
              </option>
            );
          })}
        </select>
      </label>
      {output}
    </form>
  );
};

export default Form;
