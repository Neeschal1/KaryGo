import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Recruiter from "@/api/userRoles/recruiter";
import logo from "@/assets/images/mainlogo.png";
import {
  AuthTextCustomInput,
  DescriptiveText,
  PrimaryButton,
  SubTitleText,
} from "@/components/systemComponentLayout";

const Required = () => <span className="text-red-600">*</span>;

function Field({ label, required, value, setValue, placeholder }) {
  return (
    <div className="w-full gap-2 flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <SubTitleText text={label} />
        {required && <Required />}
      </div>
      <AuthTextCustomInput placeholderText={placeholder} valueText={value} setValueText={setValue} />
    </div>
  );
}

export default function RecruiterProfile() {
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState("");
  const [web, setWeb] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex-1 bg-background min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto p-5 max-w-lg mx-auto w-full">
        <div className="items-center flex flex-col gap-6 mb-6">
          <img src={logo} alt="KaryGo" className="max-h-20" />
          <DescriptiveText text="Create a fresh profile based on your role as a Recruiter" />
        </div>
        <div className="w-full gap-4 flex flex-col">
          <Field label="Profile Name" required value={profileName} setValue={setProfileName} placeholder="Enter your profile name" />
          <Field label="Website or Portfolio" value={web} setValue={setWeb} placeholder="Your website or portfolio link" />
          <Field label="Location" required value={location} setValue={setLocation} placeholder="Enter your location" />
          <Field label="Phone" required value={phone} setValue={setPhone} placeholder="Enter your phone number" />
          <Field label="Your Company Name" required value={companyName} setValue={setCompanyName} placeholder="Enter your current company name" />
          <Field label="Position" required value={position} setValue={setPosition} placeholder="Enter your position in above's company" />
          <Field label="Industry" required value={industry} setValue={setIndustry} placeholder="Mention your Industry" />
        </div>
      </div>
      <div className="p-5 max-w-lg mx-auto w-full">
        <PrimaryButton
          text="Set up a new Profile"
          loading={loading}
          Press={Recruiter}
          parameters={{ profileName, web, location, phone, companyName, position, industry, setLoading, navigate }}
        />
      </div>
    </div>
  );
}
