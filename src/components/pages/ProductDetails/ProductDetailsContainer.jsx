import { ProductDetails } from "./ProductDetails";
import { ProductsMock } from "../../../ProductsMock";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const ProductDetailsContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  // States para actualizar el precio y el stock cuando se cambia la version de memoria
  const [price, setPrice] = useState();
  const [specStock, setSpecStock] = useState();
  const [specSelectedId, setSpecSelectedId] = useState();

  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  // funcion para agregar items al carrito

  // funcion para actualizar el precio y el stock segun el spec seleccionado
  const onSpecChange = (e) => {
    setPrice(e.target.getAttribute("data-price"));
    setSpecStock(e.target.getAttribute("data-stock"));
    setSpecSelectedId(e.target.id);
  };

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
      spec: productSelected.spec[specSelectedId - 1],
      //  Agregue el spec seleccionado para su futuro descuento de stock y suma de precio
    };
    addToCart(data);
  };

  useEffect(() => {
    let productFind = ProductsMock.find(
      (product) => product.id === parseInt(id)
    );
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
        <ProductDetails
          product={productSelected}
          onAdd={onAdd}
          price={price}
          specStock={specStock}
          onSpecChange={onSpecChange}
        />
      )}
    </div>
  );
};
