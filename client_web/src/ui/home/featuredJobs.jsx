import { IoRocketOutline } from "react-icons/io5";
import {
  SubTitleText,
  TitleText,
  Title,
  ApplyButton,
} from "@/components/systemComponentLayout";

const JobsLists = [
  { index: 1, JobName: "Senior UI Designer", CompanyName: "TechCorp", Field: "Remote", Stipend: "$80k - $120k" },
  { index: 2, JobName: "Frontend Developer", CompanyName: "InnovateX", Field: "Onsite", Stipend: "$70k - $100k" },
  { index: 3, JobName: "React Native Developer", CompanyName: "Appify Solutions", Field: "Remote", Stipend: "$75k - $110k" },
  { index: 4, JobName: "UI/UX Designer", CompanyName: "DesignHub", Field: "Hybrid", Stipend: "$60k - $90k" },
  { index: 5, JobName: "Backend Developer", CompanyName: "CodeBase Inc.", Field: "Onsite", Stipend: "$85k - $130k" },
  { index: 6, JobName: "Product Designer", CompanyName: "Visionary Labs", Field: "Remote", Stipend: "$90k - $140k" },
  { index: 7, JobName: "Mobile App Developer", CompanyName: "NextGen Apps", Field: "Hybrid", Stipend: "$70k - $105k" },
  { index: 8, JobName: "Full Stack Developer", CompanyName: "DevWorks", Field: "Remote", Stipend: "$95k - $150k" },
  { index: 9, JobName: "Graphic Designer", CompanyName: "Creative Studio", Field: "Onsite", Stipend: "$50k - $75k" },
  { index: 10, JobName: "Software Engineer Intern", CompanyName: "StartupX", Field: "Remote", Stipend: "$20k - $35k" },
];

export default function FeaturedJobs() {
  return (
    <div className="flex-1">
      <h2 className="mb-2">
        <Title text="Featured Jobs" />
      </h2>
      <div className="flex flex-col gap-4">
        {JobsLists.map((item) => (
          <div key={item.index} className="flex mb-4 items-center w-full justify-center">
            <div className="flex p-5 gap-5 bg-white w-full rounded-2xl items-start justify-center flex-col">
              <div className="flex gap-2 flex-col w-full">
                <div className="flex flex-row items-center gap-4">
                  <span className="p-4 flex bg-[#F0F5FC] rounded-2xl">
                    <IoRocketOutline size={26} className="text-blue-600" />
                  </span>
                  <div>
                    <Title text={item.JobName} />
                    <SubTitleText text={item.CompanyName} />
                  </div>
                </div>
                <div className="flex flex-row gap-2 flex-wrap">
                  <span className="bg-[#E7EFF9] p-2 rounded-full px-5">
                    <TitleText text={item.Stipend} />
                  </span>
                  <span className="bg-[#FEF6E6] p-2 rounded-full px-5">
                    <TitleText text={item.Field} />
                  </span>
                </div>
              </div>
              <ApplyButton text="Apply Now!" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-10 items-center justify-center mt-4">
        <TitleText text="You've come to the end :)" />
      </div>
    </div>
  );
}
