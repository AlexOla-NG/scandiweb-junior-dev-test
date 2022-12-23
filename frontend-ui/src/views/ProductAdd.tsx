import React from "react";
import ProductAddDashboard from "../components/dashboards/ProductAddDashboard";
import Form from "../components/form/Form";

const ProductAdd = () => {
  const handleSubmit = () => {
    // event.preventDefault();
    console.log(FormData);
  };
  return (
    <div>
      <ProductAddDashboard submit={handleSubmit} />
      <Form submit={handleSubmit} />
    </div>
  );
};

export default ProductAdd;
