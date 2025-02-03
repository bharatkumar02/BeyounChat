import { useState } from "react";
import PageData from "./PageData";
import Button from "./Button";

function SetupFormData({ companyData, setForm }) {
  const [showData, setShowData] = useState(null);
  function handelOnClick(pageName) {
    setShowData((prev) => (pageName === prev ? null : pageName));
  }
  const websiteData = [
    { pageName: "About Us", handelClick: () => handelOnClick("About Us") },
    { pageName: "Portfolio", handelClick: () => handelOnClick("Portfolio") },
    { pageName: "Home", handelClick: () => handelOnClick("Home") },
    { pageName: "Pricing", handelClick: () => handelOnClick("Pricing") },
    { pageName: "Contact", handelClick: () => handelOnClick("Contact Us") },
  ];
  return (
    <>
      <div className="mx-5 mb-5">
        <div className="my-7 space-y-3 text-gray-600">
          <h2>Company Name : {companyData.companyName}</h2>
          <h3>Company URL : {companyData.companyUrl}</h3>
          <h4>Company Description : {companyData.description}</h4>
        </div>
        <ul className="flex flex-wrap justify-center gap-5 border-t-[0.5px] border-gray-500 pt-5 *:grid *:h-[5rem] *:w-[5rem] *:cursor-pointer *:place-items-center *:rounded-md *:border-[0.5px] *:bg-white *:text-sm *:font-medium *:shadow-lg *:transition-all *:duration-300 *:ease-in-out *:hover:scale-105">
          {websiteData.map((item, index) => (
            <li
              key={index}
              onClick={item.handelClick}
              className="border-green-600 text-green-600"
            >
              {item.pageName}
            </li>
          ))}
        </ul>
        <Button
          btnName="Save & Continue"
          onClick={() => setForm()}
          extraClass="mt-5"
        />
      </div>
      {showData && <PageData data={showData} setShowData={setShowData} />}
    </>
  );
}

export default SetupFormData;
