import welcomeImage from "@/assets/images/welcomeImage.png";
import logo from "@/assets/images/mainlogo.png";
import {
  PrimaryButton,
  SecondaryButton,
  TextualButtonSecondary,
  DescriptiveText,
  SubTitleText,
} from "@/components/systemComponentLayout";

export default function Welcome() {
  return (
    <div className="flex flex-1 items-center justify-center min-h-screen">
      <div
        className="w-full min-h-screen flex justify-end items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${welcomeImage})` }}
      >
        <div className="w-full gap-6 bg-background py-8 rounded-3xl p-5 flex flex-col">
          <div className="w-full items-center flex flex-col">
            <img src={logo} alt="KaryGo" className="max-h-24" />
            <DescriptiveText text="Go further in your career :)" />
          </div>
          <div className="w-full gap-4 flex flex-col">
            <SecondaryButton text="Login" navigatingScreen="Login" />
            <PrimaryButton text="Get Started" navigatingScreen="Signup" />
          </div>
          <div className="flex flex-row gap-1 items-center justify-center">
            <TextualButtonSecondary text="KaryGo" navigatingScreen=" " />
            <SubTitleText text="© 2026. All rights reserved." />
          </div>
        </div>
      </div>
    </div>
  );
}
