import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeDashboard from "../components/dashboards/HomeDashboard";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import { productListData } from "./mocks/mock";
import { ISingleProduct } from "../components/SingleProduct/ISingleProduct";

const ProductList = () => {
  const [productList, setProductList] = useState<ISingleProduct[]>([]);

  useEffect(() => {
    const url = "http://localhost/react-backend/api.php";

    axios
      .get(url)
      .then((res) => setProductList(res.data))
      .catch((err) => console.log(err));
  }, [productList]);

  return (
    <div>
      <HomeDashboard />
      <main className="product-wrapper">
        {productList.length > 0 &&
          productList.map((product) => {
            return <SingleProduct key={product.id} {...product} />;
          })}
      </main>
    </div>
  );
};

export default ProductList;
