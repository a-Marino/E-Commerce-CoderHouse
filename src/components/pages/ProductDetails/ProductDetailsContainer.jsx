import { ProductDetails } from "./ProductDetails";
import { ProductsMock } from "../../../productsMock";
import { useEffect, useState } from "react";

export const ProductDetailsContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  let id = 2;

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log(data);
  };

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

  return (
    <div>
      {productSelected.id != undefined && (
        <ProductDetails product={productSelected} onAdd={onAdd} />
      )}
    </div>
  );
};
