import { useNavigate } from "react-router-dom";
import { storage } from "@/utils/storage";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    storage.removeItem("accessJWTToken");
    storage.removeItem("refreshJWTToken");
    navigate("/welcome");
  };

  return (
    <div className="flex-1 bg-background min-h-screen flex items-center justify-center flex-col gap-4">
      <p className="text-darktext font-Quicksandmedium text-xl">Profile</p>
      <button
        type="button"
        onClick={handleLogout}
        className="p-3 bg-red-500 text-white rounded-lg border-0 cursor-pointer font-Quicksandbold"
      >
        Log Out
      </button>
    </div>
  );
}
