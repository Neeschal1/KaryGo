import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import HandleLogin from "@/api/auth/handleLogin";
import loginBG from "@/assets/images/loginBG.png";
import logo from "@/assets/images/mainlogo.png";
import googleIcon from "@/assets/images/google.png";
import {
  PrimaryButton,
  TextualButtonPrimary,
  AuthTextCustomInput,
  AuthPasswordCustomInput,
  DescriptiveText,
  SubTitleText,
} from "@/components/systemComponentLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Invalid Credentials!");
  const navigate = useNavigate();

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(false), 4000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="overflow-y-auto min-h-screen bg-background">
      <div
        className="flex items-center justify-center px-5 bg-cover bg-center"
        style={{ height: 223, backgroundImage: `url(${loginBG})` }}
      >
        {error && (
          <div className="flex bg-red-600 py-7 px-6 rounded-3xl">
            <p className="text-white font-Quicksandbold text-center">{errorMessage}</p>
          </div>
        )}
      </div>
      <div className="flex flex-1 bg-background w-full p-5 rounded-button -mt-5 gap-8 justify-center max-w-lg mx-auto pb-10">
        <div className="w-full gap-6 mt-5">
          <div className="items-center flex flex-col">
            <img src={logo} alt="KaryGo" className="max-h-20 mb-2" />
            <DescriptiveText text="Please login your account in order to continue." />
          </div>
          <div className="w-full items-end gap-2 flex flex-col">
            <div className="w-full gap-4 flex flex-col">
              <div className="w-full gap-2">
                <SubTitleText text="Email" />
                <AuthTextCustomInput
                  placeholderText="Enter your email"
                  valueText={email}
                  setValueText={setEmail}
                  type="email"
                />
              </div>
              <div className="w-full gap-2">
                <SubTitleText text="Password" />
                <AuthPasswordCustomInput
                  placeholderText="Enter your password"
                  valueText={password}
                  setValueText={setPassword}
                />
              </div>
            </div>
            <TextualButtonPrimary text="Forgot Password?" />
          </div>
          <PrimaryButton
            loading={loading}
            text="Login"
            Press={HandleLogin}
            parameters={{
              email,
              password,
              setLoading,
              setError,
              setErrorMessage,
              navigate,
            }}
          />
        </div>
        <div className="flex-row flex items-center justify-center w-full flex">
          <div className="horizontal-bar" />
          <span className="mx-3 text-gray-500 text-center">OR</span>
          <div className="horizontal-bar" />
        </div>
        <div className="flex items-center justify-center gap-4 flex-col">
          <div className="gap-2 w-full flex flex-col">
            <button
              type="button"
              onClick={() => navigate("/resume")}
              className="bg-black rounded-button w-full flex flex-row justify-center items-center border-0 cursor-pointer"
            >
              <FaApple size={24} color="#FFFFFF" />
              <span className="font-Quicksandmedium text-lighttext text-xl py-4 px-5">
                Continue with Apple
              </span>
            </button>
            <button
              type="button"
              className="border border-[#626262] rounded-button w-full flex flex-row justify-center items-center bg-transparent cursor-pointer"
            >
              <img src={googleIcon} alt="Google" className="h-6" />
              <span className="font-Quicksandmedium text-black text-xl py-4 px-5">
                Continue with Google
              </span>
            </button>
          </div>
          <div className="items-center justify-center flex flex-row gap-1">
            <SubTitleText text="New to KaryGo?" />
            <TextualButtonPrimary text="Signup" navigatingScreen="Signup" />
          </div>
        </div>
      </div>
    </div>
  );
}
