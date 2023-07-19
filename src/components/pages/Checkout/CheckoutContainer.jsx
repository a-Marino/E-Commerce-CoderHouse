import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const totalPrice = getTotalPrice();
  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const [orderId, setOrderId] = useState(null);
  const [loaderIsVisible, setLoaderIsVisible] = useState(false);

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phoneNumber: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: totalPrice,
      };

      setLoaderIsVisible(true);

      let ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then((res) => {
        setOrderId(res.id);
      });

      clearCart();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please enter a First Name").min(3).max(15),
      lastName: Yup.string().required("Please enter a Last Name").min(3).max(20),
      email: Yup.string().email().required("Please enter a valid email address"),
      address: Yup.string().required("Please enter an address").min(5),
      phoneNumber: Yup.string()
        .required("Please enter a valid phone number")
        .matches(phoneRegEx, "Phone number is not valid"),
    }),
  });

  return (
    <>
      {orderId ? (
        <div className="h-screen mt-32 px-10 flex flex-col items-center space-y-5">
          <h1 className="text-xl">Your purchase has been successful. Your recipt number is:</h1>
          <span className="text-2xl font-bold">{orderId}</span>
          <Link
            to="/"
            className="md:w-[50%] w-full h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500 flex justify-center items-center"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <Checkout
          totalPrice={totalPrice}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          loaderIsVisible={loaderIsVisible}
          values={values}
          cart={cart}
        />
      )}
    </>
  );
};
