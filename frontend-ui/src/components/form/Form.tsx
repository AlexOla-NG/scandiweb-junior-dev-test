import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CATEGORIES: string[] = ["DVD", "Furniture", "Book"];

type formDataObj = {
  [key: string]: string | File;
};

const Form = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  // STUB: handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const myFormData = new FormData(form);
    const formDataObj: formDataObj = {};

    myFormData.forEach((value, key) => (formDataObj[key] = value));

    const url = "https://juniortest-alexander-oweka.000webhostapp.com/form.php";
    // const url = "http://localhost/react-backend/form.php";
    axios
      .post(url, myFormData)
      .then((res) => {
        // STUB: if sku exists, popup alert; else navigate to home page
        if (res.data) {
          alert(res.data);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  let output;
  if (category === "DVD") {
    output = (
      <div className="type-output">
        <label htmlFor="size">
          Size (MB) <input type="number" name="size" id="size" required />
        </label>
        <p>Please provide size in Megabytes</p>
      </div>
    );
  } else if (category === "Furniture") {
    output = (
      <div className="type-output">
        <label htmlFor="height">
          Height (CM) <input type="number" name="height" id="height" required />
        </label>
        <label htmlFor="width">
          Width (CM) <input type="number" name="width" id="width" required />
        </label>
        <label htmlFor="length">
          Length (CM) <input type="number" name="length" id="length" required />
        </label>
        <p>Please provide dimensions in HxWxL format</p>
      </div>
    );
  } else if (category === "Book") {
    output = (
      <div className="type-output">
        <label htmlFor="weight">
          Weight (KG) <input type="number" name="weight" id="weight" required />
        </label>
        <p>Please provide weight in Kilograms</p>
      </div>
    );
  }

  return (
    <form id="product_form" className="form" onSubmit={handleSubmit}>
      <label htmlFor="sku">
        SKU <input type="text" name="sku" id="sku" required />
      </label>
      <label htmlFor="name">
        Name <input type="text" name="name" id="name" required />
      </label>
      <label htmlFor="price">
        Price ($){" "}
        <input type="number" name="price" id="price" step="0.01" required />
      </label>
      <label htmlFor="productType">
        Type Switcher{" "}
        <select
          id="productType"
          name="productType"
          value={category}
          onChange={handleChange}
          required
        >
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
