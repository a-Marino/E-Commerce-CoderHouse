import { Input, Loading } from "@nextui-org/react";

export const Checkout = ({
  totalPrice,
  handleSubmit,
  handleChange,
  loaderIsVisible,
  errors,
}) => {
  return (
    <div className="h-screen mt-28 flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-between w-full border-b pb-2 sticky top-20 z-[8] px-10 py-2 bg-white/30 backdrop-blur-sm">
        <h1 className="text-2xl font-medium">Checkout</h1>
        <span className="text-blue-500 md:self-end">
          Order summary: {totalPrice} USD
        </span>
      </div>
      <span className="py-10 font-semibold text-4xl px-10">
        Now fill out your information.
      </span>
      {/* FORM */}
      <form className="flex flex-col md:w-[50%] space-y-10 z-0 px-10">
        <Input
          bordered
          labelPlaceholder="First Name"
          name="firstName"
          color="primary"
          fullWidth
          helperText={errors.firstName}
          helperColor="error"
          onChange={handleChange}
        />
        <Input
          bordered
          labelPlaceholder="Last Name"
          name="lastName"
          color="primary"
          fullWidth
          helperText={errors.lastName}
          helperColor="error"
          onChange={handleChange}
        />
        <Input
          bordered
          labelPlaceholder="Email"
          name="email"
          type="email"
          color="primary"
          fullWidth
          helperText={errors.email}
          helperColor="error"
          onChange={handleChange}
        />
        <Input
          bordered
          labelPlaceholder="Street Address"
          name="address"
          color="primary"
          fullWidth
          helperText={errors.address}
          helperColor="error"
          onChange={handleChange}
        />
        <Input
          bordered
          labelPlaceholder="Phone Number"
          name="phoneNumber"
          color="primary"
          fullWidth
          helperText={errors.phoneNumber}
          helperColor="error"
          onChange={handleChange}
        />
      </form>
      <button
        type="submit"
        onClick={handleSubmit}
        className="h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500 md:w-[44%] mt-10 mx-10"
      >
        <span className=""> Buy</span>
        {loaderIsVisible && (
          <Loading
            color="currentColor"
            size="xs"
            className="float-right mr-5 mt-1"
          />
        )}
      </button>
    </div>
  );
};
