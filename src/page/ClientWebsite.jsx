import { BsPatchExclamation } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoSend } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";

function ClientWebsite() {
  return (
    <>
      <div className="relative h-screen">
        <header className="flex items-center justify-center gap-2 border-b-[0.1px] bg-red-50/50 py-3 text-red-500">
          <BsPatchExclamation size={20} /> Chatbot not working as intended
        </header>
        <main className="absolute right-2 bottom-2">
          <div className="relative h-[20rem] w-[15rem] overflow-hidden rounded-lg border-[0.5px] border-gray-300 bg-white shadow-md lg:h-[30rem] lg:w-[20rem]">
            <div className="flex items-center justify-between bg-blue-500 p-3 text-white">
              <span className="flex items-center gap-1">
                <img src="/logo.png" alt="Logo" className="max-h-[1.2rem]" />
                <b className="text-xs">Beyound AI</b>
              </span>
              <span className="flex items-center gap-2">
                <HiOutlineDotsVertical size={20} />
                <IoClose size={20} />
              </span>
            </div>
            <div className="m-2 flex flex-col gap-2 text-xs">
              <span className="w-fit rounded-xl bg-blue-200 p-1 px-2">
                Hello !!
              </span>
              <span className="w-fit rounded-xl bg-blue-200 p-1 px-2">
                How are You??
              </span>
            </div>
            <form className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 items-center justify-between border-t-[0.5px] border-gray-300 p-2 text-xs">
              <label className="flex gap-1 items-center">
                <MdDriveFileRenameOutline className="text-gray-400" size={15}/>
                <input
                  type="text"
                  placeholder="Enter Your Message..."
                  className="outline-none"
                />
              </label>
              <button className="cursor-pointer pl-2 text-blue-500">
                <IoSend size={15} />
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default ClientWebsite;
