import { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { MdOutlineDescription } from "react-icons/md";
import Input from "./Input";
import Button from "./Button";

function SetupForm({ setForm, setCompanyData }) {
  const [enterValue, setEnterValue] = useState({
    companyName: "",
    companyUrl: "",
    description: "",
  });
  function handleInputChange(identifier, value) {
    setEnterValue((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCompanyData(enterValue);
    setForm();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="m-10 my-7 space-y-8">
        <h2 className="relative left-3 mb-7 rounded-r-full bg-blue-50 p-2 text-center text-[1.7rem] font-semibold text-gray-700 before:absolute before:top-1/2 before:-left-3 before:h-full before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-blue-500">
          Organization Setup
        </h2>
        <Input
          name="company name"
          type="text"
          value={enterValue.companyName}
          placeholder="Enter Company Name"
          onChange={(event) =>
            handleInputChange("companyName", event.target.value)
          }
          Icon={MdDriveFileRenameOutline}
        />
        <Input
          name="Company URL"
          type="url"
          value={enterValue.companyUrl}
          placeholder="Enter Company URL"
          onChange={(event) =>
            handleInputChange("companyUrl", event.target.value)
          }
          Icon={FaLink}
        />

        <label
          htmlFor="description"
          className="relative flex flex-col tracking-wider uppercase"
        >
          Company Description
          <textarea
            id="description"
            rows={1}
            placeholder="Enter Company Description"
            value={enterValue.description}
            onChange={(event) =>
              handleInputChange("description", event.target.value)
            }
            className="peer border-b border-b-gray-400 py-1 pl-6 outline-0 transition-all duration-300 ease-in-out placeholder:text-gray-300 focus:border-b-blue-400"
          ></textarea>
          <MdOutlineDescription
            size={18}
            className="absolute top-8 left-0 text-gray-400 transition-all duration-300 ease-in-out peer-focus:text-blue-300"
          />
        </label>
        <Button btnName="Continue" type="submit"/>
      
      </form>
    </div>
  );
}

export default SetupForm;
