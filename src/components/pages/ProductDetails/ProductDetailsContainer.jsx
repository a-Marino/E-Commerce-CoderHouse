import { ProductDetails } from "./ProductDetails";
import { ProductsMock } from "../../../productsMock";
import { useEffect, useState } from "react";

export const ProductDetailsContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const [stock, setStock] = useState();

  let id = 2;

  useEffect(() => {
    let productFind = ProductsMock.find((product) => product.id === id);

    //  EXPLICACION: Como puse que los celulares tengan varias opciones de memoria (ver ProductsMock.memory), cada version tiene su propio stock individual. Entonces lo que hice es agarrar el arreglo de memorias, adquirir el stock individual y sumarlos asi tener un stock total y poder pasarlo a los detalles

    const productStock = productFind.spec.map((spec) => {
      return spec.stock;
    });

    const stockTotal = productStock.reduce((val1, val2) => {
      return val1 + val2;
    });

    const fetchProducts = new Promise((res) => {
      res(productFind);
    });

    fetchProducts
      .then((res) => {
        setProductSelected(res);
        setStock(stockTotal);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {productSelected.id != undefined && (
        <ProductDetails product={productSelected} stock={stock} />
      )}
    </div>
  );
};
