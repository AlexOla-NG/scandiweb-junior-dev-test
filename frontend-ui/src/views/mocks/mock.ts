import { ISingleProduct } from "../../components/SingleProduct/ISingleProduct";

const productListData: ISingleProduct[] = [
  {
    id: 1,
    sku: "ttw001",
    name: "chair",
    price: 23.0,
    dimension: "23x12x10",
    unit: "cm",
    checked: false,
  },
  {
    id: 2,
    sku: "ttw002",
    name: "god of war",
    price: 69.0,
    dimension: "400",
    unit: "mb",
    checked: false,
  },
  {
    id: 3,
    sku: "ttw003",
    name: "lord of the flies",
    price: 123.0,
    dimension: "320",
    unit: "kg",
    checked: false,
  },
  {
    id: 4,
    sku: "ttw004",
    name: "table",
    price: 29.99,
    dimension: "17x16x14",
    unit: "cm",
    checked: false,
  },
];

export { productListData };
