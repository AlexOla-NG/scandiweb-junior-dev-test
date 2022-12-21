import React from "react";
import HomeDashboard from "../components/dashboards/HomeDashboard";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import { productListData } from "./mocks/mock";

const ProductList = () => {
  return (
    <div>
      <HomeDashboard />
      <main className="product-wrapper">
        {productListData.map((product) => {
          return <SingleProduct key={product.id} {...product} />;
        })}
      </main>
    </div>
  );
};

export default ProductList;
