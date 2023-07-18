import { ProductDetails } from "./ProductDetails";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

export const ProductDetailsContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  // States para actualizar el precio y el stock cuando se cambia la version de memoria
  const [price, setPrice] = useState();
  const [specStock, setSpecStock] = useState();
  const [specSelectedId, setSpecSelectedId] = useState();
  const [isStockAvailable, setIsStockAvailable] = useState(false);

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
    };
    addToCart(data);
  };

  useEffect(() => {
    const getTotalStock = () => {
      const total = productSelected.spec.reduce((acc, element) => {
        return acc + element.stock;
      }, 0);
      return total;
    };

    if (productSelected.spec) {
      if (getTotalStock() > 0) {
        setIsStockAvailable(true);
        setPrice(productSelected.spec[0].price);

        setSpecSelectedId(() => {
          if (productSelected.spec[0].stock === 0) {
            return 2;
          }
          return 1;
        });

        setSpecStock(() => {
          if (productSelected.spec[0].stock === 0) {
            return productSelected.spec[1].stock;
          }
          return productSelected.spec[0].stock;
        });
      }
    }
  }, [productSelected]);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
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
          isStockAvailable={isStockAvailable}
          specSelectedId={specSelectedId}
        />
      )}
    </div>
  );
};
