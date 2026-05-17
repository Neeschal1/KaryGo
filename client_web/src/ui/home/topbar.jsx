import { useNavigate } from "react-router-dom";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import homeLogo from "@/assets/images/homeLogo.png";

export default function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="w-full flex flex-row items-center -mt-2.5 mb-5 justify-between bg-background px-2 py-2">
        <div className="flex flex-row items-center shrink justify-center">
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="border-0 bg-transparent p-0 cursor-pointer"
          >
            <img
              src={homeLogo}
              alt="KaryGo"
              className="h-10 w-[70px] rounded-full object-contain"
            />
          </button>
          <span className="font-Quicksandsemibold text-2xl ml-1 truncate">
            KaryGo
          </span>
        </div>
        <div className="flex flex-row items-center">
          <button
            type="button"
            className="bg-white p-3 rounded-full mr-2 border-0 cursor-pointer"
            aria-label="Notifications"
          >
            <IoNotificationsOutline size={28} />
          </button>
          <button
            type="button"
            className="bg-white p-3 rounded-full border-0 cursor-pointer"
            aria-label="Search"
          >
            <IoSearchOutline size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
