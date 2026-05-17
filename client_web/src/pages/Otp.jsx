import { useState, useRef, useEffect } from "react";
import logo from "@/assets/images/mainlogo.png";
import {
  PrimaryButton,
  DescriptiveText,
  SubTitleText,
  TextualButtonPrimary,
  ErrorText,
} from "@/components/systemComponentLayout";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [secondsLeft, setSecondsLeft] = useState(120);
  const [timeExpired, setTimeExpired] = useState(false);
  const [warningPeriod, setWarningPeriod] = useState(false);
  const refs = useRef([]);

  useEffect(() => {
    if (secondsLeft <= 0) {
      setTimeExpired(true);
      return;
    }
    if (secondsLeft <= 10) setWarningPeriod(true);
    const id = setInterval(() => setSecondsLeft((p) => p - 1), 1000);
    return () => clearInterval(id);
  }, [secondsLeft]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) refs.current[index + 1]?.focus();
  };

  return (
    <div className="flex-1 bg-background min-h-screen flex items-center justify-center p-5">
      <div className="w-full max-w-md gap-6 flex flex-col">
        <div className="items-center flex flex-col">
          <img src={logo} alt="KaryGo" className="max-h-20 mb-2" />
          <DescriptiveText text="Begin to KaryGo by creating a fresh account." />
        </div>
        <div className="w-full gap-2">
          <div className="flex justify-between flex-row items-center">
            <SubTitleText text="Enter OTP" />
            {timeExpired ? (
              <ErrorText text="Time Expired" />
            ) : warningPeriod ? (
              <ErrorText text={`Time Remaining: ${secondsLeft} seconds`} />
            ) : (
              <SubTitleText text={`Time Remaining: ${secondsLeft} seconds`} />
            )}
          </div>
          <div className="flex flex-row gap-2">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(el) => { refs.current[index] = el; }}
                placeholder="*"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                inputMode="numeric"
                maxLength={1}
                className="border text-center border-descriptiveText font-Quicksandmedium text-descriptiveText rounded-button w-full py-5 flex-1 outline-none focus:border-primary"
              />
            ))}
          </div>
        </div>
        <PrimaryButton text="Verify" navigatingScreen="ChooseRole" />
        <div className="text-center">
          <DescriptiveText text="Didn't receive an OTP?" />
          <TextualButtonPrimary navigatingScreen="TabNavigation" text="Resend OTP again" />
        </div>
      </div>
    </div>
  );
}
