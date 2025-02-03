import { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Input from "./Input";
import Button from "./Button";

function UserResgistration({ setForm }) {
  const [enterValue, setEnterValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleInputChange(identifier, value) {
    setEnterValue((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setForm();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="m-10 my-7 space-y-8">
        <h2 className="relative left-3 mb-7 rounded-r-full bg-blue-50 p-2 text-center text-[1.7rem] font-semibold text-gray-700 before:absolute before:top-1/2 before:-left-3 before:h-full before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-blue-500">
          User Registration
        </h2>
        <Input  
          name="name"
          type="text"
          value={enterValue.name}
          placeholder="Enter your name"
          onChange={(event) => handleInputChange("name", event.target.value)}
          Icon={MdDriveFileRenameOutline}
        />

        <Input
          name="email"
          type="email"
          value={enterValue.email}
          placeholder="Enter your email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          Icon={HiOutlineMail}
        />

        <Input
          name="password"
          type="password"
          value={enterValue.password}
          placeholder="Enter Passoword"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          Icon={RiLockPasswordLine}
        />
        <Button btnName="Send Varification Code" type="submit" />
      </form>
      <div className="mx-auto mb-5 flex w-full max-w-[80%] flex-col gap-7 text-center">
        <div className="relative text-gray-500/90">
          <span className="absolute top-1/2 left-1/2 z-50 w-fit -translate-x-1/2 -translate-y-1/2 bg-white px-1.5">
            or Continue with
          </span>
          <span className="absolute top-1/2 left-0 -z-0 h-[0.5px] w-full -translate-y-1/2 bg-gray-500/90"></span>
        </div>
        <button className="flex translate-y-0 cursor-pointer items-center justify-center gap-2 rounded border-[0.5px] border-blue-400 py-2 font-medium tracking-widest transition-all duration-300 ease-in-out hover:scale-105 active:translate-y-1">
          <FcGoogle size={25} />
          Google
        </button>
      </div>
    </div>
  );
}

export default UserResgistration;
