import logo from "@/assets/images/mainlogo.png";
import {
  DescriptiveText,
  PrimaryButton,
  SubTitleText,
  TextualButtonSecondary,
  Title,
} from "@/components/systemComponentLayout";

export default function ChooseRole() {
  return (
    <div className="flex-1 bg-background min-h-screen flex items-center justify-center p-5">
      <div className="w-full max-w-md gap-6 flex flex-col items-center">
        <div className="items-center flex flex-col">
          <img src={logo} alt="KaryGo" className="max-h-20 mb-2" />
          <DescriptiveText text="Begin to KaryGo by choosing which role best suits your" />
        </div>
        <div className="flex items-center justify-center gap-6 flex-col w-full">
          <Title text="Choose your Role" />
          <div className="flex flex-row w-full justify-between gap-2">
            <div className="flex w-1/2">
              <PrimaryButton navigatingScreen="SeekerProfile" text="Seeker" />
            </div>
            <div className="flex w-1/2">
              <PrimaryButton navigatingScreen="RecruiterProfile" text="Recruiter" />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center">
          <TextualButtonSecondary text="KaryGo" navigatingScreen=" " />
          <SubTitleText text="© 2026. All rights reserved." />
        </div>
      </div>
    </div>
  );
}
