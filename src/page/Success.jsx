import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import ConfettieAnimation from "../components/ConfettiAnimation";

function Success() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-blue-100/80 lg:gap-10">
        <div className="mx-auto mt-10 size-36 rounded-full border-[10px] border-blue-400 bg-blue-500 p-5 shadow-lg outline-[20px] outline-blue-300">
          <img src="/complete.png" alt="Success" />
        </div>
        <h1 className="text-center text-2xl leading-9 lg:text-3xl">
          Integration Complete – Your Chatbot is Ready!
        </h1>
        <div className="space-y-4">
          {["Test chatbot", "Test Integration"].map((item, index) => (
            <button
              key={index}
              className="w-full translate-y-0 cursor-pointer rounded bg-blue-500 py-3 font-medium tracking-widest text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 active:translate-y-1"
            >
              {item}
            </button>
          ))}
        </div>
        <ul className="flex w-full items-center justify-center gap-7">
          {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Item, index) => (
            <li
              key={index}
              className="cursor-pointer rounded-full bg-white p-2 text-blue-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:shadow-black/30"
            >
              <Item size={20} />
            </li>
          ))}
        </ul>
      </div>
      <ConfettieAnimation />
    </>
  );
}

export default Success;
