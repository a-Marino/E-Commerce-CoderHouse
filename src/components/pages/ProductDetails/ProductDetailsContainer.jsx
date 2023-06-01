import { ProductDetails } from "./ProductDetails";
import { ProductsMock } from "../../../ProductsMock";
import { useEffect, useState } from "react";

export const ProductDetailsContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  let id = 2;

  useEffect(() => {
    let productFind = ProductsMock.find((product) => product.id === id);

    const fetchProducts = new Promise((res) => {
      res(productFind);
    });

    fetchProducts
      .then((res) => {
        setProductSelected(res);
      })
      .catch((err) => console.log(err));
  }, [id]);
  // TODO
  return (
    <div>
      {productSelected.id != undefined && (
        <ProductDetails product={productSelected} />
      )}
    </div>
  );
};
