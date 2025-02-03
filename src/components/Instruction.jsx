import { FaRegCopy } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const Instruction = () => {
  const dummyCode = `
<!-- Chatbot Integration -->
<script src="https://your-chatbot-url.com/chatbot.js" defer></script>
  `;

  return (
    <div className="space-y-2 text-xs md:text-base">
      <h2 className="text-lg leading-6 font-semibold text-gray-700">
        Chatbot Integration Instructions
      </h2>
      <p className="text-gray-700">
        Copy and paste the following **code snippet** inside the
        <code>&lt;head&gt;</code> tag of your website.
      </p>

      <div className="relative rounded-lg border border-gray-300 bg-gray-100 p-3">
        <code className="block overflow-x-auto text-gray-800">{dummyCode}</code>
        <button className="absolute top-0 right-0 size-7 rounded bg-blue-500 p-2 text-white">
          <FaRegCopy />
        </button>
      </div>

      <div className="mt-5 flex flex-col gap-1 text-sm md:text-base">
        <label
          htmlFor="email"
          className="relative text-base font-medium text-gray-700"
        >
          Send to Developer
          <MdOutlineMailOutline className="absolute top-[50%] text-gray-400" />
          <input
            type="email"
            placeholder="Enter developer's email"
            id="email"
            className="mb-1 w-full rounded border-b border-gray-300 p-1 pl-5 text-sm outline-none placeholder:font-light"
          />
        </label>
        <button className="w-full rounded bg-blue-500 py-2 text-white transition-all hover:scale-105">
          Send Instructions via Email
        </button>
      </div>
    </div>
  );
};

export default Instruction;
