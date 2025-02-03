import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageData from "./PageData";
import Instruction from "./Instruction";
import Button from "./Button";

function Integration() {
  const [showData, setShowData] = useState(false);
  const navigate = useNavigate();
  function handelOnClick() {
    setShowData((prev) => !prev);
  }

  return (
    <>
      <div className="m-10 flex flex-col gap-7">
        <h2 className="relative left-3 mb-7 rounded-r-full bg-blue-50 p-2 text-center text-[1.7rem] font-semibold text-gray-700 before:absolute before:top-1/2 before:-left-3 before:h-full before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-blue-500">
          Organization Setup
        </h2>
        <Button
          btnName="Test Chatbot"
          onClick={() => navigate("/test-chatbot")}
        />
        <Button btnName="Integrate on your website" onClick={handelOnClick} />
        <Button
          btnName="Test integration"
          onClick={() => navigate("/test-integration")}
        />
      </div>

      {showData && (
        <PageData data={<Instruction />} setShowData={setShowData} />
      )}
    </>
  );
}

export default Integration;
