import { Input } from "@nextui-org/react";

export const Checkout = ({ totalPrice }) => {
  return (
    <div className="h-screen mt-28 flex flex-col px-10">
      <div className="flex flex-col md:flex-row md:justify-between w-full border-b pb-2">
        <h1 className="text-2xl font-medium">Checkout</h1>
        <span className="text-blue-500 md:self-end">
          Order summary: {totalPrice} USD
        </span>
      </div>
      <span className="py-10 font-semibold text-4xl">
        Now fill out your information.
      </span>
      {/* FORM */}
      <div className="flex flex-col md:w-[50%] space-y-10">
        <Input
          bordered
          labelPlaceholder="First Name"
          color="primary"
          fullWidth
          required="true"
        />
        <Input
          bordered
          labelPlaceholder="Last Name"
          color="primary"
          fullWidth
          required="true"
        />
        <Input
          bordered
          labelPlaceholder="Email"
          type="email"
          color="primary"
          fullWidth
          required="true"
        />
        <Input
          bordered
          labelPlaceholder="Address"
          color="primary"
          fullWidth
          required="true"
        />
      </div>
      <button className="h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500 md:w-[50%]  items-center mt-10">
        Buy
      </button>
    </div>
  );
};
