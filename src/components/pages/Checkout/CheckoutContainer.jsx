import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const CheckoutContainer = () => {
  const { getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();
  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phoneNumber: "",
    },
    onSubmit: (data) => {
      console.log("form submited");
      console.log(data);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Please enter a First Name")
        .min(3)
        .max(15),
      lastName: Yup.string()
        .required("Please enter a Last Name")
        .min(3)
        .max(20),
      email: Yup.string()
        .email()
        .required("Please enter a valid email address"),
      address: Yup.string().required("Please enter an address").min(5),
      phoneNumber: Yup.string()
        .required("Please enter a valid phone number")
        .matches(phoneRegEx, "Phone number is not valid"),
    }),
  });

  return (
    <Checkout
      totalPrice={totalPrice}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};
