import { MdClose } from "react-icons/md";

function PageData({ data, setShowData }) {
  return (
    <div
      className={`fixed top-0 left-0 z-50 grid h-full w-full place-items-center bg-black/40 backdrop-blur-xs ${data ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
    >
      <div className="relative grid h-2/3 w-[80%] place-items-center rounded-lg bg-white px-5 font-medium shadow-lg md:max-h-[1000px] md:max-w-[600px]">
        <button
          onClick={() => setShowData(null)}
          className="absolute -top-3 -right-3 cursor-pointer rounded-full bg-gray-50 text-gray-600 shadow shadow-gray-500 transition-all duration-300 ease-in-out hover:scale-110 active:scale-100"
        >
          <MdClose size={40} />
        </button>
        {data}
      </div>
    </div>
  );
}

export default PageData;
