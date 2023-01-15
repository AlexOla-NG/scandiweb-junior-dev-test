import React from "react";
import { useNavigate } from "react-router-dom";

const ProductAddDashboard = () => {
  const navigate = useNavigate();

  // STUB: throw input validation error if form element's child controls their validation constraints; else submit form
  const handleSave = () => {
    const form = document.querySelector("#product_form") as HTMLFormElement;
    if (!form.reportValidity()) {
      return;
    }

    // navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="dashboard-wrapper">
        <h1>Product Add</h1>
        <div className="btn-wrapper">
          <button className="btn" onClick={handleSave} form="product_form">
            Save
          </button>
          <button className="btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default ProductAddDashboard;
