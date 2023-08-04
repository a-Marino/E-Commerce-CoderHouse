import { Button, Input } from "@nextui-org/react";
import { EmptyCart } from "../../common/EmptyCart/EmptyCart";

export const Checkout = ({
  totalPrice,
  handleSubmit,
  handleChange,
  loaderIsVisible,
  errors,
  values,
  cart,
}) => {
  return (
    <>
      {cart.length > 0 ? (
        <div className="min-h-screen  flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between border-b w-full pb-2 fixed z-[8] px-10 bg-white/90 backdrop-blur-md">
            <h1 className="text-2xl font-medium">Checkout</h1>
            <span className="text-blue-500 md:self-end">Order summary: {totalPrice} USD</span>
          </div>
          <span className="py-10 font-semibold text-4xl px-10 mt-5">
            Now fill out your information.
          </span>
          {/* FORM */}
          <form className="flex flex-col md:w-[50%] space-y-10 z-0 px-10">
            <Input
              label="First Name"
              variant="bordered"
              name="firstName"
              color="primary"
              value={values.firstName || ""}
              errorMessage={errors.firstName}
              onChange={handleChange}
            />
            <Input
              label="Last Name"
              name="lastName"
              value={values.lastName || ""}
              variant="bordered"
              color="primary"
              errorMessage={errors.lastName}
              onChange={handleChange}
            />
            <Input
              bordered
              label="Email"
              variant="bordered"
              value={values.email || ""}
              name="email"
              type="email"
              color="primary"
              errorMessage={errors.email}
              onChange={handleChange}
            />
            <Input
              label="Street Address"
              variant="bordered"
              value={values.address || ""}
              name="address"
              color="primary"
              errorMessage={errors.address}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              variant="bordered"
              value={values.phoneNumber || ""}
              name="phoneNumber"
              color="primary"
              errorMessage={errors.phoneNumber}
              onChange={handleChange}
            />
          </form>
          <Button
            className="my-5 mx-10 md:w-[44%]"
            color="primary"
            onClick={handleSubmit}
            isLoading={loaderIsVisible}
          >
            Buy
          </Button>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
