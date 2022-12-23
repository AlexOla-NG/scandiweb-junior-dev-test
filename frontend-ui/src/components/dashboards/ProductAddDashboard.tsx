import React from "react";
import { useNavigate } from "react-router-dom";
import { ISubmit } from "../form/IForm";

// TODO: add logic to mass delete btn

const ProductAddDashboard = ({ submit }: ISubmit) => {
  const navigate = useNavigate();

  const handleClick = () => {
    submit();
    // navigate("/");
  };

  return (
    <header>
      <div className="dashboard-wrapper">
        <h1>Product Add</h1>
        <div className="btn-wrapper">
          <button className="btn" onClick={handleClick}>
            Save
          </button>
          <button className="btn" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default ProductAddDashboard;
