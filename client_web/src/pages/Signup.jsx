import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import HandleSignup from "@/api/auth/handleSignup";
import logo from "@/assets/images/mainlogo.png";
import googleIcon from "@/assets/images/google.png";
import {
  PrimaryButton,
  TextualButtonPrimary,
  AuthTextCustomInput,
  AuthPasswordCustomInput,
  DescriptiveText,
  SubTitleText,
  ErrorText,
} from "@/components/systemComponentLayout";

export default function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex-1 bg-background min-h-screen overflow-y-auto">
      <div className="flex flex-1 bg-background items-center justify-center p-5 gap-6 max-w-lg mx-auto pb-10 flex-col">
        <div className="items-center flex flex-col">
          <img src={logo} alt="KaryGo" className="max-h-20 mb-2" />
          <DescriptiveText text="Begin to KaryGo by creating a fresh account." />
        </div>
        <div className="w-full gap-4 flex flex-col">
          <div className="w-full gap-2">
            <SubTitleText text="Full Name" />
            <AuthTextCustomInput placeholderText="Enter your full name" valueText={fullName} setValueText={setFullName} />
          </div>
          <div className="w-full gap-2">
            <SubTitleText text="Email" />
            <AuthTextCustomInput placeholderText="Enter your email" valueText={email} setValueText={setEmail} type="email" />
          </div>
          <div className="w-full gap-2">
            <SubTitleText text="Username" />
            <AuthTextCustomInput placeholderText="Enter your username" valueText={username} setValueText={setUsername} />
          </div>
          <div className="w-full gap-2">
            {error ? <ErrorText text="Password must match with Confirm Password" /> : <SubTitleText text="Password" />}
            <AuthPasswordCustomInput placeholderText="Enter your password" valueText={password} setValueText={setPassword} />
          </div>
          <div className="w-full gap-2">
            {error ? <ErrorText text="Confirm Password must match with Password" /> : <SubTitleText text="Confirm Password" />}
            <AuthPasswordCustomInput placeholderText="Confirm your password" valueText={confirmPassword} setValueText={setConfirmPassword} />
          </div>
          <label className="flex flex-row gap-3 mt-2 items-center cursor-pointer">
            <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="w-5 h-5" />
            <SubTitleText text="Remember me!" />
          </label>
        </div>
        <PrimaryButton
          loading={loading}
          text="Signup"
          Press={HandleSignup}
          parameters={{ fullName, email, username, password, confirmPassword, checked, setLoading, setError, navigate }}
        />
        <div className="flex items-center justify-center w-full gap-3">
          <div className="horizontal-bar" />
          <span className="text-gray-500">OR</span>
          <div className="horizontal-bar" />
        </div>
        <div className="gap-2 w-full flex flex-col">
          <button type="button" onClick={() => navigate("/otp")} className="bg-black rounded-button w-full flex flex-row justify-center items-center border-0 cursor-pointer">
            <FaApple size={24} color="#FFFFFF" />
            <span className="font-Quicksandmedium text-lighttext text-xl py-4 px-5">Continue with Apple</span>
          </button>
          <button type="button" onClick={() => navigate("/app")} className="border border-[#626262] rounded-button w-full flex flex-row justify-center items-center bg-transparent cursor-pointer">
            <img src={googleIcon} alt="Google" className="h-6" />
            <span className="font-Quicksandmedium text-black text-xl py-4 px-5">Continue with Google</span>
          </button>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <SubTitleText text="Already have an account?" />
          <TextualButtonPrimary text="Login" navigatingScreen="Login" />
        </div>
      </div>
    </div>
  );
}
