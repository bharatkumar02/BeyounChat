import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Design() {
  return (
    <div className="rounded-b-full bg-blue-500 pt-7 shadow-lg">
      <div className="relative z-20 mx-auto flex size-[350px] flex-col items-center justify-center gap-7 overflow-hidden rounded-full bg-cover bg-center bg-no-repeat text-white shadow-[-5px_5px_5px_#00000033,-5px_5px_5px_#00000033] before:absolute before:-z-20 before:size-full before:bg-blue-600/50 before:bg-[url('/blob.svg')] before:blur-[2px]">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="size-16" />
          <span className="text-[2rem] font-semibold">Beyound Chat</span>
        </div>
        <h1 className="text-center text-xl text-balance">
          Power Up Your Website with AI Conversations
        </h1>
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
    </div>
  );
}

export default Design;
