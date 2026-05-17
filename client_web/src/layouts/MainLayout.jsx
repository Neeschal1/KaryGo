import { NavLink, Outlet } from "react-router-dom";
import {
  IoHome,
  IoHomeOutline,
  IoBriefcase,
  IoBriefcaseOutline,
  IoPeople,
  IoPeopleOutline,
  IoChatbubble,
  IoChatbubbleOutline,
} from "react-icons/io5";
import profilePic from "@/assets/images/profile.jpg";

const tabs = [
  { path: "/app", label: "Home", icon: IoHome, iconOutline: IoHomeOutline, end: true },
  { path: "/app/jobs", label: "Jobs", icon: IoBriefcase, iconOutline: IoBriefcaseOutline },
  { path: "/app/community", label: "Community", icon: IoPeople, iconOutline: IoPeopleOutline },
  { path: "/app/chats", label: "Chats", icon: IoChatbubble, iconOutline: IoChatbubbleOutline },
  { path: "/app/profile", label: "Profile", isProfile: true },
];

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 pb-[72px] overflow-y-auto">
        <Outlet />
      </main>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E5E5E5] shadow-lg safe-area-bottom">
        <div className="flex justify-around items-center h-[60px] max-w-lg mx-auto">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end={tab.end}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 py-1 text-xs ${
                  isActive ? "text-primary" : "text-gray-500"
                }`
              }
            >
              {({ isActive }) =>
                tab.isProfile ? (
                  <>
                    <img
                      src={profilePic}
                      alt="Profile"
                      className={`h-[22px] w-[22px] rounded-full object-cover ${
                        isActive ? "ring-2 ring-primary" : ""
                      }`}
                    />
                    <span className="mt-1">{tab.label}</span>
                  </>
                ) : (
                  <>
                    {isActive ? (
                      <tab.icon size={20} />
                    ) : (
                      <tab.iconOutline size={20} />
                    )}
                    <span className="mt-1">{tab.label}</span>
                  </>
                )
              }
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
