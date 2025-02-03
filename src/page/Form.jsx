import { useState } from "react";

import SetupForm from "../components/SetupForm";
import SetupFormData from "../components/SetupFormData";
import Integration from "../components/Integration";
import Otp from "../components/Otp";
import UserResgistration from "../components/UserResgistration";
import Design from "../components/Design";

function RegistrationForm() {
  const [form, setForm] = useState(1);
  const [companyData, setCompanyData] = useState(null);
  return (
    <section className="md:grid md:min-h-screen md:place-items-center">
      <div className="bg-white md:mx-auto md:grid md:h-fit md:min-h-[500px] md:w-full md:max-w-[900px] md:grid-cols-2 md:border-[0.1px] md:border-gray-200 md:pb-10 md:shadow-lg">
        <Design />
        {form === 1 && <UserResgistration setForm={() => setForm(2)} />}
        {form === 2 && <Otp setForm={() => setForm(3)} />}
        {form === 3 && (
          <SetupForm
            setForm={() => setForm(4)}
            setCompanyData={setCompanyData}
          />
        )}
        {form === 4 && (
          <SetupFormData setForm={() => setForm(5)} companyData={companyData} />
        )}

        {form === 5 && <Integration setForm={() => setForm(6)} />}
      </div>
    </section>
  );
}

export default RegistrationForm;
