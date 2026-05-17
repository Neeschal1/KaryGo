import Topbar from "@/ui/home/topbar";
import FeaturedJobs from "@/ui/home/featuredJobs";

export default function Home() {
  return (
    <div className="flex-1 bg-background min-h-full">
      <div className="w-full p-5 max-w-lg mx-auto">
        <Topbar />
        <FeaturedJobs />
      </div>
    </div>
  );
}
