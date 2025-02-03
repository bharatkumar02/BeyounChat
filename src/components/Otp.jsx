import { useState } from "react";
import { TbLockPassword } from "react-icons/tb";
import Input from "./Input";
import Button from "./Button";

function Otp({ setForm }) {
  const [enterValue, setEnterValue] = useState("");
  function handleInputChange(e) {
    setEnterValue(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setForm();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="m-10 my-7 space-y-8 md:my-auto md:h-fit"
    >
      <div className="space-y-4">
        <p className="text-center text-lg leading-7 text-gray-500 underline underline-offset-2">
          We have Sent a varification code to xyz9416@gmail.com
        </p>
        <Input
          name="otp"
          type="number"
          value={enterValue}
          placeholder="Enter OTP"
          onChange={handleInputChange}
          Icon={TbLockPassword}
          
        />
      </div>

      <Button btnName="Verify & Continue" type="submit"/>

      
    </form>
  );
}

export default Otp;
